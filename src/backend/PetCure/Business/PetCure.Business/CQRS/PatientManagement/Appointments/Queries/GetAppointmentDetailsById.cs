using FluentValidation;

using Mapster;

using MediatR;

using Microsoft.EntityFrameworkCore;

using PetCure.Business.CQRS.PatientManagement.Appointments.DTOs;
using PetCure.DataAccess.Repositories;
using PetCure.Domains.PatientManagement;

namespace PetCure.Business.CQRS.PatientManagement.Appointments.Queries
{
    public class GetAppointmentDetailsById : IRequest<AppointmentDetailsDTO>
    {
        public int Id { get; set; }
    }

    internal class GetAppointmentDetailsByIdValidator : AbstractValidator<GetAppointmentDetailsById>
    {
        public GetAppointmentDetailsByIdValidator()
        {
            RuleFor(x => x.Id).NotEmpty();
        }
    }

    internal class GetAppointmentDetailsByIdHandler : IRequestHandler<GetAppointmentDetailsById, AppointmentDetailsDTO>
    {
        private readonly IBaseRepository<Appointment> _apptRepo;

        public GetAppointmentDetailsByIdHandler(IBaseRepository<Appointment> apptRepo)
        {
            _apptRepo = apptRepo;
        }

        public async Task<AppointmentDetailsDTO> Handle(GetAppointmentDetailsById request, CancellationToken cancellationToken)
        {
            return await _apptRepo.GetAllAsNoTracking()
                .ProjectToType<AppointmentDetailsDTO>()
                .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);
        }
    }
}
