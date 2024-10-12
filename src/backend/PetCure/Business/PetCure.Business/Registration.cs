using FluentValidation;

using Mapster;

using MediatR;

using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

using PetCure.Business.PipelineBehaviours;
using PetCure.Business.PipelineBehaviours.VoidBehaviors;
using PetCure.Business.Seed;

using System.Reflection;
using System.Runtime.CompilerServices;

[assembly: InternalsVisibleTo("Mapster")]
namespace PetCure.Business
{
    public static class Registration
    {
        public static IServiceCollection AddBusinessLayer(this IServiceCollection services, IHostEnvironment hostingEnvironment)
        {
            services.AddMediatR(config =>
            {
                config.RegisterServicesFromAssembly(typeof(Registration).Assembly);
                config.AddOpenBehavior(typeof(LoggingBehavior<,>));
                config.AddOpenBehavior(typeof(ValidationBehavior<,>));
                config.AddOpenBehavior(typeof(TransactionBehavior<,>));
                config.AddOpenBehavior(typeof(LoggingBehaviorForVoidRequests<,>));
                config.AddOpenBehavior(typeof(ValidationBehaviorForVoidRequests<,>));
                config.AddOpenBehavior(typeof(TransactionBehaviorForVoidRequest<,>));
            });

            services.AddValidatorsFromAssembly(typeof(Registration).Assembly, includeInternalTypes: true);

            services.AddSeedServices(hostingEnvironment.EnvironmentName);

            TypeAdapterConfig.GlobalSettings.Scan(Assembly.GetExecutingAssembly());
            TypeAdapterConfig.GlobalSettings.Default.IgnoreNullValues(true);

            return services;
        }
    }
}
