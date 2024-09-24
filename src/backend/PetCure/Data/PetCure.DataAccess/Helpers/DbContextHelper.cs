using Microsoft.EntityFrameworkCore;

namespace PetCure.DataAccess.Helpers
{
    public interface IDbContextHelper
    {
        public Task EnsureCreated(CancellationToken cancellationToken);

        public Task EnsureDeleted(CancellationToken cancellationToken); 

        public Task Migrate(CancellationToken cancellationToken);
    }

    internal class DbContextHelper : IDbContextHelper
    {
        private readonly PatientManagementDbContext _context;

        public DbContextHelper(PatientManagementDbContext context)
        {
            _context = context;
        }

        public async Task EnsureCreated(CancellationToken cancellationToken)
        {
            await _context.Database.EnsureCreatedAsync(cancellationToken);
        }

        public async Task EnsureDeleted(CancellationToken cancellationToken)
        {
            await _context.Database.EnsureDeletedAsync(cancellationToken);
        }

        public async Task Migrate(CancellationToken cancellationToken)
        {
            await _context.Database.MigrateAsync(cancellationToken);
        }
    }
}
