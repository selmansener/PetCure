using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using PetCure.Domains.PatientManagement;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PetCure.DataAccess.EntityConfigurations
{
    internal class VeterinarianConfiguration : BaseEntityConfiguration<Veterinarian>
    {
        public override void Configure(EntityTypeBuilder<Veterinarian> builder)
        {
            base.Configure(builder);

            // Relationships
            builder.HasMany(v => v.Appointments)
                   .WithOne(a => a.Veterinarian)
                   .HasForeignKey(a => a.VetId)
                   .OnDelete(DeleteBehavior.Restrict);

            builder.HasMany(v => v.MedicalRecords)
                   .WithOne(m => m.Veterinarian)
                   .HasForeignKey(m => m.VetId)
                   .OnDelete(DeleteBehavior.Restrict);

            builder.HasMany(v => v.Prescriptions)
                   .WithOne(p => p.Veterinarian)
                   .HasForeignKey(p => p.VetId)
                   .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
