import { StaticDatePicker } from "@mui/x-date-pickers";
import { useGetApiAppointmentsGetBookedDatesQuery } from "../../../store/api";
import { isSameDay } from "date-fns";
import { tz } from "@date-fns/tz";

function splitIntoTenMinutePeriods(date: Date): Date[] {
    const result: Date[] = [];
    const startOfWorkDay = new Date(date.setHours(9, 0, 0, 0)); // Set to midnight
    const endOfWorkDay = new Date(date.setHours(18, 0, 0, 0)); // Set to the end of the day

    let currentPeriod = new Date(startOfWorkDay);

    // Push 10-minute periods into the array
    while (currentPeriod <= endOfWorkDay) {
        result.push(new Date(currentPeriod)); // Push a copy of the current period
        currentPeriod.setMinutes(currentPeriod.getMinutes() + 10); // Increment by 10 minutes
    }

    return result;
}

export function AppointmentDateSelector() {
    const {
        data: bookedDates,
        isError: isErrorBookedDates,
        isLoading: isLoadingBookedDates,
        isFetching: isFetchingBookedDates
    } = useGetApiAppointmentsGetBookedDatesQuery();
    const isBusy = isLoadingBookedDates || isFetchingBookedDates;

    const shouldDisableDate = (date: Date) => {

        if (bookedDates) {
            const tenMinutePeriods = splitIntoTenMinutePeriods(date);

            const appointmentDates =  bookedDates.map(x => x.appointmentDates)                
                .reduce((acc, appointmentDates) => [
                    ...acc!,
                    ...appointmentDates!
                ], [])?.map(appointmentDate => new Date(appointmentDate))
                .filter(appointmentDate => appointmentDate.toDateString() === date.toDateString());

            if (appointmentDates) {
                return tenMinutePeriods.every(period => appointmentDates.some(appointmentDate =>isSameDay(appointmentDate, period, {
                    in: tz("Etc/UTC")
                })));
            }

            return false;
        }

        return false;
    }
    return <StaticDatePicker
        disabled={isBusy}
        shouldDisableDate={shouldDisableDate}
    />

}