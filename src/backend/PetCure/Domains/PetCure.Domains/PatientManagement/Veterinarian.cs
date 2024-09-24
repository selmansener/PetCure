namespace PetCure.Domains.PatientManagement
{
    public class Veterinarian : BaseEntity
    {
        private readonly List<MedicalRecord> _medicalRecords = new List<MedicalRecord>();
        private readonly List<Appointment> _appointments = new List<Appointment>();
        private readonly List<Prescription> _prescriptions = new List<Prescription>();

        public Veterinarian(string firstName, string lastName, string phone, string email, string? specialization, int? yearsOfExperience)
        {
            FirstName = firstName;
            LastName = lastName;
            Phone = phone;
            Email = email;
            Specialization = specialization;
            YearsOfExperience = yearsOfExperience;
        }

        public string FirstName { get; private set; }
        public string LastName { get; private set; }
        public string Phone { get; private set; }
        public string Email { get; private set; }
        public string? Specialization { get; private set; }
        public int? YearsOfExperience { get; private set; }
        public IReadOnlyList<Appointment> Appointments => _appointments;
        public IReadOnlyList<MedicalRecord> MedicalRecords => _medicalRecords;
        public IReadOnlyList<Prescription> Prescriptions => _prescriptions;

        public void Update(string firstName, string lastName, string phone, string email, string? specialization, int? yearsOfExperience)
        {
            FirstName = firstName;
            LastName = lastName;
            Phone = phone;
            Email = email;
            Specialization = specialization;
            YearsOfExperience = yearsOfExperience;

            UpdatedAt = DateTime.UtcNow;
        }
    }
}
