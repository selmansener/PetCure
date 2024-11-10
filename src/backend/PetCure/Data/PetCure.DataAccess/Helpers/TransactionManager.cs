using Microsoft.EntityFrameworkCore;

using System.Data;

namespace PetCure.DataAccess.Helpers
{
    public interface ITransactionManager
    {
        public Task<TResult> ExecuteInTransactionAsync<TState, TResult>(IsolationLevel isolationLevel, TState state, Func<TState, Task<TResult>> action, CancellationToken cancellationToken);
    }

    internal class TransactionManager : ITransactionManager
    {
        private readonly PatientManagementDbContext _dbContext;

        public TransactionManager(PatientManagementDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<TResult> ExecuteInTransactionAsync<TState, TResult>(IsolationLevel isolationLevel, TState state, Func<TState, Task<TResult>> action, CancellationToken cancellationToken)
        {
            var executionStrategy = _dbContext.Database.CreateExecutionStrategy();

            return await executionStrategy.ExecuteAsync(state, async (state, token) =>
            {
                try
                {
                    await _dbContext.Database.BeginTransactionAsync(isolationLevel, token);
                    var result = await action(state);
                    await _dbContext.Database.CommitTransactionAsync(token);
                    return result;
                }
                catch (Exception)
                {
                    await _dbContext.Database.RollbackTransactionAsync(token);
                    throw;
                }
            }, cancellationToken);
        }
    }
}
