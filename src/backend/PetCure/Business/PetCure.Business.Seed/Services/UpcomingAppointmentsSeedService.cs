using Microsoft.EntityFrameworkCore;

using PetCure.Business.Seed.Configuration;
using PetCure.Business.Seed.Services.Base;
using PetCure.DataAccess;
using PetCure.Domains.PatientManagement;

using System.Collections.Immutable;

namespace PetCure.Business.Seed.Services
{
    internal class UpcomingAppointmentsSeedService : BaseSeedService
    {
        public UpcomingAppointmentsSeedService(PatientManagementDbContext dbContext)
            : base(dbContext)
        {
        }

        protected override ImmutableList<SeedServiceType> Dependencies => [SeedServiceType.Veterinarian, SeedServiceType.Pet];

        public override async Task Execute(CancellationToken cancellationToken)
        {
            var vets = await _dbContext.Veterinarians.ToListAsync(cancellationToken);
            var pets = await _dbContext.Pets.ToListAsync(cancellationToken);

            for (int i = 0; i < 50; i++)
            {
                var randomVet = _faker.PickRandom(vets);
                var randomPet = _faker.PickRandom(pets);

                var appt = new Appointment(
                    randomPet.Id,
                    randomPet.OwnerId,
                    randomVet.Id,
                    _faker.Date.Soon(days: 30),
                    _faker.Lorem.Sentence(),
                    _faker.Lorem.Sentence());

                await _dbContext.AddAsync(appt, cancellationToken);
            }
        }
    }
}
