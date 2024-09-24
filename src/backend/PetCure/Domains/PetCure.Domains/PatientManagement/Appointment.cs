using PetCure.Domains.Enums;

namespace PetCure.Domains.PatientManagement
{
    public class Appointment : BaseEntity
    {
        public Appointment(int petId, int ownerId, int vetId, DateTime appointmentDate, string reason, string? notes)
        {
            PetId = petId;
            OwnerId = ownerId;
            VetId = vetId;
            AppointmentDate = appointmentDate;
            Reason = reason;
            Status = AppointmentStatus.Created;
            Notes = notes;
        }

        public int PetId { get; private set; }
        public int OwnerId { get; private set; }
        public int VetId { get; private set; }
        public DateTime AppointmentDate { get; private set; }
        public string Reason { get; private set; }
        public AppointmentStatus Status { get; private set; }
        public string? Notes { get; private set; }
        public Pet Pet { get; private set; }
        public PetOwner Owner { get; private set; }
        public Veterinarian Veterinarian { get; private set; }
    }
}
