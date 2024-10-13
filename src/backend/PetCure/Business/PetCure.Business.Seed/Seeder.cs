using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using Newtonsoft.Json;

using PetCure.Business.Seed.Configuration;
using PetCure.Business.Seed.Data;
using PetCure.Business.Seed.Services.Base;
using PetCure.DataAccess;

using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Converters;

namespace PetCure.Business.Seed
{
    public interface ISeeder
    {
        Task SeedAsync(SeedServiceType service, CancellationToken cancellationToken, bool recreateDb = false);
    }

    internal class Seeder : ISeeder
    {
        private readonly ILogger<Seeder> _logger;
        private readonly IServiceProvider _serviceProvider;
        private readonly SeedCache _seedCache;
        private readonly SeedServices _seedServices;
        private readonly PatientManagementDbContext _dbContext;
        private readonly IHostEnvironment _hostEnvironment;

        public Seeder(
            ILogger<Seeder> logger,
            IServiceProvider serviceProvider,
            SeedCache seedCache,
            SeedServices seedServices,
            PatientManagementDbContext dbContext,
            IHostEnvironment hostEnvironment)
        {
            _logger = logger;
            _serviceProvider = serviceProvider;
            _seedCache = seedCache;
            _seedServices = seedServices;
            _dbContext = dbContext;
            _hostEnvironment = hostEnvironment;
        }

        public async Task SeedAsync(SeedServiceType service, CancellationToken cancellationToken, bool recreateDb = false)
        {
            if (_hostEnvironment.IsProduction())
            {
                throw new NotSupportedException($"{nameof(ISeeder)} is not supported for {_hostEnvironment.EnvironmentName} environment.");
            }

            try
            {
                if (recreateDb)
                {
                    await _dbContext.Database.EnsureDeletedAsync();
                    await _dbContext.Database.EnsureCreatedAsync();
                    _seedCache.Clear();
                }

                await _dbContext.Database.BeginTransactionAsync(cancellationToken);

                await ResolveAndSeed(service, cancellationToken);

                _dbContext.ChangeTracker.DetectChanges();

                await _dbContext.SaveChangesAsync(cancellationToken);

                await _dbContext.Database.CommitTransactionAsync(cancellationToken);

                _seedCache.UpdateSeedCacheData();
            }
            catch (Exception ex)
            {
                await _dbContext.Database.RollbackTransactionAsync(cancellationToken);
                throw;
            }
        }

        // TODO: Add some type of control to prevent circular dependency
        private async Task ResolveAndSeed(SeedServiceType service, CancellationToken cancellationToken)
        {
            _logger.LogInformation("Initializing seed service {0}", service);

            var seedService = _seedServices.GetService(_serviceProvider, service);

            _logger.LogInformation("Resolving dependencies for {0}", service);

            var dependencies = _seedCache.FindUnexecutedServices(seedService.GetDependencies());

            _logger.LogInformation("{0} dependencies found for {1}", dependencies.Count(), service);

            foreach (var serviceDependency in dependencies)
            {
                await ResolveAndSeed(serviceDependency, cancellationToken);
            }

            _logger.LogInformation("Executing seed service {0}", service);

            await seedService.Execute(cancellationToken);

            _seedCache.AddExecutedService(service);

            _dbContext.ChangeTracker.DetectChanges();

            await _dbContext.SaveChangesAsync(cancellationToken);

            _logger.LogInformation("Executed seed service {0}", service);
        }
    }

    public static class SeedServiceInitializer
    {
        public static void AddSeedServices(this IServiceCollection services, string environment)
        {
            Console.WriteLine(environment);
            Debug.Write(environment);

            SeedData seedData;
            var assembly = typeof(SeedData).Assembly;
            var assemlyName = assembly.FullName.Split(',').FirstOrDefault();

            string resourceName = $"{assemlyName}.Data.DataFiles.SeedData.{environment}.json";

            using (var stream = assembly.GetManifestResourceStream(resourceName))
            using (var reader = new StreamReader(stream, Encoding.UTF8))
            {
                string data = reader.ReadToEnd();
                if (string.IsNullOrEmpty(data))
                {
                    throw new InvalidOperationException($"Could not load seed data file. ({resourceName})");
                }

                var settings = new JsonSerializerSettings
                {
                    ContractResolver = new PrivateSetterContractResolver(),
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                };

                settings.Converters.Add(new StringEnumConverter());

                seedData = JsonConvert.DeserializeObject<SeedData>(data, settings);

                services.AddSingleton(seedData);
            }

            var seedServices = new SeedServices();
            var baseSeedServiceType = typeof(BaseSeedService);
            var seedServiceTypes = baseSeedServiceType.Assembly
                .GetTypes()
                .Where(x => !x.IsAbstract && x.BaseType == baseSeedServiceType);

            foreach (var serviceType in seedServiceTypes)
            {
                services.AddScoped(serviceType);
                seedServices.Add(serviceType.Name.Replace("SeedService", string.Empty), serviceType);
            }

            services.AddSingleton(seedServices);
            services.AddSingleton(new SeedCache());
            services.AddScoped<ISeeder, Seeder>();
        }
    }
}
