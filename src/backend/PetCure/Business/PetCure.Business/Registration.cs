using FluentValidation;

using Mapster;

using MediatR;

using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

using PetCure.Business.PipelineBehaviours;
using PetCure.Business.Seed;

using System.Reflection;

namespace PetCure.Business
{
    public static class Registration
    {
        public static IServiceCollection AddBusinessLayer(this IServiceCollection services, IHostEnvironment hostingEnvironment)
        {
            services.AddMediatR(config =>
            {
                config.RegisterServicesFromAssembly(typeof(Registration).Assembly);
            });

            services.AddValidatorsFromAssembly(typeof(Registration).Assembly, includeInternalTypes: true);

            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationBehavior<,>));
            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(LoggingBehavior<,>));

            services.AddSeedServices(hostingEnvironment.EnvironmentName);

            TypeAdapterConfig.GlobalSettings.Scan(Assembly.GetExecutingAssembly());
            TypeAdapterConfig.GlobalSettings.Default.IgnoreNullValues(true);

            return services;
        }
    }
}
