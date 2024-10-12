using MediatR;
using PetCure.Business.PipelineBehaviours.VoidBehaviors;
using PetCure.DataAccess.Helpers;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace PetCure.Business.PipelineBehaviours
{
    internal class TransactionBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
        where TRequest : IRequest<TResponse>
    {
        private readonly ITransactionManager _transactionManager;

        public TransactionBehavior(ITransactionManager transactionManager)
        {
            _transactionManager = transactionManager;
        }

        public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
        {
            var attr = typeof(TRequest).GetCustomAttribute<WithTransactionAttribute>();

            if (attr == null)
            {
                return await next();
            }

            TResponse response;
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

        public Task<Unit> Handle(TRequest request, RequestHandlerDelegate<Unit> next, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
