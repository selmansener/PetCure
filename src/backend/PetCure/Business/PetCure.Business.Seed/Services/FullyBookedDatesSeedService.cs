using Microsoft.EntityFrameworkCore;

using PetCure.Business.Seed.Configuration;
using PetCure.Business.Seed.Services.Base;
using PetCure.DataAccess;
using PetCure.Domains.PatientManagement;

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PetCure.Business.Seed.Services
{
    internal class FullyBookedDatesSeedService : BaseSeedService
    {
        public FullyBookedDatesSeedService(PatientManagementDbContext dbContext) 
            : base(dbContext)
        {
        }

        protected override ImmutableList<SeedServiceType> Dependencies => [SeedServiceType.Veterinarian, SeedServiceType.Pet]; 

        public override async Task Execute(CancellationToken cancellationToken)
        {
            var veterinarians = await _dbContext.Veterinarians.ToListAsync(cancellationToken);
            var pets = await _dbContext.Pets.ToListAsync(cancellationToken);

            List<DateTime> dates = new List<DateTime>();
            for (int i = 0; i < 10; i++)
            {
                DateTime selectedDate = default;
                do
                {
                    selectedDate = _faker.Date.Soon(days: 30);

                } while (dates.Contains(selectedDate.Date));
                
                dates.Add(selectedDate.Date);

                var tenMinutePeriods = SplitIntoTenMinutePeriods(selectedDate.Date);

                foreach (var period in tenMinutePeriods)
                {
                    var selectedVet = _faker.PickRandom(veterinarians);
                    var selectedPet = _faker.PickRandom(pets);

                    var appointment = new Appointment(
                        selectedPet.Id,
                        selectedPet.OwnerId,
                        selectedVet.Id,
                        period,
                        _faker.Lorem.Sentence(),
                        _faker.Lorem.Sentence());

                    await _dbContext.AddAsync(appointment, cancellationToken);
                }
            }
        }

        private List<DateTime> SplitIntoTenMinutePeriods(DateTime date)
        {
            var result = new List<DateTime>();
            DateTime startOfDay = new DateTime(date.Year, date.Month, date.Day, 9, 0, 0); // Start of the work day
            DateTime endOfDay = new DateTime(date.Year, date.Month, date.Day, 18, 0, 0); // End of the work day

            DateTime currentPeriod = startOfDay;

            // Add 10-minute intervals until the end of the day
            while (currentPeriod <= endOfDay)
            {
                result.Add(currentPeriod);
                currentPeriod = currentPeriod.AddMinutes(10); // Increment by 10 minutes
            }

            return result;
        }
    }
}
