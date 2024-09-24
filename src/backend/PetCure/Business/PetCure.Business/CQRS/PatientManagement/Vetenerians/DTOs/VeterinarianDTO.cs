using Mapster;

using PetCure.Domains.PatientManagement;

namespace PetCure.Business.CQRS.PatientManagement.Vetenerians.DTOs
{
    public class VeterinarianDTO
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Specialization { get; set; }
        public int YearsOfExperience { get; set; }
        public int CurrentAppointmentCount { get; set; }
        public DateTime UpdatedAt { get; set; }
        public DateTime CreatedAt { get; set; }
    }

    internal class VeterinarianDTOMapping : IRegister
    {
        public void Register(TypeAdapterConfig config)
        {
            config.ForType<Veterinarian, VeterinarianDTO>()
                .Map(dest => dest.CurrentAppointmentCount, src => src.Appointments.Count());
        }
    }
}
