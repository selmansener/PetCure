using FluentValidation;

using Mapster;

using MediatR;

using Microsoft.EntityFrameworkCore;

using PetCure.Business.CQRS.PatientManagement.Appointments.DTOs;
using PetCure.DataAccess.Repositories;
using PetCure.Domains.PatientManagement;

namespace PetCure.Business.CQRS.PatientManagement.Appointments.Queries
{
    public class GetBookedDatesByVetId : IRequest<VeterinarianBookedDatesDTO>
    {
        public int VetId { get; set; }
    }

    internal class GetBookedDatesByVetIdValidator : AbstractValidator<GetBookedDatesByVetId>
    {
        public GetBookedDatesByVetIdValidator()
        {
            RuleFor(x => x.VetId).NotEmpty();
        }
    }

    internal class GetBookedDatesByVetIdHandler : IRequestHandler<GetBookedDatesByVetId, VeterinarianBookedDatesDTO>
    {
        private readonly IBaseRepository<Veterinarian> _veterinarianRepository;

        public GetBookedDatesByVetIdHandler(IBaseRepository<Veterinarian> veterinarianRepository)
        {
            _veterinarianRepository = veterinarianRepository;
        }

        public async Task<VeterinarianBookedDatesDTO> Handle(GetBookedDatesByVetId request, CancellationToken cancellationToken)
        {
            var bookedDates = await _veterinarianRepository.GetAll()
                .ProjectToType<VeterinarianBookedDatesDTO>()
                .FirstOrDefaultAsync(x => x.Id == request.VetId);

            return bookedDates;
        }
    }
}
