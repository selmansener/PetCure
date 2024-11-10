import { Divider, Grid2 as Grid, IconButton, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { useGetApiAppointmentsByIdQuery } from "../../store/api";
import dayjs from "dayjs";
import CloseIcon from '@mui/icons-material/Close';
import React, { useEffect, useRef } from "react";

export default function AppointmentDetails() {
    const { t } = useTranslation();
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, isLoading, isFetching, isError } = useGetApiAppointmentsByIdQuery({
        id: id ? parseInt(id) : 0
    });
    const isBusy = isLoading || isFetching;

    if (isError) {
        throw new Error("Failed to fetch");
    }

    return <Paper sx={{
        p: 2
    }}>
        <Grid container spacing={2}>
            <Grid size={6}>
                <Typography variant="h4">
                    {t("Pages.AppointmentDetails.Title", {
                        apptDate: dayjs(data?.appointmentDate).format("DD/MM/YYYY HH:mm")
                    })}
                </Typography>
            </Grid>
            <Grid size={6} display="flex" justifyContent="flex-end">
                <IconButton onClick={() => navigate(-1)} sx={{
                    ml: 2
                }}>
                    <CloseIcon />
                </IconButton>
            </Grid>
            <Grid size={12}>
                <Divider />
            </Grid>
            <Grid size={4}>
                <Typography>
                    {t("Pages.AppointmentDetails.Reason")}&nbsp;
                    {data?.reason}
                </Typography>
            </Grid>
            <Grid size={4}>
                <Typography>
                    {t("Pages.AppointmentDetails.Status")}&nbsp;
                    {data?.status}
                </Typography>
            </Grid>
            <Grid size={4}>
                <Typography>
                    {t("Pages.AppointmentDetails.CompletedAt")}&nbsp;
                    {data?.completedAt}
                </Typography>
            </Grid>
            <Grid size={12}>
                <Typography>
                    {t("Pages.AppointmentDetails.Notes")}&nbsp;
                    {data?.notes}
                </Typography>
            </Grid>
            <Grid size={12}>
                <Divider />
            </Grid>
            <Grid size={12}>
                <Typography variant="subtitle1">
                    {t("Pages.AppointmentDetails.PetInfoTitle")}
                </Typography>
            </Grid>
        </Grid>
    </Paper>
}