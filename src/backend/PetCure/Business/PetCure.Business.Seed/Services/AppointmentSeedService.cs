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

            var appointmentDates = new Dictionary<int, List<DateTime>>();
            foreach (var pet in pets)
            {
                var randomVeterinarian = _faker.PickRandom(veterinarians);

                // Checking if we got any duplicated appointment date for currently selected veterinarian
                DateTime appointmentDate = default;
                do
                {
                    appointmentDate = _faker.Date.Soon(days: 30);
                    appointmentDate = RoundToNearestTenMinutes(appointmentDate);
                    appointmentDate = ClampToWorkHours(appointmentDate);

                } while (appointmentDates.ContainsKey(randomVeterinarian.Id) 
                    && appointmentDates[randomVeterinarian.Id].Any(date => date == appointmentDate));

                if (appointmentDates.ContainsKey(randomVeterinarian.Id))
                {
                    appointmentDates[randomVeterinarian.Id].Add(appointmentDate);
                }
                else
                {
                    appointmentDates.Add(randomVeterinarian.Id, new List<DateTime>
                    {
                        appointmentDate
                    });
                }

                var appointment = new Appointment(
                    pet.Id,
                    pet.OwnerId,
                    randomVeterinarian.Id,
                    appointmentDate,
                    _faker.Lorem.Sentence(),
                    _faker.Lorem.Sentence());

                await _dbContext.AddAsync(appointment);
            }
        }

        public DateTime RoundToNearestTenMinutes(DateTime dt)
        {
            int minutes = dt.Minute;
            int roundedMinutes = ((minutes + 5) / 10) * 10; // Round to nearest 10

            if (roundedMinutes == 60)
            {
                // Move to the next hour if the rounding resulted in 60 minutes
                dt = dt.AddHours(1);
                roundedMinutes = 0;
            }

            return new DateTime(dt.Year, dt.Month, dt.Day, dt.Hour, roundedMinutes, 0);
        }

        public DateTime ClampToWorkHours(DateTime dt)
        {
            // Define the start and end work hours
            int startHour = 9;  // 9:00 AM
            int endHour = 17;   // 5:00 PM

            // If before 9:00 AM, clamp to 9:00 AM
            if (dt.Hour < startHour)
            {
                return new DateTime(dt.Year, dt.Month, dt.Day, startHour, dt.Minute, 0);
            }

            // If after 6:00 PM, clamp to 6:00 PM
            if (dt.Hour >= endHour)
            {
                return new DateTime(dt.Year, dt.Month, dt.Day, endHour, dt.Minute, 0);
            }

            // Return the original time if within work hours
            return dt;
        }
    }
}
