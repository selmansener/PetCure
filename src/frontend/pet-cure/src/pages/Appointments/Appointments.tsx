import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Appointments() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return <Grid container spacing={2}>
        <Grid display="flex" justifyContent="flex-end" size={12}>
            <Button onClick={() => navigate("/appointments/create")}>
                {t("Pages.Appointments.NewAppointment")}
            </Button>
        </Grid>
    </Grid>
}