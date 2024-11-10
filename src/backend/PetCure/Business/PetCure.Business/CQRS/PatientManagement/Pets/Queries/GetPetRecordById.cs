using FluentValidation;

using Mapster;

using MediatR;

using Microsoft.EntityFrameworkCore;

using PetCure.Business.CQRS.PatientManagement.Pets.DTOs;
using PetCure.DataAccess.Repositories;
using PetCure.Domains.PatientManagement;
using PetCure.Shared.Exceptions;

namespace PetCure.Business.CQRS.PatientManagement.Pets.Queries
{
    public class GetPetRecordById : IRequest<PetRecordDTO>
    {
        public GetPetRecordById(int id)
        {
            Id = id;
        }

        public int Id { get; private set; }
    }

    internal class GetPetRecordByIdValidator : AbstractValidator<GetPetRecordById>
    {
        public GetPetRecordByIdValidator()
        {
            RuleFor(x => x.Id).NotEmpty();
        }
    }

    internal class GetPetRecordByIdHandler : IRequestHandler<GetPetRecordById, PetRecordDTO>
    {
        private readonly IBaseRepository<Pet> _petRepository;

        public GetPetRecordByIdHandler(IBaseRepository<Pet> petRepository)
        {
            _petRepository = petRepository;
        }

        public async Task<PetRecordDTO> Handle(GetPetRecordById request, CancellationToken cancellationToken)
        {
            var petRecord = await _petRepository
                .GetAllAsNoTracking()
                .ProjectToType<PetRecordDTO>()
                .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (petRecord == null)
            {
                throw new NotFoundException(nameof(Pet), nameof(Pet.Id));
            }

            return petRecord;
        }
    }
}
