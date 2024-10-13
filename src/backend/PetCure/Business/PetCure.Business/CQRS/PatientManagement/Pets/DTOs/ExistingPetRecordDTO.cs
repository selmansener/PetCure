using Mapster;

using PetCure.Domains.Enums;
using PetCure.Domains.PatientManagement;

namespace PetCure.Business.CQRS.PatientManagement.Pets.DTOs
{
    public class ExistingPetRecordDTO
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

        public OwnerInfoDTO OwnerInfo { get; set; }

        public IEnumerable<MedicalRecordDTO> MedicalRecords { get; set; }

        public IEnumerable<PrescriptionDTO> Prescriptions { get; set; }
    }

    internal class ExistingPetRecordDTOMapper : IRegister
    {
        public void Register(TypeAdapterConfig config)
        {
            config.ForType<Pet, ExistingPetRecordDTO>()
                .Map(dest => dest.OwnerInfo, src => src.Owner);
        }
    }
}
