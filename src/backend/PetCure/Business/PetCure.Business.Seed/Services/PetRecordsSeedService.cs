using Microsoft.EntityFrameworkCore;

using PetCure.Business.Seed.Configuration;
using PetCure.Business.Seed.Services.Base;
using PetCure.DataAccess;
using PetCure.Domains.PatientManagement;

using System.Collections.Immutable;

namespace PetCure.Business.Seed.Services
{
    internal class PetRecordsSeedService : BaseSeedService
    {
        public PetRecordsSeedService(PatientManagementDbContext dbContext) : base(dbContext)
        {
        }

        protected override ImmutableList<SeedServiceType> Dependencies => [SeedServiceType.PetOwner, SeedServiceType.Veterinarian];

        public override async Task Execute(CancellationToken cancellationToken)
        {
            var vets = await _dbContext.Veterinarians.ToListAsync(cancellationToken);
            var petOwners = await _dbContext.PetOwners.ToListAsync(cancellationToken);
            List<string> dosages = new List<string>
            {
                "500 mg",
                "1 tablet",
                "100 mg",
                "25 mg",
                "50 mg",
                "2 tablets"
            };

            List<string> durations = new List<string>
            {
                "5 days",
                "1 week",
                "2 weeks",
                "3 weeks",
                "1 month",
                "2 months"
            };

            foreach (var petOwner in petOwners)
            {
                var pet = new Pet(
                    petOwner.Id,
                    _faker.Name.FirstName(),
                    _faker.PickRandomWithout(Domains.Enums.PetSpecies.None),
                    breed: null,
                    _faker.PickRandom("Erkek", "Dişi"),
                    _faker.Date.PastDateOnly(yearsToGoBack: 15).ToDateTime(TimeOnly.MinValue),
                    _faker.Random.Float(min: 1, max: 10),
                    _faker.PickRandom("Red", "Green", "Black", "Mixed"),
                    _faker.Random.Replace("##-****-****"),
                    _faker.Lorem.Sentence());

                if (_faker.Random.Bool())
                {
                    var randomVet = _faker.PickRandom(vets);
                    var randomMedicalRecordCount = _faker.Random.Int(min: 2, max: 7);
                    for (int i = 0; i < randomMedicalRecordCount; i++)
                    {
                        if (_faker.Random.Bool())
                        {
                            pet.AddMedicalRecord(randomVet.Id, _faker.Date.Recent(14), _faker.Lorem.Sentence());
                        }
                        else
                        {
                            pet.AddMedicalRecord(
                                randomVet.Id,
                                _faker.Date.Recent(14),
                                _faker.Lorem.Sentence(),
                                _faker.Lorem.Sentence(),
                                _faker.Lorem.Sentence(),
                                _faker.Lorem.Sentence(),
                                null,
                                _faker.Lorem.Sentence());
                        }
                    }
                }

                if (_faker.Random.Bool())
                {
                    var randomVet = _faker.PickRandom(vets);
                    var randomPerscriptionCount = _faker.Random.Int(min: 2, max: 7);
                    for (int i = 0; i < randomPerscriptionCount; i++)
                    {
                        pet.AddPrescription(
                            randomVet.Id,
                            _faker.Date.Recent(14),
                            _faker.Commerce.Product(),
                            _faker.PickRandom(dosages),
                            _faker.PickRandom(durations),
                            _faker.Lorem.Sentence());
                    }
                }

                await _dbContext.AddAsync(pet, cancellationToken);

                var randomAppointmentCount = _faker.Random.Int(min: 1, max: 5);

                for (int i = 0; i < randomAppointmentCount; i++)
                {
                    var randomVet = _faker.PickRandom(vets);
                    var appt = new Appointment(
                        pet.Id,
                        pet.OwnerId,
                        randomVet.Id,
                        _faker.Date.Recent(14),
                        _faker.Lorem.Sentence(),
                        _faker.Random.Bool() ? _faker.Lorem.Sentence() : null);

                    await _dbContext.AddAsync(appt, cancellationToken);
                }
            }
        }
    }
}
