using MediatR;

namespace PetCure.API.Controllers
{
    public class DashboardController : BaseController
    {
        public DashboardController(IMediator mediator) 
            : base(mediator)
        {
        }


    }
}
