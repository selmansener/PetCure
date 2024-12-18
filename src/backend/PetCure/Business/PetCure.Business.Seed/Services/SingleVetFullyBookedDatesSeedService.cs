﻿using Microsoft.EntityFrameworkCore;

using PetCure.Business.Seed.Configuration;
using PetCure.Business.Seed.Services.Base;
using PetCure.DataAccess;
using PetCure.Domains.PatientManagement;

using System.Collections.Immutable;

namespace PetCure.Business.Seed.Services
{
    internal class SingleVetFullyBookedDatesSeedService : BaseSeedService
    {
        public SingleVetFullyBookedDatesSeedService(PatientManagementDbContext dbContext)
            : base(dbContext)
        {
        }

        protected override ImmutableList<SeedServiceType> Dependencies => [SeedServiceType.Veterinarian, SeedServiceType.Pet];

        public override async Task Execute(CancellationToken cancellationToken)
        {
            var vet = await _dbContext.Veterinarians.FirstOrDefaultAsync(cancellationToken);

            var pets = await _dbContext.Pets.ToListAsync(cancellationToken);

            List<DateTime> dates = new List<DateTime>();
            for (int i = 0; i < 14; i++)
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
                    var selectedPet = _faker.PickRandom(pets);

                    var appointment = new Appointment(
                        selectedPet.Id,
                        selectedPet.OwnerId,
                        vet.Id,
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
