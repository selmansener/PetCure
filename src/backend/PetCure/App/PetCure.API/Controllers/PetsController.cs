using MediatR;

using Microsoft.AspNetCore.Mvc;

using PetCure.Business.CQRS.PatientManagement.Pets.Commands;
using PetCure.Business.CQRS.PatientManagement.Pets.DTOs;
using PetCure.Business.CQRS.PatientManagement.Pets.Queries;

namespace PetCure.API.Controllers
{
    public class PetsController : BaseController
    {
        public PetsController(IMediator mediator) 
            : base(mediator)
        {
        }

        [HttpGet]
        [ProducesResponseType<IEnumerable<PetRecordDTO>>(200)]
        public async Task<IActionResult> QueryPets([FromQuery] string phone, [FromQuery] string microChipId, CancellationToken cancellationToken)
        {
            var response = await _mediator.Send(new QueryPets
            {
                Phone = phone,
                MicroChipId = microChipId
            }, cancellationToken);

            return Ok(response);
        }

        [HttpPost]
        public async Task<IActionResult> CreatePet(CreatePetCommand command, CancellationToken cancellationToken)
        {
            await _mediator.Send(command, cancellationToken);

            return Ok();
        }
    }
}
