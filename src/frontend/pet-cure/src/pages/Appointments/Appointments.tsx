import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { AppointsmentsGrid } from "./components/AppointmentsGrid";

export default function Appointments() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return <Grid container spacing={2}>
        <Grid size={12}>
            <Typography variant="h4">
                {t("Pages.Appointments.Title")}
            </Typography>
        </Grid>
        <Grid display="flex" justifyContent="flex-end" size={12}>
            <Button onClick={() => navigate("/appointments/create")}>
                {t("Pages.Appointments.NewAppointment")}
            </Button>
        </Grid>
        <Grid size={12}>
            <AppointsmentsGrid />
        </Grid>
    </Grid>
}