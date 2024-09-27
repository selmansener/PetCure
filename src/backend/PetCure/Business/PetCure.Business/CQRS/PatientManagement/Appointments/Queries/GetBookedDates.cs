using Mapster;

using MediatR;

using Microsoft.EntityFrameworkCore;

using PetCure.Business.CQRS.PatientManagement.Appointments.DTOs;
using PetCure.DataAccess.Repositories;
using PetCure.Domains.PatientManagement;

namespace PetCure.Business.CQRS.PatientManagement.Appointments.Queries
{
    public class GetBookedDates : IRequest<IEnumerable<VeterinarianBookedDatesDTO>>
    {
    }

    internal class GetBookedDatesHandler : IRequestHandler<GetBookedDates, IEnumerable<VeterinarianBookedDatesDTO>>
    {
        private readonly IBaseRepository<Veterinarian> _veterinarianRepository;

        public GetBookedDatesHandler(IBaseRepository<Veterinarian> veterinarianRepository)
        {
            _veterinarianRepository = veterinarianRepository;
        }

        public async Task<IEnumerable<VeterinarianBookedDatesDTO>> Handle(GetBookedDates request, CancellationToken cancellationToken)
        {
            var bookedDates = await _veterinarianRepository.GetAll()
                .ProjectToType<VeterinarianBookedDatesDTO>()
                .ToListAsync(cancellationToken);

            return bookedDates;
        }
    }
}
