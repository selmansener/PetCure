using Mapster;

using PetCure.Domains.Enums;
using PetCure.Domains.PatientManagement;

namespace PetCure.Business.CQRS.PatientManagement.Appointments.DTOs
{
    public class AppointmentQueryDTO
    {
        public int Id { get; set; }

        public int PetId { get; set; }

        public int OwnerId { get; set; }

        public int VetId { get; set; }

        public string Name { get; set; }

        public PetSpecies Species { get; set; }

        public string Phone { get; set; }

        public string OwnerName { get; set; }

        public string VetName { get; set; }

        public DateTime AppointmentDate { get; set; }

        public string Reason { get; set; }

        public AppointmentStatus Status { get; set; }

        public string? Notes { get; set; }

        public DateTime? CompletedAt { get; set; }
    }

    internal class AppointmentQueryDTOMapper : IRegister
    {
        public void Register(TypeAdapterConfig config)
        {
            config.ForType<Appointment, AppointmentQueryDTO>()
                .Map(dest => dest.Name, src => src.Pet.Name)
                .Map(dest => dest.Species, src => src.Pet.Species)
                .Map(dest => dest.Phone, src => src.Owner.Phone)
                .Map(dest => dest.OwnerName, src => $"{src.Owner.FirstName} {src.Owner.LastName}")
                .Map(dest => dest.VetName, src => $"{src.Veterinarian.FirstName} {src.Veterinarian.LastName}");
        }
    }
}
