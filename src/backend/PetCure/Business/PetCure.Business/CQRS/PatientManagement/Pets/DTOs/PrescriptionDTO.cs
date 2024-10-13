using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PetCure.Business.CQRS.PatientManagement.Pets.DTOs
{
    public class PrescriptionDTO
    {
        public int Id { get; set; }

        public DateTime DateIssued { get; set; }

        public string MedicationName { get; set; }

        public string Dosage { get; set; }

        public string Duration { get; set; }

        public string? Notes { get; set; }
    }
}
