using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using PetCure.Domains.PatientManagement;

namespace PetCure.DataAccess.EntityConfigurations
{
    internal class AppointmentConfiguration : BaseEntityConfiguration<Appointment>
    {
        public override void Configure(EntityTypeBuilder<Appointment> builder)
        {
            base.Configure(builder);

            // Relationships
            builder.HasOne(a => a.Pet)
                   .WithMany(p => p.Appointments)
                   .HasForeignKey(a => a.PetId)
                   .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(a => a.Owner);

            builder.HasOne(a => a.Veterinarian)
                   .WithMany(v => v.Appointments)
                   .HasForeignKey(a => a.VetId)
                   .OnDelete(DeleteBehavior.Restrict); // Restrict deletion if referenced
        }
    }
}
