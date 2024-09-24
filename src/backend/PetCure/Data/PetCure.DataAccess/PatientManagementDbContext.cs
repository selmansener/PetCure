using Microsoft.EntityFrameworkCore;

using PetCure.Domains.PatientManagement;

namespace PetCure.DataAccess
{
    internal class PatientManagementDbContext : DbContext
    {
        public PatientManagementDbContext(DbContextOptions<PatientManagementDbContext> options)
            : base(options)
        {
            Database.AutoTransactionBehavior = AutoTransactionBehavior.WhenNeeded;
            ChangeTracker.LazyLoadingEnabled = false;
            ChangeTracker.AutoDetectChangesEnabled = false;
        }

        public virtual DbSet<Veterinarian> Veterinarians { get; set; }

        public virtual DbSet<Pet> Pets { get; set; }

        public virtual DbSet<Appointment> Appointments { get; set; }

        public virtual DbSet<MedicalRecord> MedicalRecords { get; set; }

        public virtual DbSet<PetOwner> PetOwners { get; set; }

        public virtual DbSet<Prescription> Prescriptions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(PatientManagementDbContext).Assembly);

            base.OnModelCreating(modelBuilder);
        }
    }
}
