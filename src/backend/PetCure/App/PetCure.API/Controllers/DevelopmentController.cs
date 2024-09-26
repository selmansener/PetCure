using Microsoft.AspNetCore.Mvc;

using PetCure.Business.Seed;
using PetCure.Business.Seed.Configuration;
using PetCure.DataAccess.Helpers;

namespace PetCure.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DevelopmentController : ControllerBase
    {
        private readonly IDbContextHelper _dbContextHelper;
        private readonly ISeeder _seeder;

        public DevelopmentController(IDbContextHelper dbContextHelper, ISeeder seeder)
        {
            _dbContextHelper = dbContextHelper;
            _seeder = seeder;
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

        [HttpPost("Seed")]
        public async Task<IActionResult> Seed(SeedServiceType seeds, CancellationToken cancellationToken, bool recreateDb = false)
        {
            await _seeder.SeedAsync(seeds, cancellationToken, recreateDb);

            return NoContent();
        }
    }
}
