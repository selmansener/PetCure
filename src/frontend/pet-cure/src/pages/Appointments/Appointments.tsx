import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTranslation } from "react-i18next";

export default function Appointments() {
    const { t } = useTranslation();

    return <Grid container spacing={2}>
        <Grid display="flex" justifyContent="flex-end" size={12}>
            <Button>
                {t("Pages.Appointments.NewAppointment")}
            </Button>
        </Grid>
    </Grid>
}