using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PetCure.Business.CQRS.PatientManagement.Pets.DTOs
{
    public class MedicalRecordDTO
    {
        public int Id { get; set; }

        public DateTime VisitDate { get; set; }

        public string Symptoms { get; set; }

        public string? Diagnosis { get; set; }

        public string? Treatment { get; set; }

        public string? Medication { get; set; }

        public DateTime? FollowUpDate { get; set; }

        public string? Notes { get; set; }
    }
}
