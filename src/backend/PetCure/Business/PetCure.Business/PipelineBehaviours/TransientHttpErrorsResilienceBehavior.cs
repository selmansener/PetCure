using MediatR;

using Polly;
using Polly.Retry;

using System.Net;

namespace PetCure.Business.PipelineBehaviours
{
    internal class TransientHttpErrorsResilienceBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
        where TRequest : IRequest<TResponse>
    {
        private readonly ResiliencePipeline _pipeline;

        public TransientHttpErrorsResilienceBehavior()
        {
            _pipeline = new ResiliencePipelineBuilder()
                .AddRetry(new RetryStrategyOptions()
                {
                    BackoffType = DelayBackoffType.Exponential,
                    Delay = TimeSpan.FromSeconds(2),
                    MaxRetryAttempts = 3,
                    ShouldHandle = new PredicateBuilder()
                        .Handle<HttpRequestException>(ex =>
                        {
                            return ex.StatusCode.HasValue
                                && (ex.StatusCode.Value.ToString().StartsWith('5') || ex.StatusCode.Value == HttpStatusCode.RequestTimeout);
                        })
                })
                .AddTimeout(TimeSpan.FromSeconds(15))
                .Build();
        }

        public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
        {
            return await _pipeline.AsAsyncPolicy().ExecuteAsync(async (_next) =>
            {
                return await next();
            }, cancellationToken);
        }
    }
}
