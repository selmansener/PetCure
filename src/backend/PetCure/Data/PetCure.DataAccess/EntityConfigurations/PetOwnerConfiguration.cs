using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using PetCure.Domains.PatientManagement;

namespace PetCure.DataAccess.EntityConfigurations
{
    internal class PetOwnerConfiguration : BaseEntityConfiguration<PetOwner>
    {
        public override void Configure(EntityTypeBuilder<PetOwner> builder)
        {
            base.Configure(builder);

            // Relationships
            builder.HasMany(o => o.Pets)
                   .WithOne(p => p.Owner)
                   .HasForeignKey(p => p.OwnerId)
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
