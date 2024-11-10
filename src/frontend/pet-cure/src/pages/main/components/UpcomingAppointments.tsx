import { Paper, Typography, Divider, Grid2 as Grid, Skeleton, Box, Link } from "@mui/material";
import dayjs from "dayjs";
import { Trans, useTranslation } from "react-i18next";
import * as emoji from 'node-emoji'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { UpcomingAppointmentDto, useGetApiDashboardUpcomingAppointmentsQuery } from "../../../store/api";
import React from "react";
import { NavLink } from "react-router-dom";

function UpcomingAppointmentItem(props: UpcomingAppointmentDto) {
    const { t } = useTranslation();
    const { id, apptDate, ownerName, phone, reason, species } = props;

    if (!id) {
        return null;
    }

    return <Grid container spacing={2}>
        <Grid size={1}>
            <Typography sx={{
                cursor: "default"
            }} fontSize={48}>
                {emoji.get(species?.toLowerCase()!)}
            </Typography>
        </Grid>
        <Grid size={11} display="flex" alignItems="flex-start" justifyContent={"space-evenly"} flexDirection={"column"}>
            <Typography variant="h5">
                <Link to={`/appointments/${id}`} component={NavLink}>
                    <CalendarMonthIcon fontSize="small" sx={{
                        mr: 2
                    }} />
                    {dayjs(apptDate).format("DD/MM/YYYY HH:mm")}
                </Link>
            </Typography>
            <Typography variant="body2">
                {t("Pages.Dashboard.UpcomingAppt", {
                    ownerName: ownerName,
                    phone: phone,
                    reason: reason
                })}
            </Typography>
        </Grid>
    </Grid>
}

function NoUpcomingAppointments() {
    const { t } = useTranslation();

    return <Box sx={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center"
    }}>
        <img src="tech-buddy.png" style={{
            maxWidth: "380px"
        }} />
        <Typography variant="h3" textAlign={"center"}>
            {t("Pages.Dashboard.NoUpcomingApptTitle")}
        </Typography>
    </Box>
}

function Loading() {
    return <React.Fragment>
        <Grid size={1} sx={{
            pt: 1
        }}>
            <Skeleton variant="rounded" width={"100%"} height={"100%"} />
        </Grid>
        <Grid size={11} container spacing={2} >
            <Grid size={12}>
                <Skeleton />
            </Grid>
            <Grid size={12}>
                <Skeleton variant="rounded" width={"100%"} height={"35px"} />
            </Grid>
        </Grid>
    </React.Fragment>
}

export function UpcomingAppointments() {
    const { t } = useTranslation();
    const { data, isLoading, isFetching } = useGetApiDashboardUpcomingAppointmentsQuery();
    const isBusy = isLoading || isFetching;
    const skeletonArr = [1, 2, 3, 4, 5];

    return <Paper sx={{
        p: 2,
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start"
    }}>
        <Typography>
            {t("Pages.Dashboard.UpcomingApptTitle")}
        </Typography>
        <Divider />
        {isBusy && <Grid container spacing={2}> {skeletonArr.map(i => <Loading key={i} />)}</Grid>}
        {!isBusy && (!data || data.length > 0) && data?.map((upcomingAppt, i) => <UpcomingAppointmentItem key={i} {...upcomingAppt} />)}
        {!isBusy && (!data || data.length === 0) && <NoUpcomingAppointments />}
    </Paper>
}