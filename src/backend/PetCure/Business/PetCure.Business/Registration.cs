using Mapster;

using MediatR;

using Microsoft.Extensions.DependencyInjection;

using PetCure.Business.CQRS.PatientManagement.Vetenerians.Commands;
using PetCure.Business.PipelineBehaviours;

namespace PetCure.Business
{
    public static class Registration
    {
        public static IServiceCollection AddBusinessLayer(this IServiceCollection services)
        {
            services.AddMediatR(config =>
            {
                config.RegisterServicesFromAssembly(typeof(Registration).Assembly);
            });

            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationBehavior<,>));
            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(LoggingBehavior<,>));

            services.AddTransient<IPipelineBehavior<CreateVeterinarianCommand, Unit>, ResilienceBehavior<CreateVeterinarianCommand, Unit>>();

            TypeAdapterConfig.GlobalSettings.Scan(typeof(ServiceCollectionExtensions).Assembly);
            TypeAdapterConfig.GlobalSettings.Default.IgnoreNullValues(true);

            return services;
        }
    }
}
