using Mapster;

using MediatR;

using Microsoft.EntityFrameworkCore;

using PetCure.Business.CQRS.PatientManagement.Appointments.DTOs;
using PetCure.Business.SharedDTOs;
using PetCure.DataAccess.Repositories;
using PetCure.Domains.PatientManagement;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PetCure.Business.CQRS.PatientManagement.Appointments.Queries
{
    public class QueryAppointments : IRequest<PaginationResult<AppointmentQueryDTO>>
    {
        public int PageSize { get; set; } = 25;

        public int Page { get; set; } = 0;
    }

    internal class QueryAppointmentsHandler : IRequestHandler<QueryAppointments, PaginationResult<AppointmentQueryDTO>>
    {
        private readonly IBaseRepository<Appointment> _apptRepository;

        public QueryAppointmentsHandler(IBaseRepository<Appointment> apptRepository)
        {
            _apptRepository = apptRepository;
        }

        public async Task<PaginationResult<AppointmentQueryDTO>> Handle(QueryAppointments request, CancellationToken cancellationToken)
        {
            var totalRowCount = await _apptRepository.GetAllAsNoTracking()
                .CountAsync(cancellationToken);

            var data = await _apptRepository.GetAllAsNoTracking()
                .ProjectToType<AppointmentQueryDTO>()
                .Skip(request.Page * request.PageSize)
                .Take(request.PageSize)
                .ToListAsync(cancellationToken);

            return new PaginationResult<AppointmentQueryDTO>
            {
                Data = data,
                TotalRowCount = totalRowCount
            };
        }
    }
}
