using MediatR;
using PetCure.DataAccess.Helpers;

using System.Reflection;

namespace PetCure.Business.PipelineBehaviours.VoidBehaviors
{
    internal class TransactionBehaviorForVoidRequest<TRequest, Unit> : IPipelineBehavior<TRequest, Unit>
        where TRequest : IRequest
    {
        private readonly ITransactionManager _transactionManager;

        public TransactionBehaviorForVoidRequest(ITransactionManager transactionManager)
        {
            _transactionManager = transactionManager;
        }

        public async Task<Unit> Handle(TRequest request, RequestHandlerDelegate<Unit> next, CancellationToken cancellationToken)
        {
            var attr = typeof(TRequest).GetCustomAttribute<WithTransactionAttribute>();

            if (attr == null)
            {
                return await next();
            }

            Unit response;
            try
            {
                await _transactionManager.StartTransactionAsync(System.Data.IsolationLevel.ReadCommitted, cancellationToken);
                response = await next();
                await _transactionManager.CommitTransactionAsync(cancellationToken);
            }
            catch (Exception)
            {
                await _transactionManager.RollbackTransactionAsync(cancellationToken);
                throw;
            }

            return response;
        }
    }

    [AttributeUsage(AttributeTargets.Class, Inherited = false, AllowMultiple = false)]
    internal class WithTransactionAttribute : Attribute
    {
    }
}
