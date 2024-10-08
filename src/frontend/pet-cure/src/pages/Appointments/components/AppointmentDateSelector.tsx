import { DateCalendar, StaticDatePicker } from "@mui/x-date-pickers";
import { useGetApiAppointmentsGetBookedDatesByVetIdQuery, VeterinarianDto } from "../../../store/api";
import { isSameDay } from "date-fns";
import { tz } from "@date-fns/tz";
import { useEffect, useState } from "react";

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

export interface AppointmentDateSelectorProps {
    selectedVet?: VeterinarianDto;
    onSelect: (selected: Date) => void;
}

export function AppointmentDateSelector(props: AppointmentDateSelectorProps) {
    const { selectedVet, onSelect } = props;
    const {
        data: bookedDates,
        isError: isErrorBookedDates,
        isLoading: isLoadingBookedDates,
        isFetching: isFetchingBookedDates
    } = useGetApiAppointmentsGetBookedDatesByVetIdQuery({
        vetId: selectedVet?.id ?? 0
    });
    const isBusy = isLoadingBookedDates || isFetchingBookedDates;

    const [value, setValue] = useState<Date | null | undefined>(null);
    const [appointmentDates, setAppointmentDates] = useState<Date[] | undefined>();

    const handleChange = (newValue: Date) => {
        setValue(newValue);
        onSelect(newValue);
    }

    const shouldDisableDate = (date: Date) => {
        if (appointmentDates) {
            const tenMinutePeriods = splitIntoTenMinutePeriods(date);

            const filteredAppointmentDates = appointmentDates.filter(appointmentDate => appointmentDate.toDateString() === date.toDateString());

            if (filteredAppointmentDates) {
                // TODO: same shit here! god damn time zone issue and remember that DO NOT USE date-fns ever again
                return tenMinutePeriods.every(period => filteredAppointmentDates.some(appointmentDate => isSameDay(appointmentDate, period, {
                    in: tz("Etc/UTC")
                })));
            }

            return false;
        }

        return false;
    }

    return <DateCalendar
        disabled={isBusy || !selectedVet}
        value={value}
        onChange={handleChange}
        //shouldDisableDate={shouldDisableDate}
    />
}