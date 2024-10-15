using Microsoft.EntityFrameworkCore;

using PetCure.Business.Seed.Configuration;
using PetCure.Business.Seed.Services.Base;
using PetCure.DataAccess;
using PetCure.Domains.PatientManagement;

using System.Collections.Immutable;

namespace PetCure.Business.Seed.Services
{
    internal class AppointmentStatsSeedService : BaseSeedService
    {
        public AppointmentStatsSeedService(PatientManagementDbContext dbContext) : base(dbContext)
        {
        }

        protected override ImmutableList<SeedServiceType> Dependencies => [SeedServiceType.Veterinarian, SeedServiceType.Pet];

        public override async Task Execute(CancellationToken cancellationToken)
        {
            var vets = await _dbContext.Veterinarians.ToListAsync(cancellationToken);
            var pets = await _dbContext.Pets.ToListAsync(cancellationToken);

            for (int i = 0; i < 250; i++)
            {
                var vet = _faker.PickRandom(vets);
                var pet = _faker.PickRandom(pets);

                var appointment = new Appointment(
                    pet.Id,
                    pet.OwnerId,
                    vet.Id,
                    _faker.Date.Recent(90),
                    _faker.Lorem.Sentence(),
                    _faker.Lorem.Sentence());

                appointment.Complete();

                await _dbContext.AddAsync(appointment, cancellationToken);
            }
        }
    }
}
