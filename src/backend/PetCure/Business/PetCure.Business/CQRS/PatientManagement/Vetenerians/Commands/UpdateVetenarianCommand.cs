using FluentValidation;

using MediatR;

namespace PetCure.Business.CQRS.PatientManagement.Vetenerians.Commands
{
    public class UpdateVetenarianCommand : IRequest
    {
    }

    internal class UpdateVetenarianCommandValidator : AbstractValidator<UpdateVetenarianCommand>
    {

    }

    internal class UpdateVetenarianCommandHandler : IRequestHandler<UpdateVetenarianCommand>
    {
        public async Task Handle(UpdateVetenarianCommand request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
