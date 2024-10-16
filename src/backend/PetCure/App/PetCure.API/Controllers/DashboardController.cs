﻿using MediatR;

using Microsoft.AspNetCore.Mvc;

using PetCure.Business.CQRS.PatientManagement.Dashboard.DTOs;
using PetCure.Business.CQRS.PatientManagement.Dashboard.Queries;

namespace PetCure.API.Controllers
{
    public class DashboardController : BaseController
    {
        public DashboardController(IMediator mediator)
            : base(mediator)
        {
        }

        [HttpGet("UpcomingAppointments")]
        [ProducesResponseType(typeof(IEnumerable<UpcomingAppointmentDTO>), 200)]
        public async Task<IActionResult> UpcomingAppointments(CancellationToken cancellationToken)
        {
            var response = await _mediator.Send(new GetUpcomingAppointments(), cancellationToken);

            return Ok(response);
        }

        [HttpGet("GetApptsCountByDateRange")]
        [ProducesResponseType(typeof(ApptsCountByDateRangeDTO), 200)]
        public async Task<IActionResult> GetApptsCountByDateRange([FromQuery] DateTime from, [FromQuery] DateTime to, CancellationToken cancellationToken)
        {
            var response = await _mediator.Send(new GetApptsCountByDateRange
            {
                From = from,
                To = to,
            }, cancellationToken);

            return Ok(response);
        }
    }
}
