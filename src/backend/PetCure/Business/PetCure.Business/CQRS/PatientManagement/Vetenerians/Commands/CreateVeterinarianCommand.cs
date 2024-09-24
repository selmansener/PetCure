using FluentValidation;

using MediatR;

using Microsoft.EntityFrameworkCore;

using PetCure.DataAccess.Repositories;
using PetCure.Domains.PatientManagement;
using PetCure.Shared.Exceptions;

namespace PetCure.Business.CQRS.PatientManagement.Vetenerians.Commands
{
    public class CreateVeterinarianCommand : IRequest<Unit>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Specialization { get; set; }
        public int YearsOfExperience { get; set; }
    }

    internal class CreateVeterinarianCommandValidator : AbstractValidator<CreateVeterinarianCommand>
    {
        public CreateVeterinarianCommandValidator()
        {
            RuleFor(x => x.FirstName).NotEmpty();
            RuleFor(x => x.LastName).NotEmpty();
            RuleFor(x => x.Phone).NotEmpty();
            RuleFor(x => x.Email).NotEmpty();
        }
    }

    internal class CreateVeterinarianCommandHandler : IRequestHandler<CreateVeterinarianCommand, Unit>
    {
        private readonly IBaseRepository<Veterinarian> _veterinarianRepository;

        public CreateVeterinarianCommandHandler(IBaseRepository<Veterinarian> veterinarianRepository)
        {
            _veterinarianRepository = veterinarianRepository;
        }

        public async Task<Unit> Handle(CreateVeterinarianCommand request, CancellationToken cancellationToken)
        {
            var veterinarian = await _veterinarianRepository.GetAll().FirstOrDefaultAsync(x => x.Phone == request.Phone, cancellationToken);

            if (veterinarian != null)
            {
                throw new ConflictException(nameof(Veterinarian), nameof(Veterinarian.Phone), request.Phone);
            }

            veterinarian = new Veterinarian(request.FirstName, request.LastName, request.Phone, request.Email, request.Specialization, request.YearsOfExperience);

            await _veterinarianRepository.AddAsync(veterinarian, cancellationToken, saveChanges: true);

            return Unit.Value;
        }
    }
}
