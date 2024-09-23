using MediatR;

namespace PetCure.Business.CQRS.PatientManagement.Vetenerians.Queries
{
    public class VetenarianGetAll : IRequest
    {
    }

    internal class VetenarianGetAllHandler : IRequestHandler<VetenarianGetAll>
    {
        public Task Handle(VetenarianGetAll request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
