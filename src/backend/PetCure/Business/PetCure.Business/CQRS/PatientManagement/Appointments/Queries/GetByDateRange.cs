using FluentValidation;

using Mapster;

using MediatR;

using Microsoft.EntityFrameworkCore;

using PetCure.Business.CQRS.PatientManagement.Appointments.DTOs;
using PetCure.DataAccess.Repositories;
using PetCure.Domains.PatientManagement;

namespace PetCure.Business.CQRS.PatientManagement.Appointments.Queries
{
    public class GetByDateRange : IRequest<IEnumerable<AppointmentDTO>>
    {
        public DateTime From { get; set; }

        public DateTime To { get; set; }
    }

    internal class GetByDateRangeValidator : AbstractValidator<GetByDateRange>
    {
        public GetByDateRangeValidator()
        {
            RuleFor(x => x.From).NotEmpty();
            RuleFor(x => x.To).NotEmpty();
        }
    }

    internal class GetByDateRangeHandler : IRequestHandler<GetByDateRange, IEnumerable<AppointmentDTO>>
    {
        private readonly IBaseRepository<Appointment> _apptsRepo;

        public GetByDateRangeHandler(IBaseRepository<Appointment> apptsRepo)
        {
            _apptsRepo = apptsRepo;
        }

        public async Task<IEnumerable<AppointmentDTO>> Handle(GetByDateRange request, CancellationToken cancellationToken)
        {
            return await _apptsRepo.GetAllAsNoTracking()
                .ProjectToType<AppointmentDTO>()
                .Where(x => x.AppointmentDate > request.From && x.AppointmentDate < request.To)
                .ToListAsync(cancellationToken);
        }
    }
}
