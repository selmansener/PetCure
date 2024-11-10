using MediatR;
using PetCure.DataAccess.Helpers;

using System.Reflection;
using System.Data;

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

            var isolationLevel = attr.IsolationLevel.HasValue ? attr.IsolationLevel.Value : IsolationLevel.ReadCommitted;

            return await _transactionManager.ExecuteInTransactionAsync<Unit, Unit>(isolationLevel, default, async state =>
            {
                return await next();
            }, cancellationToken);
        }
    }

    [AttributeUsage(AttributeTargets.Class, Inherited = false, AllowMultiple = false)]
    internal class WithTransactionAttribute : Attribute
    {
        public WithTransactionAttribute()
        {
        }

        public WithTransactionAttribute(IsolationLevel isolationLevel)
        {
            IsolationLevel = isolationLevel;
        }

        public IsolationLevel? IsolationLevel { get; private set; }
    }
}
