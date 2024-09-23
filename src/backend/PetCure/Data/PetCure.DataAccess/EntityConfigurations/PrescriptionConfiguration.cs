using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using PetCure.Domains.PatientManagement;

namespace PetCure.DataAccess.EntityConfigurations
{
    internal class PrescriptionConfiguration : BaseEntityConfiguration<Prescription>
    {
        public override void Configure(EntityTypeBuilder<Prescription> builder)
        {
            base.Configure(builder);

            // Relationships
            builder.HasOne(pr => pr.Pet)
                   .WithMany(p => p.Prescriptions)
                   .HasForeignKey(pr => pr.PetId)
                   .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(pr => pr.Veterinarian)
                   .WithMany(v => v.Prescriptions)
                   .HasForeignKey(pr => pr.VetId)
                   .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
