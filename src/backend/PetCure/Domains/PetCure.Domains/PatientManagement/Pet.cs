using PetCure.Domains.Enums;

namespace PetCure.Domains.PatientManagement
{
    public class Pet : BaseEntity
    {
        private readonly List<MedicalRecord> _medicalRecords = new List<MedicalRecord>();
        private readonly List<Appointment> _appointments = new List<Appointment>();
        private readonly List<Prescription> _prescriptions = new List<Prescription>();

        public Pet(int ownerId, string name, PetSpecies species, string? breed, string gender, DateTime dateOfBirth, float weight, string? color, string? microChipId, string medicalHistory)
        {
            Name = name;
            Species = species;
            Breed = breed;
            Gender = gender;
            DateOfBirth = dateOfBirth;
            Weight = weight;
            Color = color;
            MicroChipId = microChipId;
            OwnerId = ownerId;
            MedicalHistory = medicalHistory;
        }

        public int OwnerId { get; private set; }
        public string Name { get; private set; }
        public PetSpecies Species { get; private set; }
        public string? Breed { get; private set; }
        public string Gender { get; private set; }
        public DateTime DateOfBirth { get; private set; }
        public float Weight { get; private set; }
        public string? Color { get; private set; }
        public string? MicroChipId { get; private set; }
        public string? MedicalHistory { get; private set; }
        public PetOwner Owner { get; private set; }
        public IReadOnlyList<MedicalRecord> MedicalRecords => _medicalRecords;
        public IReadOnlyList<Appointment> Appointments => _appointments;
        public IReadOnlyList<Prescription> Prescriptions => _prescriptions;
    }
}
