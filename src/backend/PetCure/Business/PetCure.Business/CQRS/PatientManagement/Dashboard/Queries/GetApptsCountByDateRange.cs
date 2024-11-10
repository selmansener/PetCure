using FluentValidation;

using MediatR;

using Microsoft.EntityFrameworkCore;

using PetCure.Business.CQRS.PatientManagement.Dashboard.DTOs;
using PetCure.DataAccess.Repositories;
using PetCure.Domains.PatientManagement;

namespace PetCure.Business.CQRS.PatientManagement.Dashboard.Queries
{
    public class GetApptsCountByDateRange : IRequest<ApptsCountByDateRangeDTO>
    {
        public DateTime From { get; set; }

        public DateTime To { get; set; }
    }

    internal class GetApptsCountByDateRangeValidator : AbstractValidator<GetApptsCountByDateRange>
    {
        public GetApptsCountByDateRangeValidator()
        {
            RuleFor(x => x.From).NotEmpty();
            RuleFor(x => x.To).NotEmpty();
        }
    }

    internal class GetApptsCountByDateRangeHandler : IRequestHandler<GetApptsCountByDateRange, ApptsCountByDateRangeDTO>
    {
        private readonly IBaseRepository<Appointment> _apptRepo;

        public GetApptsCountByDateRangeHandler(IBaseRepository<Appointment> apptRepo)
        {
            _apptRepo = apptRepo;
        }

        public async Task<ApptsCountByDateRangeDTO> Handle(GetApptsCountByDateRange request, CancellationToken cancellationToken)
        {
            // Total days between From and To
            var dateRangeDaysCount = request.To.Subtract(request.From).TotalDays;

            // These values will be used to calculate the increase compared to the previous date range
            var previousFrom = request.From.AddDays(-dateRangeDaysCount);
            var previousTo = request.From;

            var previousCount = await _apptRepo.GetAllAsNoTracking()
                .CountAsync(appt => appt.AppointmentDate >= previousFrom && appt.AppointmentDate < previousTo, cancellationToken);

            var currentCount = await _apptRepo.GetAllAsNoTracking()
                .CountAsync(appt => appt.AppointmentDate >= request.From && appt.AppointmentDate < request.To, cancellationToken);

            var diff = (currentCount - previousCount);

            var changeAsPercent = previousCount > 0 ? diff * 100M / previousCount : 0;

            return new ApptsCountByDateRangeDTO
            {
                TotalCount = currentCount,
                ChangeAsPercent = Math.Round(changeAsPercent, 2)
            };
        }
    }
}
