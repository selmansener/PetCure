namespace PetCure.Domains.PatientManagement
{
    public class MedicalRecord : BaseEntity
    {
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
