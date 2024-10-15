using Microsoft.EntityFrameworkCore;

namespace PetCure.DataAccess
{
    internal class PatientManagementDbContextFactory : IDbContextFactory<PatientManagementDbContext>
    {
        private const int DefaultTenantId = -1;
        private readonly IDbContextFactory<PatientManagementDbContext> _pooledFactory;

        public PatientManagementDbContextFactory(
            IDbContextFactory<PatientManagementDbContext> pooledFactory)
        {
            _pooledFactory = pooledFactory;
        }

        public PatientManagementDbContext CreateDbContext()
        {
            var context = _pooledFactory.CreateDbContext();
            // TODO: Implement this if there is an upcoming identity server implementation with tenant/organization management
            context.TenantId = DefaultTenantId;
            return context;
        }
    }
}
