using MediatR;

using Microsoft.AspNetCore.Mvc;

using PetCure.Business.CQRS.PatientManagement.Vetenerians.Commands;
using PetCure.Business.CQRS.PatientManagement.Vetenerians.DTOs;
using PetCure.Business.CQRS.PatientManagement.Vetenerians.Queries;
using PetCure.Business.SharedDTOs;

namespace PetCure.API.Controllers
{
    public class VeterinariansController : BaseController
    {
        public VeterinariansController(IMediator mediator)
            : base(mediator)
        {
        }

        [HttpGet("Query")]
        [ProducesResponseType(typeof(PaginationResult<VeterinarianDTO>), 200)]
        public async Task<IActionResult> Query([FromQuery] QueryVets query, CancellationToken cancellationToken)
        {
            var response = await _mediator.Send(query, cancellationToken);

            return Ok(response);
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<VeterinarianDTO>), 200)]
        public async Task<IActionResult> GetAll(CancellationToken cancellationToken)
        {
            var response = await _mediator.Send(new VeterinarianGetAll(), cancellationToken);

            return Ok(response);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(VeterinarianDTO), 200)]
        public async Task<IActionResult> GetById(int id, CancellationToken cancellationToken)
        {
            var response = await _mediator.Send(new VeterinarianGetById
            {
                Id = id
            }, cancellationToken);

            return Ok(response);
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> Create(CreateVeterinarianCommand command, CancellationToken cancellationToken)
        {
            await _mediator.Send(command, cancellationToken);

            return NoContent();
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> Update(int id, [FromBody] UpdateVeterinarianCommand command, CancellationToken cancellationToken)
        {
            command.Id = id;

            await _mediator.Send(command, cancellationToken);

            return NoContent();
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> Delete(int id, CancellationToken cancellationToken)
        {
            await _mediator.Send(new DeleteVeterinarianCommand
            {
                Id = id
            }, cancellationToken);

            return NoContent();
        }
    }
}
