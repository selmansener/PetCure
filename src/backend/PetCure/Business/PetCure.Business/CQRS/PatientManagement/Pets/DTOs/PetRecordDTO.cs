using Mapster;

using PetCure.Domains.Enums;
using PetCure.Domains.PatientManagement;

namespace PetCure.Business.CQRS.PatientManagement.Pets.DTOs
{
    public class PetRecordDTO
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

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string OwnerPhone { get; set; }

        public int LastMedicalRecord { get; set; }

        public DateTime? LastAppointmentDate { get; set; }

        public DateTime? UpdatedAt { get; set; }

        public DateTime CreatedAt { get; set; }
    }

    internal class PetRecordDTOMapping : IRegister
    {
        public void Register(TypeAdapterConfig config)
        {
            config.ForType<Pet, PetRecordDTO>()
                .Map(dest => dest.FirstName, src => src.Owner.FirstName)
                .Map(dest => dest.LastName, src => src.Owner.LastName)
                .Map(dest => dest.LastMedicalRecord, src => src.MedicalRecords.OrderByDescending(x => x.Id).Select(x => x.Id).FirstOrDefault())
                .Map(dest => dest.LastAppointmentDate, src => src.Appointments.Any(x => x.Status == AppointmentStatus.Completed) 
                    ? src.Appointments.Where(x => x.Status == AppointmentStatus.Completed)
                        .OrderByDescending(x => x.Id)
                        .Select(x => x.AppointmentDate)
                        .FirstOrDefault() 
                    : (DateTime?)null)
                .Map(dest => dest.OwnerPhone, src => src.Owner.Phone);
        }
    }
}
