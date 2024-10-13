using PetCure.Domains.Enums;

namespace PetCure.Business.CQRS.PatientManagement.Appointments.DTOs
{
    public class AppointmentDTO
    {
        public int Id { get; set; }
        public int PetId { get; set; }
        public int OwnerId { get; set; }
        public int VetId { get; set; }
        public DateTime AppointmentDate { get; set; }
        public string Reason { get; set; }
        public AppointmentStatus Status { get; set; }
        public string? Notes { get; set; }
    }
}
