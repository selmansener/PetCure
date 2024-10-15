using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PetCure.Business.CQRS.PatientManagement.Dashboard.DTOs
{
    public class ApptsCountByDateRangeDTO
    {
        public int TotalCount { get; set; }

        public decimal ChangeAsPercent { get; set; }
    }
}
