namespace PetCure.Domains.PatientManagement
{
    public class Prescription : BaseEntity
    {
        public Prescription(int petId, int vetId, DateTime dateIssued, string medicationName, string dosage, string duration, string notes)
        {
            PetId = petId;
            VetId = vetId;
            DateIssued = dateIssued;
            MedicationName = medicationName;
            Dosage = dosage;
            Duration = duration;
            Notes = notes;
        }

        public int PetId { get; private set; }
        public int VetId { get; private set; }
        public DateTime DateIssued { get; private set; }
        public string MedicationName { get; private set; }
        public string Dosage { get; private set; }
        public string Duration { get; private set; }
        public string Notes { get; private set; }
        public Pet Pet { get; private set; }
        public Veterinarian Veterinarian { get; private set; }
    }
}
