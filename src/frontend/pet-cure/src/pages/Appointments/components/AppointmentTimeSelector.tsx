import { MobileTimePicker, StaticTimePicker, TimeView } from "@mui/x-date-pickers";
import { useGetApiAppointmentsGetBookedDatesByVetIdQuery, VeterinarianDto } from "../../../store/api";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

export interface AppointmentTimeSelectorProps {
    selectedVet?: VeterinarianDto;
    selectedDate?: Date;
    onSelect: (value: Date | null) => void;
}

export function AppointmentTimeSelector(props: AppointmentTimeSelectorProps) {
    const { t } = useTranslation();
    const { selectedVet, selectedDate, onSelect } = props;
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
        return dayjs(selectedDate).utc().format("HH:mm") === dayjs(date).utc().format("HH:mm");
    }

    return <MobileTimePicker
        label={t("Pages.CreateAppointment.AppointmentTime")}
        disabled={isBusy || !selectedVet || !selectedDate}
        ampm={false}
        reduceAnimations
        minTime={dayjs().set("h", 9).toDate()}
        maxTime={dayjs().set("h", 18).toDate()}
        minutesStep={10}
        shouldDisableTime={shouldDisableTime}
        onChange={onSelect}
    />
}