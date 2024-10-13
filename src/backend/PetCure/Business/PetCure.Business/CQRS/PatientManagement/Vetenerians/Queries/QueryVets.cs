using Mapster;

using MediatR;

using Microsoft.EntityFrameworkCore;

using PetCure.Business.CQRS.PatientManagement.Vetenerians.DTOs;
using PetCure.Business.SharedDTOs;
using PetCure.DataAccess.Repositories;
using PetCure.Domains.PatientManagement;

namespace PetCure.Business.CQRS.PatientManagement.Vetenerians.Queries
{
    public class QueryVets : IRequest<PaginationResult<VeterinarianDTO>>
    {
        public int PageSize { get; set; } = 25;

        public int Page { get; set; } = 0;
    }

    internal class QueryVetsHandler : IRequestHandler<QueryVets, PaginationResult<VeterinarianDTO>>
    {
        private readonly IBaseRepository<Veterinarian> _veterinarianRepository;

        public QueryVetsHandler(IBaseRepository<Veterinarian> veterinarianRepository)
        {
            _veterinarianRepository = veterinarianRepository;
        }

        public async Task<PaginationResult<VeterinarianDTO>> Handle(QueryVets request, CancellationToken cancellationToken)
        {
            var totalRowCount = await _veterinarianRepository.GetAll().CountAsync(cancellationToken);

            var data = await _veterinarianRepository
                .GetAllAsNoTracking()
                .ProjectToType<VeterinarianDTO>()
                .Skip(request.Page * request.PageSize)
                .Take(request.PageSize)
                .ToListAsync(cancellationToken);

            return new PaginationResult<VeterinarianDTO>
            {
                Data = data,
                TotalRowCount = totalRowCount
            };
        }
    }
}
