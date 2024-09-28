using FluentValidation;

using MediatR;

using PetCure.DataAccess.Repositories;
using PetCure.Domains.PatientManagement;

namespace PetCure.Business.CQRS.PatientManagement.Pets.Commands
{
    public class CreatePetCommand : IRequest
    {

    }

    internal class CreatePetCommandValidator : AbstractValidator<CreatePetCommand>
    {

    }

    internal class CreatePetCommandHandler : IRequestHandler<CreatePetCommand>
    {
        private readonly IBaseRepository<Pet> _petRepository;

        public CreatePetCommandHandler(IBaseRepository<Pet> petRepository)
        {
            _petRepository = petRepository;
        }

        public async Task Handle(CreatePetCommand request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
