using Microsoft.EntityFrameworkCore;

using PetCure.Business.Seed.Configuration;
using PetCure.Business.Seed.Services.Base;
using PetCure.DataAccess;
using PetCure.Domains.PatientManagement;

using System.Collections.Immutable;

namespace PetCure.Business.Seed.Services
{
    internal class AppointmentSeedService : BaseSeedService
    {
        public AppointmentSeedService(PatientManagementDbContext dbContext)
            : base(dbContext)
        {
        }

        protected override ImmutableList<SeedServiceType> Dependencies => [SeedServiceType.Veterinarian, SeedServiceType.Pet];

        public override async Task Execute(CancellationToken cancellationToken)
        {
            var veterinarians = await _dbContext.Veterinarians.ToListAsync(cancellationToken);
            var pets = await _dbContext.Pets.ToListAsync(cancellationToken);

            foreach (var pet in pets)
            {
                var randomVeterinarian = _faker.PickRandom(veterinarians);

                var appointment = new Appointment(
                    pet.Id,
                    pet.OwnerId,
                    randomVeterinarian.Id,
                    _faker.Date.Soon(days: 30),
                    _faker.Lorem.Sentence(),
                    _faker.Lorem.Sentence());

                await _dbContext.AddAsync(appointment);
            }
        }
    }
}
