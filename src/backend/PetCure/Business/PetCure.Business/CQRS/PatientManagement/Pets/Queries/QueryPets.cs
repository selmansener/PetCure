using FluentValidation;

using Mapster;

using MediatR;

using Microsoft.EntityFrameworkCore;

using PetCure.Business.CQRS.PatientManagement.Pets.DTOs;
using PetCure.DataAccess.Repositories;
using PetCure.Domains.PatientManagement;

namespace PetCure.Business.CQRS.PatientManagement.Pets.Queries
{
    public class QueryPets : IRequest<IEnumerable<PetRecordDTO>>
    {
        public string? Phone { get; set; }
        public string? MicroChipId { get; set; }
    }

    internal class QueryPetsValidator : AbstractValidator<QueryPets>
    {
        public QueryPetsValidator()
        {
            RuleFor(x => x.Phone)
                .Must(x => x.Trim() != string.Empty)
                .When(x => x.Phone != null)
                .WithMessage($"{nameof(QueryPets.Phone)} must not be empty string.");
            RuleFor(x => x.MicroChipId)
                .Must(x => x.Trim() != string.Empty)
                .When(x => x.MicroChipId != null)
                .WithMessage($"{nameof(QueryPets.MicroChipId)} must not be empty string.");
        }
    }

    internal class QueryPetsHandler : IRequestHandler<QueryPets, IEnumerable<PetRecordDTO>>
    {
        private readonly IBaseRepository<Pet> _petRepository;

        public QueryPetsHandler(IBaseRepository<Pet> petRepository)
        {
            _petRepository = petRepository;
        }

        public async Task<IEnumerable<PetRecordDTO>> Handle(QueryPets request, CancellationToken cancellationToken)
        {
            var exitingRecordsQuery = _petRepository
                .GetAll()
                .ProjectToType<PetRecordDTO>();

            if (!string.IsNullOrEmpty(request.Phone))
            {
                exitingRecordsQuery = exitingRecordsQuery.Where(x => x.OwnerPhone == request.Phone);
            }

            if (!string.IsNullOrEmpty(request.MicroChipId))
            {
                exitingRecordsQuery = exitingRecordsQuery.Where(x => x.MicroChipId == request.MicroChipId);
            }

            return await exitingRecordsQuery.ToListAsync(cancellationToken);
        }
    }
}
