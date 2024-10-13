using FluentValidation;

using Mapster;

using MediatR;

using Microsoft.EntityFrameworkCore;

using PetCure.Business.CQRS.PatientManagement.Pets.DTOs;
using PetCure.DataAccess.Repositories;
using PetCure.Domains.PatientManagement;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PetCure.Business.CQRS.PatientManagement.Pets.Queries
{
    public class GetExistingPetRecordById : IRequest<ExistingPetRecordDTO>
    {
        public int PetId { get; set; }
    }

    internal class GetExistingPetRecordByIdValidator : AbstractValidator<GetExistingPetRecordById>
    {
        public GetExistingPetRecordByIdValidator()
        {
            RuleFor(x => x.PetId).NotEmpty();
        }
    }

    internal class GetExistingPetRecordByIdHandler : IRequestHandler<GetExistingPetRecordById, ExistingPetRecordDTO>
    {
        private readonly IBaseRepository<Pet> _petRepository;

        public GetExistingPetRecordByIdHandler(IBaseRepository<Pet> petRepository)
        {
            _petRepository = petRepository;
        }

        public async Task<ExistingPetRecordDTO> Handle(GetExistingPetRecordById request, CancellationToken cancellationToken)
        {
            var petRecord = await _petRepository.GetAllAsNoTracking()
                .ProjectToType<ExistingPetRecordDTO>()
                .FirstOrDefaultAsync(x => x.Id == request.PetId, cancellationToken);

            return petRecord;
        }
    }
}
