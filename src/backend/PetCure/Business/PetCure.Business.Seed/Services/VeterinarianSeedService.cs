using PetCure.Business.Seed.Services.Base;
using PetCure.DataAccess;
using PetCure.Domains.PatientManagement;

namespace PetCure.Business.Seed.Services
{
    internal class VeterinarianSeedService : BaseSeedService
    {
        public VeterinarianSeedService(PatientManagementDbContext dbContext)
            : base(dbContext)
        {
        }

        public override async Task Execute(CancellationToken cancellationToken)
        {
            for (int i = 0; i < 100; i++)
            {
                var veterinarian = new Veterinarian(
                    _faker.Name.FirstName(),
                    _faker.Name.LastName(),
                    _faker.Phone.PhoneNumber(format: "05#########"),
                    _faker.Internet.Email(),
                    _faker.Lorem.Word(),
                    _faker.Random.Int(min: 0, max: 10));

                await _dbContext.AddAsync(veterinarian, cancellationToken);
            }
        }
    }
}
