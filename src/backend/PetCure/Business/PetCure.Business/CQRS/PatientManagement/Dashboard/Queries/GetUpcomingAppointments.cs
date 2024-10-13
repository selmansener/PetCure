using Mapster;

using MediatR;

using Microsoft.EntityFrameworkCore;

using PetCure.Business.CQRS.PatientManagement.Dashboard.DTOs;
using PetCure.DataAccess.Repositories;
using PetCure.Domains.PatientManagement;

namespace PetCure.Business.CQRS.PatientManagement.Dashboard.Queries
{
    public class GetUpcomingAppointments : IRequest<IEnumerable<UpcomingAppointmentDTO>>
    {
    }

    internal class GetUpcomingAppointmentsHandler : IRequestHandler<GetUpcomingAppointments, IEnumerable<UpcomingAppointmentDTO>>
    {
        private readonly IBaseRepository<Appointment> _apptRepository;

        public GetUpcomingAppointmentsHandler(IBaseRepository<Appointment> apptRepository)
        {
            _apptRepository = apptRepository;
        }

        public async Task<IEnumerable<UpcomingAppointmentDTO>> Handle(GetUpcomingAppointments request, CancellationToken cancellationToken)
        {
            var utcNow = DateTime.UtcNow;
            var upcomingWeek = utcNow.AddDays(7);

            var upcomingAppts = await _apptRepository.GetAllAsNoTracking()
                .ProjectToType<UpcomingAppointmentDTO>()
                .Where(x => x.ApptDate > utcNow && x.ApptDate < upcomingWeek)
                .Take(5)
                .ToListAsync(cancellationToken);

            return upcomingAppts;
        }
    }
}
