
using PetCure.API.Middlewares;
using PetCure.Business;
using PetCure.DataAccess;

namespace PetCure.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddHttpClient();
            builder.Services.AddProblemDetails();

            builder.Services.AddCors(corsOptions =>
            {
                corsOptions.AddDefaultPolicy(corsPolicy =>
                {
                    corsPolicy.AllowAnyHeader();
                    corsPolicy.AllowAnyMethod();
                    corsPolicy.AllowAnyOrigin();
                });
            });

            builder.Services.AddHttpLogging(httpLoggingOptions =>
            {
                httpLoggingOptions.LoggingFields = Microsoft.AspNetCore.HttpLogging.HttpLoggingFields.All;
                httpLoggingOptions.MediaTypeOptions.Clear();
                httpLoggingOptions.MediaTypeOptions.AddText("text/html");
                httpLoggingOptions.MediaTypeOptions.AddText("text/plain");
                httpLoggingOptions.MediaTypeOptions.AddText("application/json");
                httpLoggingOptions.MediaTypeOptions.AddText("multipart/form-data");
                httpLoggingOptions.MediaTypeOptions.AddText("application/x-www-form-urlencoded");
            });

            builder.Services.AddBusinessLayer();
            builder.Services.AddDataAccess(builder.Environment, "Server=localhost;Database=PetCureDevelopment;User Id=petcure-sa;Password=petcure123**;Encrypt=False;TrustServerCertificate=True;");

            builder.Services.AddMvcCore(mvcOptions =>
            {
                mvcOptions.SuppressImplicitRequiredAttributeForNonNullableReferenceTypes = true;
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
                app.MapSwagger();
            }

            app.UseHttpsRedirection();

            app.UseCors();

            app.UseMiddleware<ExceptionHandlerMiddleware>();
            app.UseHttpLogging();

            app.MapControllers();

            app.Run();
        }
    }
}
