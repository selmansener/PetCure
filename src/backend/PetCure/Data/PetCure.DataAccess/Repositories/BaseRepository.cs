using Microsoft.EntityFrameworkCore;

using PetCure.Domains.PatientManagement;

using System.Runtime.CompilerServices;

namespace PetCure.DataAccess.Repositories
{
    public interface IBaseRepository<TEntity>
        where TEntity : BaseEntity
    {
        Task<int> AddAsync(TEntity entity, CancellationToken cancellationToken, bool saveChanges = false);
        Task<int> AddRangeAsync(IEnumerable<TEntity> entities, CancellationToken cancellationToken, bool saveChanges = false);
        Task<IEnumerable<TEntity>> GetAllAsync(CancellationToken cancellationToken, [CallerFilePathAttribute] string path = null, [CallerLineNumberAttribute] int lineNumber = 0);
        IQueryable<TEntity> GetAll([CallerFilePathAttribute] string path = null, [CallerLineNumberAttribute] int lineNumber = 0);
        IQueryable<TEntity> GetAllAsNoTracking([CallerFilePathAttribute] string path = null, [CallerLineNumberAttribute] int lineNumber = 0);
        Task<TEntity?> GetByIdAsync(int id, CancellationToken cancellationToken, [CallerFilePathAttribute] string path = null, [CallerLineNumberAttribute] int lineNumber = 0);
        Task<int> RemoveAsync(TEntity entity, CancellationToken cancellationToken, bool saveChanges = false);
        Task<int> RemoveRangeAsync(IEnumerable<TEntity> entities, CancellationToken cancellationToken, bool saveChanges = false);
        Task<int> UpdateAsync(TEntity entity, CancellationToken cancellationToken, bool saveChanges = false);
        Task<int> UpdateRangeAsync(IEnumerable<TEntity> entities, CancellationToken cancellationToken, bool saveChanges = false);
    }

    internal class BaseRepository<TEntity> : IBaseRepository<TEntity>
        where TEntity : BaseEntity
    {
        protected readonly PatientManagementDbContext _baseDb;

        public BaseRepository(PatientManagementDbContext baseDb)
        {
            _baseDb = baseDb;
        }

        public async Task<IEnumerable<TEntity>> GetAllAsync(CancellationToken cancellationToken, [CallerFilePathAttribute] string path = null, [CallerLineNumberAttribute] int lineNumber = 0)
        {
            return await _baseDb.Set<TEntity>().TagWithCallSite(path, lineNumber).ToListAsync(cancellationToken);
        }

        public virtual IQueryable<TEntity> GetAll([CallerFilePathAttribute] string path = null, [CallerLineNumberAttribute] int lineNumber = 0)
        {
            IQueryable<TEntity> dataSet = _baseDb.Set<TEntity>().TagWithCallSite(path, lineNumber);

            return dataSet;
        }

        public virtual async Task<TEntity?> GetByIdAsync(int id, CancellationToken cancellationToken, [CallerFilePathAttribute] string path = null, [CallerLineNumberAttribute] int lineNumber = 0)
        {
            return await GetAll(path, lineNumber).FirstOrDefaultAsync(x => x.Id.Equals(id), cancellationToken);
        }

        public virtual async Task<TEntity?> GetByIdAsNoTrackingAsync(int id, CancellationToken cancellationToken, [CallerFilePathAttribute] string path = null, [CallerLineNumberAttribute] int lineNumber = 0)
        {
            return await GetAll(path, lineNumber).AsNoTracking().FirstOrDefaultAsync(x => x.Id.Equals(id), cancellationToken);
        }

        public virtual IQueryable<TEntity> GetAllAsNoTracking([CallerFilePathAttribute] string path = null, [CallerLineNumberAttribute] int lineNumber = 0)
        {
            return GetAll(path, lineNumber).AsNoTracking();
        }

        public virtual async Task<int> AddAsync(TEntity entity, CancellationToken cancellationToken, bool saveChanges = false)
        {
            int resultCount = 0;
            await _baseDb.Set<TEntity>().AddAsync(entity, cancellationToken);

            if (saveChanges)
            {
                resultCount = await _baseDb.SaveChangesAsync(cancellationToken);
            }

            return resultCount;
        }

        public virtual async Task<int> AddRangeAsync(IEnumerable<TEntity> entities, CancellationToken cancellationToken, bool saveChanges = false)
        {
            int resultCount = 0;
            await _baseDb.Set<TEntity>().AddRangeAsync(entities, cancellationToken);

            if (saveChanges)
            {
                resultCount = await _baseDb.SaveChangesAsync(cancellationToken);
            }

            return resultCount;
        }

        public virtual async Task<int> RemoveAsync(TEntity entity, CancellationToken cancellationToken, bool saveChanges = false)
        {
            int resultCount = 0;
            _baseDb.Entry(entity).State = EntityState.Deleted;

            if (saveChanges)
            {
                resultCount = await _baseDb.SaveChangesAsync(cancellationToken);
            }

            return resultCount;
        }

        public virtual async Task<int> RemoveRangeAsync(IEnumerable<TEntity> entities, CancellationToken cancellationToken, bool saveChanges = false)
        {
            int resultCount = 0;
            _baseDb.Set<TEntity>().RemoveRange(entities);

            if (saveChanges)
            {
                resultCount = await _baseDb.SaveChangesAsync(cancellationToken);
            }

            return resultCount;
        }

        public virtual async Task<int> UpdateRangeAsync(IEnumerable<TEntity> entities, CancellationToken cancellationToken, bool saveChanges = false)
        {
            int resultCount = 0;

            foreach (var entity in entities)
            {
                _baseDb.Entry(entity).State = EntityState.Modified;
            }

            _baseDb.ChangeTracker.DetectChanges();

            if (saveChanges)
            {
                resultCount = await _baseDb.SaveChangesAsync(cancellationToken);
            }

            return resultCount;
        }

        public virtual async Task<int> UpdateAsync(TEntity entity, CancellationToken cancellationToken, bool saveChanges = false)
        {
            int resultCount = 0;
            _baseDb.Entry(entity).State = EntityState.Modified;

            _baseDb.ChangeTracker.DetectChanges();

            if (saveChanges)
            {
                resultCount = await _baseDb.SaveChangesAsync(cancellationToken);
            }

            return resultCount;
        }
    }
}
