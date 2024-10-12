using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

using PetCure.DataAccess.Helpers;
using PetCure.DataAccess.Repositories;

namespace PetCure.DataAccess
{
    public static class Registration
    {
        public static IServiceCollection AddDataAccess(this IServiceCollection services, IHostEnvironment environment, string connectionString)
        {
            services.AddDbContext<PatientManagementDbContext>(options =>
            {
                options.UseSqlServer(connectionString);
            });

            services.AddScoped(typeof(IBaseRepository<>), typeof(BaseRepository<>));
            services.AddScoped<ITransactionManager, TransactionManager>();

            services.AddScoped<IVeterinarianRepository, VeterinarianRepository>();

            if (environment.IsDevelopment())
            {
                services.AddScoped<IDbContextHelper, DbContextHelper>();
            }

            return services;
        }
    }
}
