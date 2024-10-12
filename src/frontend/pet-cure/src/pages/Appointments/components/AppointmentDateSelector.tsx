import { DateCalendar, DatePicker, DayCalendarSkeleton, MobileDatePicker, StaticDatePicker } from "@mui/x-date-pickers";
import { useGetApiAppointmentsGetBookedDatesByVetIdQuery, VeterinarianDto } from "../../../store/api";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { FormControl, FormLabel, InputLabel } from "@mui/material";
import { useTranslation } from "react-i18next";

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
    vet?: VeterinarianDto;
    onSelect: (selected: Date) => void;
}

export function AppointmentDateSelector(props: AppointmentDateSelectorProps) {
    const { t } = useTranslation();
    const { vet, onSelect } = props;
    const {
        data: bookedDates,
        isError: isErrorBookedDates,
        isLoading: isLoadingBookedDates,
        isFetching: isFetchingBookedDates
    } = useGetApiAppointmentsGetBookedDatesByVetIdQuery({
        vetId: vet?.id ?? 0
    });
    const isBusy = isLoadingBookedDates || isFetchingBookedDates;

    const [value, setValue] = useState<Date | null | undefined>(null);

    const handleChange = (newValue: Date | null) => {
        if (newValue) {
            setValue(newValue);
            onSelect(newValue);
        }
    }

    const shouldDisableDate = (date: Date) => {
        if (bookedDates?.appointmentDates) {
            const tenMinutePeriods = splitIntoTenMinutePeriods(date);

            const filteredAppointmentDates = bookedDates.appointmentDates?.filter(appointmentDate => dayjs(appointmentDate).format("YYYY-MM-DD") === dayjs(date).utc().format("YYYY-MM-DD"));

            if (filteredAppointmentDates && filteredAppointmentDates.length > 0) {
                return tenMinutePeriods.every(period => filteredAppointmentDates.some(appointmentDate => {
                    return dayjs(appointmentDate).format("YYYY-MM-DDTHH:mm") === dayjs(period).format("YYYY-MM-DDTHH:mm");
                }));
            }

            return false;
        }

        return false;
    }

    return <MobileDatePicker
        label={t("Pages.CreateAppointment.AppointmentDate")}
        loading={isBusy}
        disablePast
        reduceAnimations
        disabled={isBusy || !vet}
        renderLoading={() => <DayCalendarSkeleton />}
        value={value}
        onChange={handleChange}
        shouldDisableDate={shouldDisableDate}
    />
}