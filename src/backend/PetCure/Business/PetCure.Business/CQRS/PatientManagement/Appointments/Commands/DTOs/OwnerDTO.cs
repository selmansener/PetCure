using FluentValidation;

namespace PetCure.Business.CQRS.PatientManagement.Appointments.Commands.DTOs
{
    public class OwnerDTO
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
        public string? ZipCode { get; set; }
        public string EmergencyContact { get; set; }
    }

    internal class OwnerDTOValidator : AbstractValidator<OwnerDTO>
    {
        public OwnerDTOValidator()
        {
            RuleFor(x => x.FirstName).NotEmpty();
            RuleFor(x => x.LastName).NotEmpty();
            RuleFor(x => x.Phone).NotEmpty();
            RuleFor(x => x.Email).NotEmpty();
            RuleFor(x => x.Address).NotEmpty();
            RuleFor(x => x.City).Must(x => x.Trim() != string.Empty).When(x => x.City != null).WithMessage($"{nameof(OwnerDTO.City)} must have a value.");
            RuleFor(x => x.State).Must(x => x.Trim() != string.Empty).When(x => x.State != null).WithMessage($"{nameof(OwnerDTO.State)} must have a value.");
            RuleFor(x => x.ZipCode).Must(x => x.Trim() != string.Empty).When(x => x.ZipCode != null).WithMessage($"{nameof(OwnerDTO.ZipCode)} must have a value.");
            RuleFor(x => x.EmergencyContact).NotEmpty();
        }
    }
}
