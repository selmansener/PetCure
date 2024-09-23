using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace PetCure.DataAccess.EntityConfigurations
{
    internal abstract class BaseEntityConfiguration<TEntity> : IEntityTypeConfiguration<TEntity>
        where TEntity : class
    {
        public virtual void Configure(EntityTypeBuilder<TEntity> builder)
        {
            // Configuring primary key using HasKey
            builder.HasKey("Id");

            // Use HiLo pattern for key generation
            builder.Property("Id").UseHiLo($"{typeof(TEntity).Name}_Seq");

            // Additional common configurations can be added here
        }
    }
}
