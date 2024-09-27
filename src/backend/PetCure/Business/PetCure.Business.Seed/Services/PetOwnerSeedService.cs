using PetCure.Business.Seed.Services.Base;
using PetCure.DataAccess;
using PetCure.Domains.PatientManagement;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PetCure.Business.Seed.Services
{
    internal class PetOwnerSeedService : BaseSeedService
    {
        public PetOwnerSeedService(PatientManagementDbContext dbContext) 
            : base(dbContext)
        {
        }

        public override async Task Execute(CancellationToken cancellationToken)
        {
            for (int i = 0; i < 250; i++)
            {
                var petOwner = new PetOwner(
                    _faker.Person.FirstName,
                    _faker.Person.LastName,
                    _faker.Phone.PhoneNumber(format: "05#########"),
                    _faker.Internet.Email(),
                    _faker.Address.FullAddress(),
                    _faker.Address.City(),
                    _faker.Address.State(),
                    _faker.Address.ZipCode(),
                    _faker.Phone.PhoneNumber(format: "05#########"));

                await _dbContext.AddAsync(petOwner, cancellationToken);
            }
        }
    }
}
