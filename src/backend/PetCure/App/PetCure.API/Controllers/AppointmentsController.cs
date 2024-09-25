using MediatR;

using Microsoft.AspNetCore.Mvc;
using PetCure.Business.CQRS.PatientManagement.Vetenerians.Commands;
using PetCure.Business.CQRS.PatientManagement.Vetenerians.DTOs;
using PetCure.Business.CQRS.PatientManagement.Vetenerians.Queries;

namespace PetCure.API.Controllers
{
    public class AppointmentsController : BaseController
    {
        public AppointmentsController(IMediator mediator) 
            : base(mediator)
        {
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<VeterinarianDTO>), 200)]
        public async Task<IActionResult> GetAll(CancellationToken cancellationToken)
        {
            return Ok();
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(VeterinarianDTO), 200)]
        public async Task<IActionResult> GetById(int id, CancellationToken cancellationToken)
        {
            return Ok();
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> Create(CreateVeterinarianCommand command, CancellationToken cancellationToken)
        {
            return NoContent();
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> Update(int id, [FromBody] UpdateVeterinarianCommand command, CancellationToken cancellationToken)
        {
            return NoContent();
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> Delete(int id, CancellationToken cancellationToken)
        {
            return NoContent();
        }
    }
}
