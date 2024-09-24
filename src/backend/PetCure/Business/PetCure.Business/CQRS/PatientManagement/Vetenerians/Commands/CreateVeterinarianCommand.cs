using FluentValidation;

using MediatR;

namespace PetCure.Business.CQRS.PatientManagement.Vetenerians.Commands
{
    public class CreateVeterinarianCommand : IRequest<Unit>
    {

    }

    internal class CreateVeterinarianCommandValidator : AbstractValidator<CreateVeterinarianCommand>
    {

    }

    internal class CreateVeterinarianCommandHandler : IRequestHandler<CreateVeterinarianCommand, Unit>
    {
        public async Task<Unit> Handle(CreateVeterinarianCommand request, CancellationToken cancellationToken)
        {

            return Unit.Value;
        }
    }
}
