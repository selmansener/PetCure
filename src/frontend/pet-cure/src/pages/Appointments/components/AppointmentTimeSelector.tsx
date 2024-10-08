import { StaticTimePicker, TimeView } from "@mui/x-date-pickers";
import { useGetApiAppointmentsGetBookedDatesByVetIdQuery, VeterinarianDto } from "../../../store/api";
import { isSameMinute } from "date-fns";

export interface AppointmentTimeSelectorProps {
    selectedVet?: VeterinarianDto;
    selectedDate?: Date;
}

export function AppointmentTimeSelector(props: AppointmentTimeSelectorProps) {
    const { selectedVet, selectedDate } = props;
    const {
        data: bookedDates,
        isError: isErrorBookedDates,
        isLoading: isLoadingBookedDates,
        isFetching: isFetchingBookedDates
    } = useGetApiAppointmentsGetBookedDatesByVetIdQuery({
        vetId: selectedVet?.id ?? 0
    });

    const isBusy = isLoadingBookedDates || isFetchingBookedDates;

    const shouldDisableTime = (date: Date, view: TimeView) => {
        // TODO: handle the fucking time zone issue
        return bookedDates?.appointmentDates?.some(appointmentDate => isSameMinute(appointmentDate, date)) ?? false;
    }

    return <StaticTimePicker
        disabled={isBusy || !selectedVet || !selectedDate}
        ampm={false}
        disablePast
        minutesStep={10}
        orientation="landscape"
        shouldDisableTime={shouldDisableTime}
    />
}