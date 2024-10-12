using FluentValidation;

using PetCure.Domains.Enums;

namespace PetCure.Business.CQRS.PatientManagement.Appointments.Commands.DTOs
{
    public class PetDTO
    {
        public string Name { get; set; }
        public PetSpecies Species { get; set; }
        public string? Breed { get; set; }
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public float Weight { get; set; }
        public string? Color { get; set; }
        public string? MicroChipId { get; set; }
        public string? MedicalHistory { get; set; }
    }

    internal class PetDTOValidator : AbstractValidator<PetDTO>
    {
        public PetDTOValidator()
        {
            RuleFor(x => x.Name).NotEmpty();
            RuleFor(x => x.Species).NotEmpty();
            RuleFor(x => x.Breed).Must(x => x.Trim() != string.Empty).When(x => x.Breed != null).WithMessage($"{nameof(PetDTO.Breed)} must have a value.");
            RuleFor(x => x.Gender).NotEmpty();
            RuleFor(x => x.DateOfBirth).NotEmpty();
            RuleFor(x => x.Weight).NotEmpty();
            RuleFor(x => x.Color).Must(x => x.Trim() != string.Empty).When(x => x.Breed != null).WithMessage($"{nameof(PetDTO.Color)} must have a value.");
            RuleFor(x => x.MicroChipId).Must(x => x.Trim() != string.Empty).When(x => x.Breed != null).WithMessage($"{nameof(PetDTO.MicroChipId)} must have a value.");
            RuleFor(x => x.MedicalHistory).Must(x => x.Trim() != string.Empty).When(x => x.Breed != null).WithMessage($"{nameof(PetDTO.MedicalHistory)} must have a value.");
        }
    }
}
