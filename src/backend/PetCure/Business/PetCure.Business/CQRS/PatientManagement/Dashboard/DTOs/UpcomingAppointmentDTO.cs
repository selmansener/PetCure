using Mapster;

using PetCure.Domains.Enums;
using PetCure.Domains.PatientManagement;

namespace PetCure.Business.CQRS.PatientManagement.Dashboard.DTOs
{
    public class UpcomingAppointmentDTO
    {
        public int Id { get; set; }

        public PetSpecies Species { get; set; }

        public DateTime ApptDate { get; set; }

        public string OwnerName { get; set; }

        public string Phone { get; set; }

        public string Reason { get; set; }
    }

    internal class UpcomingAppointmentDTOMapper : IRegister
    {
        public void Register(TypeAdapterConfig config)
        {
            config.ForType<Appointment, UpcomingAppointmentDTO>()
                .Map(dest => dest.Species, src => src.Pet.Species)
                .Map(dest => dest.ApptDate, src => src.AppointmentDate)
                .Map(dest => dest.OwnerName, src => $"{src.Owner.FirstName} {src.Owner.LastName}")
                .Map(dest => dest.Phone, src => src.Owner.Phone);
        }
    }
}
