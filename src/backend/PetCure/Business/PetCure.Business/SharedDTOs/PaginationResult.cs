namespace PetCure.Business.SharedDTOs
{
    public class PaginationResult<TData>
        where TData : class
    {
        public IEnumerable<TData> Data { get; set; }

        public int TotalRowCount { get; set; }
    }
}
