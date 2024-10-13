using MediatR;

using Microsoft.AspNetCore.Mvc;

using PetCure.Business.CQRS.PatientManagement.Appointments.Commands;
using PetCure.Business.CQRS.PatientManagement.Appointments.DTOs;
using PetCure.Business.CQRS.PatientManagement.Appointments.Queries;
using PetCure.Business.SharedDTOs;

namespace PetCure.API.Controllers
{
    public class AppointmentsController : BaseController
    {
        public AppointmentsController(IMediator mediator)
            : base(mediator)
        {
        }

        [HttpGet("Query")]
        [ProducesResponseType(typeof(PaginationResult<AppointmentQueryDTO>), 200)]
        public async Task<IActionResult> Query([FromQuery] QueryAppointments query, CancellationToken cancellationToken)
        {
            var response = await _mediator.Send(query, cancellationToken);

            return Ok(response);
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<AppointmentDTO>), 200)]
        public async Task<IActionResult> GetAll(CancellationToken cancellationToken)
        {
            return Ok();
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(AppointmentDetailsDTO), 200)]
        public async Task<IActionResult> GetById(int id, CancellationToken cancellationToken)
        {
            var response = await _mediator.Send(new GetAppointmentDetailsById
            {
                Id = id,
            }, cancellationToken);

            return Ok(response);
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> Create([FromBody] CreateAppointmentCommand command, CancellationToken cancellationToken)
        {
            await _mediator.Send(command, cancellationToken);

            return NoContent();
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> Update(int id, [FromBody] UpdateAppointmentCommand command, CancellationToken cancellationToken)
        {
            return NoContent();
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> Delete(int id, CancellationToken cancellationToken)
        {
            return NoContent();
        }

        [HttpGet("GetBookedDatesByVetId")]
        [ProducesResponseType(typeof(VeterinarianBookedDatesDTO), 200)]
        public async Task<IActionResult> GetBookedDatesByVetId([FromQuery] int vetId, CancellationToken cancellationToken)
        {
            var response = await _mediator.Send(new GetBookedDatesByVetId
            {
                VetId = vetId
            }, cancellationToken);

            return Ok(response);
        }

        [HttpGet("GetByDateRange")]
        [ProducesResponseType(typeof(IEnumerable<AppointmentDTO>), 200)]
        public async Task<IActionResult> GetByDateRange([FromQuery] DateTime from, [FromQuery] DateTime to, CancellationToken cancellationToken)
        {
            var response = await _mediator.Send(new GetByDateRange
            {
                From = from,
                To = to
            }, cancellationToken);

            return Ok(response);
        }
    }
}
