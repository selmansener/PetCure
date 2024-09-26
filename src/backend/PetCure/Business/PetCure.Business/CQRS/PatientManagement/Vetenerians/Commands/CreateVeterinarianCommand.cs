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
        public CreateVeterinarianCommand(string firstName, string lastName, string phone, string email, string specialization, int yearsOfExperience)
        {
            FirstName = firstName;
            LastName = lastName;
            Phone = phone;
            Email = email;
            Specialization = specialization;
            YearsOfExperience = yearsOfExperience;
        }

        public string FirstName { get; private set; }
        public string LastName { get; private set; }
        public string Phone { get; private set; }
        public string Email { get; private set; }
        public string Specialization { get; private set; }
        public int YearsOfExperience { get; private set; }
    }

    internal class CreateVeterinarianCommandValidator : AbstractValidator<CreateVeterinarianCommand>
    {
        public CreateVeterinarianCommandValidator()
        {
            RuleFor(x => x.FirstName).NotEmpty();
            RuleFor(x => x.LastName).NotEmpty();
            RuleFor(x => x.Phone).NotEmpty()
                .Matches(@"^\d+$")
                .When(x => !string.IsNullOrWhiteSpace(x.Phone), ApplyConditionTo.CurrentValidator)
                .WithMessage("The field must contain digits only.");
            RuleFor(x => x.Email).NotEmpty().EmailAddress();
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
