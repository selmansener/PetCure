using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Hosting;

using PetCure.Domains.PatientManagement;

using System.Runtime.CompilerServices;

[assembly:InternalsVisibleTo("PetCure.Business.Seed")]
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

        public int TenantId { get; set; }

        public virtual DbSet<Veterinarian> Veterinarians { get; set; }

        public virtual DbSet<Pet> Pets { get; set; }

        public virtual DbSet<Appointment> Appointments { get; set; }

        public virtual DbSet<MedicalRecord> MedicalRecords { get; set; }

        public virtual DbSet<PetOwner> PetOwners { get; set; }

        public virtual DbSet<Prescription> Prescriptions { get; set; }

        protected override void ConfigureConventions(ModelConfigurationBuilder configurationBuilder)
        {
            configurationBuilder.Properties(typeof(decimal)).HavePrecision(18, 2);
            configurationBuilder.Properties(typeof(string)).HaveMaxLength(4000);

            base.ConfigureConventions(configurationBuilder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(PatientManagementDbContext).Assembly);

            base.OnModelCreating(modelBuilder);
        }
    }
}
