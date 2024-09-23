using FluentValidation;

using MediatR;

namespace PetCure.Business.CQRS.PatientManagement.Vetenerians.Commands
{
    public class DeleteVetenarianCommand : IRequest
    {

    }

    internal class DeleteVetenarianCommandValidator : AbstractValidator<DeleteVetenarianCommand>
    {

    }

    internal class DeleteVetenarianCommandHandler : IRequestHandler<DeleteVetenarianCommand>
    {
        public Task Handle(DeleteVetenarianCommand request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
