using Mapster;

using MediatR;

using Microsoft.EntityFrameworkCore;

using PetCure.Business.CQRS.PatientManagement.Vetenerians.DTOs;
using PetCure.DataAccess.Repositories;
using PetCure.Domains.PatientManagement;

namespace PetCure.Business.CQRS.PatientManagement.Vetenerians.Queries
{
    public class VeterinarianGetAll : IRequest<IEnumerable<VeterinarianDTO>>
    {
    }

    internal class VeterinarianGetAllHandler : IRequestHandler<VeterinarianGetAll, IEnumerable<VeterinarianDTO>>
    {
        private readonly IBaseRepository<Veterinarian> _veterinarianRepository;

        public VeterinarianGetAllHandler(IBaseRepository<Veterinarian> veterinarianRepository)
        {
            _veterinarianRepository = veterinarianRepository;
        }

        public async Task<IEnumerable<VeterinarianDTO>> Handle(VeterinarianGetAll request, CancellationToken cancellationToken)
        {
            var veterinarians = await _veterinarianRepository
                .GetAll()
                .ProjectToType<VeterinarianDTO>()
                .ToListAsync(cancellationToken);

            return veterinarians;
        }
    }
}
