using Mapster;

using PetCure.Domains.PatientManagement;

namespace PetCure.Business.CQRS.PatientManagement.Appointments.DTOs
{
    public class VeterinarianBookedDatesDTO
    {
        public int Id { get; set; }

        public string FullName { get; set; }

        public IEnumerable<DateTime> AppointmentDates { get; set; }
    }

    internal class VeterinarianBookingDTOMapping : IRegister
    {
        public void Register(TypeAdapterConfig config)
        {
            config.ForType<Veterinarian, VeterinarianBookedDatesDTO>()
                .Map(dest => dest.FullName, src => $"{src.FirstName} {src.LastName}")
                .Map(dest => dest.AppointmentDates, src => src.Appointments.Where(x => x.AppointmentDate > DateTime.Now).Select(x => x.AppointmentDate));
        }
    }
}
