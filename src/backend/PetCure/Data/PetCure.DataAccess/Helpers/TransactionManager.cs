using Microsoft.EntityFrameworkCore;

using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PetCure.DataAccess.Helpers
{
    public interface ITransactionManager
    {
        public Task StartTransactionAsync(IsolationLevel isolationLevel, CancellationToken cancellationToken);

        public Task CommitTransactionAsync(CancellationToken cancellationToken);

        public Task RollbackTransactionAsync(CancellationToken cancellationToken);
    }

    internal class TransactionManager : ITransactionManager
    {
        private readonly PatientManagementDbContext _dbContext;

        public TransactionManager(PatientManagementDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task CommitTransactionAsync(CancellationToken cancellationToken)
        {
            await _dbContext.Database.CommitTransactionAsync(cancellationToken);
        }

        public async Task RollbackTransactionAsync(CancellationToken cancellationToken)
        {
            await _dbContext.Database.RollbackTransactionAsync(cancellationToken);
        }

        public async Task StartTransactionAsync(IsolationLevel isolationLevel, CancellationToken cancellationToken)
        {
            await _dbContext.Database.BeginTransactionAsync(isolationLevel, cancellationToken);
        }
    }
}
