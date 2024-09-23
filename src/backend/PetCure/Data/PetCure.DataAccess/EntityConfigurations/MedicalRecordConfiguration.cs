using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using PetCure.Domains.PatientManagement;

namespace PetCure.DataAccess.EntityConfigurations
{
    internal class MedicalRecordConfiguration : BaseEntityConfiguration<MedicalRecord>
    {
        public override void Configure(EntityTypeBuilder<MedicalRecord> builder)
        {
            base.Configure(builder);

            // Relationships
            builder.HasOne(m => m.Pet)
                   .WithMany(p => p.MedicalRecords)
                   .HasForeignKey(m => m.PetId)
                   .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(m => m.Veterinarian)
                   .WithMany(v => v.MedicalRecords)
                   .HasForeignKey(m => m.VetId)
                   .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
