using MediatR;

using Microsoft.AspNetCore.Mvc;

using PetCure.Business.CQRS.PatientManagement.Pets.Commands;
using PetCure.Business.CQRS.PatientManagement.Pets.DTOs;
using PetCure.Business.CQRS.PatientManagement.Pets.Queries;
using PetCure.Business.SharedDTOs;

namespace PetCure.API.Controllers
{
    public class PetsController : BaseController
    {
        public PetsController(IMediator mediator) 
            : base(mediator)
        {
        }

        [HttpGet]
        [ProducesResponseType<PaginationResult<PetRecordDTO>>(200)]
        public async Task<IActionResult> QueryPets([FromQuery] QueryPets query, CancellationToken cancellationToken)
        {
            var response = await _mediator.Send(query, cancellationToken);

            return Ok(response);
        }

        [HttpGet("{id}")]
        [ProducesResponseType<PetRecordDTO>(200)]
        public async Task<IActionResult> GetById(int id, CancellationToken cancellationToken) 
        {
            var response = await _mediator.Send(new GetPetRecordById(id), cancellationToken);

            return Ok(response);
        }

        [HttpGet("{id}/ExistingRecords")]
        [ProducesResponseType<ExistingPetRecordDTO>(200)]
        public async Task<IActionResult> GetExistingPetRecord(int id, CancellationToken cancellationToken)
        {
            var response = await _mediator.Send(new GetExistingPetRecordById
            {
                PetId = id,
            }, cancellationToken);

            return Ok(response);
        }

        [HttpPost]
        public async Task<IActionResult> CreatePet(CreatePetCommand command, CancellationToken cancellationToken)
        {
            await _mediator.Send(command, cancellationToken);

            return Ok();
        }

        [HttpPost("AddAppointment")]
        public async Task<IActionResult> AddAppointment([FromBody] AddAppointmentCommand command, CancellationToken cancellationToken)
        {
            await _mediator.Send(command, cancellationToken);

            return Ok();
        }
    }
}
