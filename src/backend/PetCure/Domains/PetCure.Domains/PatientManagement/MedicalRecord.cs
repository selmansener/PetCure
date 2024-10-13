namespace PetCure.Domains.PatientManagement
{
    public class MedicalRecord : BaseEntity
    {
        public MedicalRecord(int petId, int vetId, DateTime visitDate, string symptoms, string? diagnosis, string? treatment, string? medication, DateTime? followUpDate, string? notes)
        {
            PetId = petId;
            VetId = vetId;
            VisitDate = visitDate;
            Symptoms = symptoms;
            Diagnosis = diagnosis;
            Treatment = treatment;
            Medication = medication;
            FollowUpDate = followUpDate;
            Notes = notes;
        }

        public int PetId { get; private set; }
        public int VetId { get; private set; }
        public DateTime VisitDate { get; private set; }
        public string Symptoms { get; private set; }
        public string? Diagnosis { get; private set; }
        public string? Treatment { get; private set; }
        public string? Medication { get; private set; }
        public DateTime? FollowUpDate { get; private set; }
        public string? Notes { get; private set; }

        // Navigation properties
        public Pet Pet { get; private set; }
        public Veterinarian Veterinarian { get; private set; }
    }
}
