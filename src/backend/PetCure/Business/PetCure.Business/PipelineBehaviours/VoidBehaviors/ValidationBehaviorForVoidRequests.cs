using FluentValidation;

using MediatR;

namespace PetCure.Business.PipelineBehaviours.VoidBehaviors
{
    internal class ValidationBehaviorForVoidRequests<TRequest, Unit> : IPipelineBehavior<TRequest, Unit>
        where TRequest : IRequest
    {
        private readonly IEnumerable<IValidator<TRequest>> _validators;

        public ValidationBehaviorForVoidRequests(IEnumerable<IValidator<TRequest>> validators)
        {
            _validators = validators;
        }

        public async Task<Unit> Handle(TRequest request, RequestHandlerDelegate<Unit> next, CancellationToken cancellationToken)
        {
            if (_validators.Any())
            {
                var context = new ValidationContext<TRequest>(request);
                var validationResults = await Task.WhenAll(_validators.Select(v => v.ValidateAsync(context, cancellationToken)));
                var failures = validationResults.SelectMany(r => r.Errors).Where(f => f != null).ToList();
                if (failures.Count != 0)
                    throw new ValidationException(failures);
            }
            return await next();
        }
    }
}
