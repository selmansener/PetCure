using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using PetCure.Domains.PatientManagement;

namespace PetCure.DataAccess.EntityConfigurations
{
    internal class PetConfiguration : BaseEntityConfiguration<Pet>
    {
        public override void Configure(EntityTypeBuilder<Pet> builder)
        {
            base.Configure(builder);

            // Relationships
            builder.HasOne(p => p.Owner)
                   .WithMany(o => o.Pets)
                   .HasForeignKey(p => p.OwnerId)
                   .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(p => p.MedicalRecords)
                   .WithOne(m => m.Pet)
                   .HasForeignKey(m => m.PetId)
                   .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(p => p.Appointments)
                   .WithOne(a => a.Pet)
                   .HasForeignKey(a => a.PetId)
                   .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(p => p.Prescriptions)
                   .WithOne(pr => pr.Pet)
                   .HasForeignKey(pr => pr.PetId)
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
