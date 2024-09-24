using Microsoft.AspNetCore.Mvc;

using PetCure.DataAccess.Helpers;

namespace PetCure.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DevelopmentController : ControllerBase
    {
        private readonly IDbContextHelper _dbContextHelper;

        public DevelopmentController(IDbContextHelper dbContextHelper)
        {
            _dbContextHelper = dbContextHelper;
        }

        [HttpPost("EnsureDatabaseCreated")]
        public async Task<IActionResult> EnsureDatabaseCreated(CancellationToken cancellation)
        {
            await _dbContextHelper.EnsureCreated(cancellation);

            return Ok();
        }

        [HttpPost("EnsureDatabaseDeleted")]
        public async Task<IActionResult> EnsureDatabaseDeleted(CancellationToken cancellation)
        {
            await _dbContextHelper.EnsureDeleted(cancellation);

            return Ok();
        }

        [HttpPost("MigrateDatabase")]
        public async Task<IActionResult> MigrateDatabase(CancellationToken cancellation)
        {
            await _dbContextHelper.Migrate(cancellation);

            return Ok();
        }
    }
}
