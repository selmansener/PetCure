using FluentValidation;

using MediatR;

using Microsoft.EntityFrameworkCore;

using PetCure.DataAccess.Repositories;
using PetCure.Domains.PatientManagement;
using PetCure.Shared.Exceptions;

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
            var veterinarian = await _veterinarianRepository.GetByIdAsync(request.Id, cancellationToken);

            if (veterinarian == null)
            {
                throw new NotFoundException(nameof(Veterinarian), request.Id.ToString());
            }

            var veterinarianExistWithSamePhone = await _veterinarianRepository
                .GetAll()
                .AnyAsync(x => x.Phone == request.Phone && x.Id != request.Id, cancellationToken);

            if (veterinarianExistWithSamePhone)
            {
                throw new ConflictException(nameof(Veterinarian), nameof(request.Phone), request.Phone);
            }

            veterinarian.Update(request.FirstName, request.LastName, request.Phone, request.Email, request.Specialization, request.YearsOfExperience);

            await _veterinarianRepository.UpdateAsync(veterinarian, cancellationToken, saveChanges: true);
        }
    }
}
