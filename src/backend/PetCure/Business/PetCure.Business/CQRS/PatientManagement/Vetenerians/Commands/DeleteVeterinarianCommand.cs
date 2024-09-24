using FluentValidation;

using MediatR;

namespace PetCure.Business.CQRS.PatientManagement.Vetenerians.Commands
{
    public class DeleteVeterinarianCommand : IRequest
    {
        public int Id { get; set; }
    }

    internal class DeleteVetenarianCommandValidator : AbstractValidator<DeleteVeterinarianCommand>
    {

    }

    internal class DeleteVeterinarianCommandHandler : IRequestHandler<DeleteVeterinarianCommand>
    {
        public Task Handle(DeleteVeterinarianCommand request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
