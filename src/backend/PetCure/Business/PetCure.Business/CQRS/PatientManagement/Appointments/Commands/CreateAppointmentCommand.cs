using FluentValidation;

using MediatR;

using PetCure.Business.CQRS.PatientManagement.Appointments.Commands.DTOs;
using PetCure.Business.PipelineBehaviours.VoidBehaviors;
using PetCure.DataAccess.Repositories;
using PetCure.Domains.PatientManagement;

namespace PetCure.Business.CQRS.PatientManagement.Appointments.Commands
{
    [WithTransaction()]
    public class CreateAppointmentCommand : IRequest
    {
        public int VetId { get; set; }

        public DateTime ApptDate { get; set; }

        public string Reason { get; set; }

        public string? Notes { get; set; }

        public PetDTO PetInfo { get; set; }

        public OwnerDTO OwnerInfo { get; set; }
    }

    internal class CreateAppointmentCommandValidator : AbstractValidator<CreateAppointmentCommand>
    {
        public CreateAppointmentCommandValidator()
        {
            RuleFor(x => x.VetId).NotEmpty();
            RuleFor(x => x.ApptDate).NotEmpty();
            RuleFor(x => x.Reason).NotEmpty();
            RuleFor(x => x.PetInfo).SetValidator(new PetDTOValidator());
            RuleFor(x => x.OwnerInfo).SetValidator(new OwnerDTOValidator());
        }
    }

    internal class CreateAppointmentCommandHandler : IRequestHandler<CreateAppointmentCommand>
    {
        private readonly IBaseRepository<Pet> _petRepository;
        private readonly IVeterinarianRepository _vetRepository;
        private readonly IBaseRepository<PetOwner> _petOwnerRepository;
        private readonly IBaseRepository<Appointment> _appointmentRepository;

        public CreateAppointmentCommandHandler(IBaseRepository<Pet> petRepository, IBaseRepository<PetOwner> petOwnerRepository, IBaseRepository<Appointment> appointmentRepository, IVeterinarianRepository vetRepository)
        {
            _petRepository = petRepository;
            _petOwnerRepository = petOwnerRepository;
            _appointmentRepository = appointmentRepository;
            _vetRepository = vetRepository;
        }

        public async Task Handle(CreateAppointmentCommand request, CancellationToken cancellationToken)
        {
            await _vetRepository.ExistsAsync(request.VetId, cancellationToken, @throw: true);

            await _vetRepository.CheckApptConflict(request.VetId, request.ApptDate, cancellationToken);

            var owner = new PetOwner(
                request.OwnerInfo.FirstName,
                request.OwnerInfo.LastName,
                request.OwnerInfo.Phone,
                request.OwnerInfo.Email,
                request.OwnerInfo.Address,
                request.OwnerInfo.City,
                request.OwnerInfo.State,
                request.OwnerInfo.ZipCode,
                request.OwnerInfo.EmergencyContact);

            await _petOwnerRepository.AddAsync(owner, cancellationToken);

            var pet = new Pet(
                owner.Id,
                request.PetInfo.Name,
                request.PetInfo.Species,
                request.PetInfo.Breed,
                request.PetInfo.Gender,
                request.PetInfo.DateOfBirth,
                request.PetInfo.Weight,
                request.PetInfo.Color,
                request.PetInfo.MicroChipId,
                request.PetInfo.MedicalHistory);

            await _petRepository.AddAsync(pet, cancellationToken);

            var appt = new Appointment(pet.Id, pet.OwnerId, request.VetId, request.ApptDate, request.Reason, request.Notes);

            await _appointmentRepository.AddAsync(appt, cancellationToken, saveChanges: true);
        }
    }
}
