using MediatR;

using Microsoft.Extensions.Logging;

using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace PetCure.Business.PipelineBehaviours.VoidBehaviors
{
    internal class LoggingBehaviorForVoidRequests<TRequest, Unit> : IPipelineBehavior<TRequest, Unit>
        where TRequest : IRequest
    {
        private readonly ILogger<LoggingBehaviorForVoidRequests<TRequest, Unit>> _logger;

        public LoggingBehaviorForVoidRequests(ILogger<LoggingBehaviorForVoidRequests<TRequest, Unit>> logger)
        {
            _logger = logger;
        }

        public async Task<Unit> Handle(TRequest request, RequestHandlerDelegate<Unit> next, CancellationToken cancellationToken)
        {
            var requestLog = JsonConvert.SerializeObject(request, Newtonsoft.Json.Formatting.Indented, new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver(),
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
                NullValueHandling = NullValueHandling.Ignore
            });

            _logger.LogInformation(requestLog);

            return await next();
        }
    }
}
