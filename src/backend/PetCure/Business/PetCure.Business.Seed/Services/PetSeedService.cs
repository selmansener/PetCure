using Microsoft.EntityFrameworkCore;

using PetCure.Business.Seed.Configuration;
using PetCure.Business.Seed.Services.Base;
using PetCure.DataAccess;
using PetCure.Domains.PatientManagement;

using System.Collections.Immutable;

namespace PetCure.Business.Seed.Services
{
    internal class PetSeedService : BaseSeedService
    {
        public PetSeedService(PatientManagementDbContext dbContext)
            : base(dbContext)
        {
        }

        protected override ImmutableList<SeedServiceType> Dependencies => [SeedServiceType.PetOwner];

        public override async Task Execute(CancellationToken cancellationToken)
        {
            var petOwners = await _dbContext.PetOwners.ToListAsync(cancellationToken);

            foreach (var petOwner in petOwners)
            {
                var pet = new Pet(
                    petOwner.Id,
                    _faker.Lorem.Word(),
                    _faker.PickRandomWithout(Domains.Enums.PetSpecies.None),
                    breed: null,
                    _faker.PickRandom("Erkek", "Dişi"),
                    _faker.Date.PastDateOnly(yearsToGoBack: 15).ToDateTime(TimeOnly.MinValue),
                    _faker.Random.Float(min: 1, max: 10),
                    _faker.PickRandom("Red", "Green", "Black", "Mixed"),
                    _faker.Random.Replace("##-****-****"),
                    _faker.Lorem.Sentence());

                await _dbContext.AddAsync(pet, cancellationToken);
            }
        }
    }
}
