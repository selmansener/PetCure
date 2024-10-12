using FluentValidation;

using MediatR;

using PetCure.DataAccess.Repositories;
using PetCure.Domains.PatientManagement;
using PetCure.Shared.Exceptions;

namespace PetCure.Business.CQRS.PatientManagement.Pets.Commands
{
    public class AddAppointmentCommand : IRequest
    {
        public int PetId { get; set; }

        public int OwnerId { get; set; }

        public int VetId { get; set; }

        public DateTime ApptDate { get; set; }

        public string Reason { get; set; }

        public string? Notes { get; set; }
    }

    internal class AddAppointmentCommandValidator : AbstractValidator<AddAppointmentCommand>
    {
        public AddAppointmentCommandValidator()
        {
            RuleFor(x => x.PetId).NotEmpty();
            RuleFor(x => x.VetId).NotEmpty();
            RuleFor(x => x.ApptDate).NotEmpty();
            RuleFor(x => x.Reason).NotEmpty();
        }
    }

    internal class AddAppointmentCommandHandler : IRequestHandler<AddAppointmentCommand>
    {
        private readonly IBaseRepository<Pet> _petRepository;
        private readonly IBaseRepository<Veterinarian> _vetRepository;
        private readonly IBaseRepository<PetOwner> _petOwnerRepository;
        private readonly IBaseRepository<Appointment> _appointmentRepository;

        public AddAppointmentCommandHandler(IBaseRepository<Pet> petRepository, IBaseRepository<Veterinarian> vetRepository, IBaseRepository<PetOwner> petOwnerRepository)
        {
            _petRepository = petRepository;
            _vetRepository = vetRepository;
            _petOwnerRepository = petOwnerRepository;
        }

        public async Task Handle(AddAppointmentCommand request, CancellationToken cancellationToken)
        {
            await _petOwnerRepository.ExistsAsync(request.PetId, cancellationToken, @throw: true);
            await _petOwnerRepository.ExistsAsync(request.OwnerId, cancellationToken, @throw: true);
            await _vetRepository.ExistsAsync(request.VetId, cancellationToken, @throw: true);

            var appt = new Appointment(request.PetId, request.OwnerId, request.VetId, request.ApptDate, request.Reason, request.Notes);

            await _appointmentRepository.AddAsync(appt, cancellationToken, saveChanges: true);
        }
    }
}
