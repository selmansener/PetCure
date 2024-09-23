namespace PetCure.Domains.PatientManagement
{
    public class Appointment : BaseEntity
    {
        public Appointment(int petId, int ownerId, int vetId, DateTime appointmentDate, string reason, string status, string notes)
        {
            PetId = petId;
            OwnerId = ownerId;
            VetId = vetId;
            AppointmentDate = appointmentDate;
            Reason = reason;
            Status = status;
            Notes = notes;
        }

        public int PetId { get; private set; }
        public int OwnerId { get; private set; }
        public int VetId { get; private set; }
        public DateTime AppointmentDate { get; private set; }
        public string Reason { get; private set; }
        public string Status { get; private set; }
        public string Notes { get; private set; }
        public Pet Pet { get; private set; }
        public Owner Owner { get; private set; }
        public Veterinarian Veterinarian { get; private set; }
    }
}
