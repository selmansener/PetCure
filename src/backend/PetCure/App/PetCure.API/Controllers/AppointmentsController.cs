using MediatR;

using Microsoft.AspNetCore.Mvc;

using PetCure.Business.CQRS.PatientManagement.Appointments.Commands;
using PetCure.Business.CQRS.PatientManagement.Appointments.DTOs;
using PetCure.Business.CQRS.PatientManagement.Appointments.Queries;

namespace PetCure.API.Controllers
{
    public class AppointmentsController : BaseController
    {
        public AppointmentsController(IMediator mediator)
            : base(mediator)
        {
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<AppointmentDTO>), 200)]
        public async Task<IActionResult> GetAll(CancellationToken cancellationToken)
        {
            return Ok();
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(AppointmentDTO), 200)]
        public async Task<IActionResult> GetById(int id, CancellationToken cancellationToken)
        {
            return Ok();
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> Create(CreateAppointmentCommand command, CancellationToken cancellationToken)
        {
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
    }
}
