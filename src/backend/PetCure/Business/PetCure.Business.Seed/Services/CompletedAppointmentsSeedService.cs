using Microsoft.EntityFrameworkCore;

using PetCure.Business.Seed.Services.Base;
using PetCure.DataAccess;
using PetCure.Domains.PatientManagement;

namespace PetCure.Business.Seed.Services
{
    internal class CompletedAppointmentsSeedService : BaseSeedService
    {
        public CompletedAppointmentsSeedService(PatientManagementDbContext dbContext)
            : base(dbContext)
        {
        }

        public override async Task Execute(CancellationToken cancellationToken)
        {
            var vets = await _dbContext.Veterinarians.ToListAsync(cancellationToken);
            var pets = await _dbContext.Pets.ToListAsync(cancellationToken);

            for (int i = 0; i < 25; i++)
            {
                var vet = _faker.PickRandom(vets);
                var pet = _faker.PickRandom(pets);

                var appointment = new Appointment(
                    pet.Id,
                    pet.OwnerId,
                    vet.Id,
                    _faker.Date.Recent(30),
                    _faker.Lorem.Sentence(),
                    _faker.Lorem.Sentence());

                appointment.Complete();

                await _dbContext.AddAsync(appointment, cancellationToken);
            }
        }
    }
}
