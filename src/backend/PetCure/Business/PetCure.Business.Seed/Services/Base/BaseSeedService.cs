using Bogus;

using PetCure.Business.Seed.Configuration;
using PetCure.DataAccess;

using System.Collections.Immutable;

namespace PetCure.Business.Seed.Services.Base
{
    internal interface ISeedService
    {
        Task Execute(CancellationToken cancellationToken);

        ImmutableList<SeedServiceType> GetDependencies();
    }

    internal abstract class BaseSeedService : ISeedService
    {
        protected readonly PatientManagementDbContext _dbContext;
        protected readonly Faker _faker;

        protected BaseSeedService(PatientManagementDbContext dbContext)
        {
            _dbContext = dbContext;
            _faker = new Faker(locale: "tr");
        }

        protected virtual ImmutableList<SeedServiceType> Dependencies { get; } = ImmutableList<SeedServiceType>.Empty;

        public abstract Task Execute(CancellationToken cancellationToken);

        public ImmutableList<SeedServiceType> GetDependencies()
        {
            return Dependencies;
        }
    }
}
