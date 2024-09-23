using FluentValidation;

using MediatR;

namespace PetCure.Business.CQRS.PatientManagement.Vetenerians.Commands
{
    public class CreateVeterinarianCommand : IRequest
    {

    }

    internal class CreateVeterinarianCommandValidator : AbstractValidator<CreateVeterinarianCommand>
    {

    }

    internal class CreateVeterinarianCommandHandler : IRequestHandler<CreateVeterinarianCommand>
    {
        public async Task Handle(CreateVeterinarianCommand request, CancellationToken cancellationToken)
        {

        }
    }
}
