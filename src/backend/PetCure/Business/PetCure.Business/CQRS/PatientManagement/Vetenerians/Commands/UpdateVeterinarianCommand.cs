using FluentValidation;

using MediatR;

using PetCure.DataAccess.Repositories;
using PetCure.Domains.PatientManagement;

namespace PetCure.Business.CQRS.PatientManagement.Vetenerians.Commands
{
    public class UpdateVeterinarianCommand : IRequest
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Specialization { get; set; }
        public int YearsOfExperience { get; set; }
    }

    internal class UpdateVetenarianCommandValidator : AbstractValidator<UpdateVeterinarianCommand>
    {
        public UpdateVetenarianCommandValidator()
        {
            RuleFor(x => x.Id).NotEmpty();
            RuleFor(x => x.FirstName).NotEmpty();
            RuleFor(x => x.LastName).NotEmpty();
            RuleFor(x => x.Phone).NotEmpty();
            RuleFor(x => x.Email).NotEmpty();
        }
    }

    internal class UpdateVeterinarianCommandHandler : IRequestHandler<UpdateVeterinarianCommand>
    {
        private readonly IBaseRepository<Veterinarian> _veterinarianRepository;

        public UpdateVeterinarianCommandHandler(IBaseRepository<Veterinarian> veterinarianRepository)
        {
            _veterinarianRepository = veterinarianRepository;
        }

        public async Task Handle(UpdateVeterinarianCommand request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
