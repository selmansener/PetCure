namespace PetCure.Domains.PatientManagement
{
    public class BaseEntity
    {
        public BaseEntity()
        {
            CreatedAt = DateTime.UtcNow;
        }

        public int Id { get; protected set; }

        public DateTime DeletedAt { get; protected set; }

        public DateTime UpdatedAt { get; protected set; }

        public DateTime CreatedAt { get; protected set; }
    }
}
