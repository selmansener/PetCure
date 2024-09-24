using FluentValidation;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

using Newtonsoft.Json;

using PetCure.Shared.Exceptions;

using System.Collections;
using System.Net;

namespace PetCure.API.Middlewares
{
    public class ExceptionHandlerMiddleware
    {
        private readonly RequestDelegate _next;

        public ExceptionHandlerMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception exception)
            {
                var problemService = context.RequestServices.GetRequiredService<IProblemDetailsService>();
                var environment = context.RequestServices.GetRequiredService<IHostEnvironment>();
                var loggerFactory = context.RequestServices.GetRequiredService<ILoggerFactory>();
                var logger = loggerFactory.CreateLogger(typeof(ExceptionHandlerMiddleware));

                var problemDetailsContext = new ProblemDetailsContext
                {
                    HttpContext = context,
                    AdditionalMetadata = new EndpointMetadataCollection("// TODO: get endpoint metadata"),
                    ProblemDetails = new ProblemDetails
                    {
                        Instance = $"{environment.EnvironmentName}-{environment.ApplicationName}",
                    }
                };

                foreach (DictionaryEntry exceptionData in exception.Data)
                {
                    problemDetailsContext.ProblemDetails.Extensions.TryAdd(exceptionData.Key.ToString(), exceptionData.Value);
                }

                // TODO: make more efficient mapping with dictionary or something
                if (exception is ValidationException validationException)
                {
                    context.Response.StatusCode = 400;

                    problemDetailsContext.ProblemDetails.Status = (int)HttpStatusCode.BadRequest;
                    problemDetailsContext.ProblemDetails.Title = nameof(HttpStatusCode.BadRequest);
                    problemDetailsContext.ProblemDetails.Detail = validationException.Message;
                    problemDetailsContext.ProblemDetails.Type = exception.GetType().Name;

                    var groupedErrors = validationException.Errors.GroupBy(x => x.PropertyName);

                    foreach (var error in groupedErrors)
                    {
                        problemDetailsContext.ProblemDetails.Extensions.TryAdd(error.Key, error.Select(x => new ValidationFailureDTO
                        {
                            PropertyName = x.PropertyName,
                            ErrorCode = x.ErrorCode,
                            ErrorMessage = x.ErrorMessage,
                            CustomState = x.CustomState,
                            AttemptedValue = x.AttemptedValue,
                        }).ToArray());
                    }
                }
                else if (exception is NotFoundException notFoundException)
                {
                    context.Response.StatusCode = (int)HttpStatusCode.NotFound;

                    problemDetailsContext.ProblemDetails.Status = (int)HttpStatusCode.NotFound;
                    problemDetailsContext.ProblemDetails.Title = nameof(HttpStatusCode.NotFound);
                    problemDetailsContext.ProblemDetails.Detail = notFoundException.Message;
                    problemDetailsContext.ProblemDetails.Type = exception.GetType().Name;
                }
                else if (exception is ConflictException conflictException)
                {
                    context.Response.StatusCode = (int)HttpStatusCode.Conflict;

                    problemDetailsContext.ProblemDetails.Status = (int)HttpStatusCode.Conflict;
                    problemDetailsContext.ProblemDetails.Title = nameof(HttpStatusCode.Conflict);
                    problemDetailsContext.ProblemDetails.Detail = conflictException.Message;
                    problemDetailsContext.ProblemDetails.Type = exception.GetType().Name;
                }
                else if (exception is SqlException sqlException)
                {
                    // TODO: consider adding HttpClient related exception like HttpRequestException, TaskCanceledException, OperationCanceledException
                    // There are conserns and unclear points like what should we check exactly for now.

                    context.Response.StatusCode = (int)HttpStatusCode.ServiceUnavailable;

                    problemDetailsContext.ProblemDetails.Status = (int)HttpStatusCode.ServiceUnavailable;
                    problemDetailsContext.ProblemDetails.Title = nameof(HttpStatusCode.ServiceUnavailable);
                    problemDetailsContext.ProblemDetails.Detail = sqlException.Message;
                    problemDetailsContext.ProblemDetails.Type = exception.GetType().Name;
                }
                else
                {
                    context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

                    problemDetailsContext.ProblemDetails.Status = (int)HttpStatusCode.InternalServerError;
                    problemDetailsContext.ProblemDetails.Title = nameof(HttpStatusCode.InternalServerError);
                    problemDetailsContext.ProblemDetails.Detail = exception.Message;
                    problemDetailsContext.ProblemDetails.Type = nameof(Exception);
                }

                var logMessage = JsonConvert.SerializeObject(problemDetailsContext.ProblemDetails, Newtonsoft.Json.Formatting.Indented, new JsonSerializerSettings
                {
                    NullValueHandling = NullValueHandling.Ignore,
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
                });

                if (context.Response.StatusCode >= (int)HttpStatusCode.InternalServerError)
                {
                    logger.LogCritical(exception, logMessage);
                }
                else
                {
                    logger.LogError(exception, logMessage);
                }

                // TODO: add response logging

                if (environment.IsProduction())
                {
                    if (context.Response.StatusCode.ToString().StartsWith("5"))
                    {
                        problemDetailsContext.ProblemDetails.Detail = "Server unavailable for now.";
                        problemDetailsContext.ProblemDetails.Extensions.Clear();
                    }
                }

                await problemService.WriteAsync(problemDetailsContext);

                return;
            }
        }
    }

    internal class ValidationFailureDTO
    {
        public string PropertyName { get; set; }

        public string ErrorMessage { get; set; }

        public object AttemptedValue { get; set; }

        public object CustomState { get; set; }

        public string ErrorCode { get; set; }
    }
}
