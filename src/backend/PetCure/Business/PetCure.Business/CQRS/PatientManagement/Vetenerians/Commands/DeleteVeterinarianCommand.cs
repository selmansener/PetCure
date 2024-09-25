using FluentValidation;

using MediatR;

using PetCure.DataAccess.Repositories;
using PetCure.Domains.PatientManagement;
using PetCure.Shared.Exceptions;

namespace PetCure.Business.CQRS.PatientManagement.Vetenerians.Commands
{
    public class DeleteVeterinarianCommand : IRequest
    {
        public int Id { get; set; }
    }

    internal class DeleteVetenarianCommandValidator : AbstractValidator<DeleteVeterinarianCommand>
    {
        public DeleteVetenarianCommandValidator()
        {
            RuleFor(x => x.Id).NotEmpty();
        }
    }

    internal class DeleteVeterinarianCommandHandler : IRequestHandler<DeleteVeterinarianCommand>
    {
        private readonly IBaseRepository<Veterinarian> _veterinarianRepository;

        public DeleteVeterinarianCommandHandler(IBaseRepository<Veterinarian> veterinarianRepository)
        {
            _veterinarianRepository = veterinarianRepository;
        }

        public async Task Handle(DeleteVeterinarianCommand request, CancellationToken cancellationToken)
        {
            var veterinarian = await _veterinarianRepository.GetByIdAsync(request.Id, cancellationToken);

            if (veterinarian == null)
            {
                throw new NotFoundException(nameof(Veterinarian), request.Id.ToString());
            }

            await _veterinarianRepository.RemoveAsync(veterinarian, cancellationToken, saveChanges: true);
        }
    }
}
