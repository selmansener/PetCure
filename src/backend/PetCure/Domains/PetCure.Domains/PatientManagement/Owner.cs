namespace PetCure.Domains.PatientManagement
{
    public class Owner : BaseEntity
    {
        private readonly List<Pet> _pets = new List<Pet>();

        public Owner(string firstName, string lastName, string phone, string email, string address, string city, string state, string zipCode, string emergencyContact)
        {
            FirstName = firstName;
            LastName = lastName;
            Phone = phone;
            Email = email;
            Address = address;
            City = city;
            State = state;
            ZipCode = zipCode;
            EmergencyContact = emergencyContact;
        }

        public string FirstName { get; private set; }
        public string LastName { get; private set; }
        public string Phone { get; private set; }
        public string Email { get; private set; }
        public string Address { get; private set; }
        public string City { get; private set; }
        public string State { get; private set; }
        public string ZipCode { get; private set; }
        public string EmergencyContact { get; private set; }
        public IReadOnlyList<Pet> Pets => _pets;
    }
}
