using FluentValidation;

using Mapster;

using MediatR;

using Microsoft.EntityFrameworkCore;

using PetCure.Business.CQRS.PatientManagement.Vetenerians.DTOs;
using PetCure.DataAccess.Repositories;
using PetCure.Domains.PatientManagement;
using PetCure.Shared.Exceptions;

namespace PetCure.Business.CQRS.PatientManagement.Vetenerians.Queries
{
    public class VeterinarianGetById : IRequest<VeterinarianDTO>
    {
        public int Id { get; set; }
    }

    internal class VeterinarianGetByIdValidator : AbstractValidator<VeterinarianGetById>
    {
        public VeterinarianGetByIdValidator()
        {
            RuleFor(x => x.Id).NotEmpty();
        }
    }

    internal class VeterinarianGetByIdHandler : IRequestHandler<VeterinarianGetById, VeterinarianDTO>
    {
        private readonly IBaseRepository<Veterinarian> _veterinarianRepository;

        public VeterinarianGetByIdHandler(IBaseRepository<Veterinarian> veterinarianRepository)
        {
            _veterinarianRepository = veterinarianRepository;
        }

        public async Task<VeterinarianDTO> Handle(VeterinarianGetById request, CancellationToken cancellationToken)
        {
            var veterinarian = await _veterinarianRepository
                .GetAll()
                .ProjectToType<VeterinarianDTO>()
                .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (veterinarian == null)
            {
                throw new NotFoundException(nameof(Veterinarian), request.Id.ToString());
            }

            return veterinarian;
        }
    }
}
