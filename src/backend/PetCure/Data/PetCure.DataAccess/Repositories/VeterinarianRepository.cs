using Microsoft.EntityFrameworkCore;

using PetCure.Domains.PatientManagement;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PetCure.DataAccess.Repositories
{
    public interface IVeterinarianRepository : IBaseRepository<Veterinarian>
    {
        Task CheckApptConflict(int vetId, DateTime apptDate, CancellationToken cancellationToken);
    }

    internal class VeterinarianRepository : BaseRepository<Veterinarian>, IVeterinarianRepository
    {
        public VeterinarianRepository(PatientManagementDbContext baseDb) : base(baseDb)
        {
        }

        public async Task CheckApptConflict(int vetId, DateTime apptDate, CancellationToken cancellationToken)
        {
            string format = "yyyy-MM-ddTHH:mm";

            var conflicts = await _baseDb.Appointments.AnyAsync(appt => appt.VetId == vetId 
                && EF.Functions.SmallDateTimeFromParts(
                    appt.AppointmentDate.Year,
                    appt.AppointmentDate.Month,
                    appt.AppointmentDate.Day,
                    appt.AppointmentDate.Hour,
                    appt.AppointmentDate.Minute) == EF.Functions.SmallDateTimeFromParts(
                        apptDate.Year,
                        apptDate.Month,
                        apptDate.Day,
                        apptDate.Hour,
                        apptDate.Minute));

            if (conflicts)
            {
                throw new Exception($"Vet (Id:{vetId}) has another appt at this period {apptDate.ToString(format)}");
            }
        }
    }
}
