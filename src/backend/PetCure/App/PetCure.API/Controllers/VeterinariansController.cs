using MediatR;

using Microsoft.AspNetCore.Mvc;

using PetCure.Business.CQRS.PatientManagement.Vetenerians.DTOs;

namespace PetCure.API.Controllers
{
    public class VeterinariansController : BaseController
    {
        public VeterinariansController(IMediator mediator)
            : base(mediator)
        {
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<VetenarianDTO>), 200)]
        public async Task<IActionResult> GetAll()
        {
            return Ok();
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(VetenarianDTO), 200)]
        public async Task<IActionResult> GetById(int id)
        {
            return Ok();
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> Create()
        {
            return NoContent();
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> Update(int id)
        {
            return NoContent();
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> Delete(int id)
        {
            return NoContent();
        }
    }
}
