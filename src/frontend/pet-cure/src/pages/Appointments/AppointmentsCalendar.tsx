import { Backdrop, Box, CircularProgress, Grid2 as Grid, LinearProgress, Paper, Typography } from "@mui/material";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useTranslation } from "react-i18next";
import { api, AppointmentDto, useGetApiAppointmentsGetByDateRangeQuery } from "../../store/api";
import { useAppDispatch } from "../../store/hooks";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Outlet, useNavigate } from "react-router-dom";
import Loading from "../../components/loading/loading";

type DateRange = {
    from: Date;
    to: Date;
}

type Response = {
    data: AppointmentDto[] | undefined,
    isError: boolean | undefined;
}

export default function AppointmentsCalendar() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [currentRange, setCurrentRange] = useState<DateRange | undefined>();
    const [response, setResponse] = useState<Response | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (currentRange) {
            setIsLoading(true);
            dispatch(api.endpoints.getApiAppointmentsGetByDateRange.initiate({
                from: dayjs(currentRange.from).toISOString(),
                to: dayjs(currentRange.to).toISOString()
            })).then(resp => {
                setIsLoading(false);
                if (resp) {
                    setResponse({
                        data: resp.data,
                        isError: resp.isError,
                    });
                }
            }).catch(err => {
                setIsLoading(false);
                throw new Error("Failed to fetch");
            });
        }
    }, [currentRange]);

    if (response?.isError) {
        throw new Error("Failed to fetch");
    }

    const handleDateRangeChange = (e: any) => {
        setCurrentRange({
            from: e.start,
            to: e.end
        });
    }

    const handleApptClick = (e: any) => {
        if (e?.event?.id) {
            navigate(`/calendar/${e.event.id}/appointment`);
        }
    }

    return <Grid container spacing={2}>
        <Grid size={12}>
            <Typography variant="h4">
                {t("Pages.AppointmentsCalendar.Title")}
            </Typography>
        </Grid>
        <Grid size={12}>
            <Paper sx={{
                p: 2
            }}>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    navLinks
                    datesSet={handleDateRangeChange}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek'
                    }}
                    eventClick={handleApptClick}
                    events={response?.data?.map(appt => {
                        return {
                            title: appt?.reason ?? "",
                            date: appt?.appointmentDate ?? "",
                            id: appt?.id?.toString()
                        }
                    })} />
            </Paper>
        </Grid>
        <Grid size={12}>
            <Outlet />
        </Grid>
        {isLoading && <Loading />}
    </Grid>
}