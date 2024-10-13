using Mapster;

using PetCure.Domains.Enums;
using PetCure.Domains.PatientManagement;

namespace PetCure.Business.CQRS.PatientManagement.Appointments.DTOs
{
    public class AppointmentDetailsDTO
    {
        public int Id { get; set; }

        public DateTime AppointmentDate { get; set; }

        public string Reason { get; set; }

        public AppointmentStatus Status { get; set; }

        public string? Notes { get; set; }

        public PetDetailsDTO PetDetails { get; set; }

        public PetOwnerDetailsDTO OwnerDetails { get; set; }

        public VetDetailsDTO VetDetails { get; set; }

        public DateTime? CompletedAt { get; set; }
    }

    internal class AppointmentDetailsDTOMapper : IRegister
    {
        public void Register(TypeAdapterConfig config)
        {
            config.ForType<Appointment, AppointmentDetailsDTO>()
                .Map(dest => dest.PetDetails, src => src.Pet)
                .Map(dest => dest.OwnerDetails, src => src.Owner)
                .Map(dest => dest.VetDetails, src => src.Veterinarian);
        }
    }

    public class PetDetailsDTO
    {
        public int Id { get; set; }

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

    public class PetOwnerDetailsDTO
    {
        public int Id { get; set; }

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

    public class VetDetailsDTO
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }

        public string? Specialization { get; set; }

        public int? YearsOfExperience { get; set; }
    }
}
