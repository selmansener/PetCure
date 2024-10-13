import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTranslation } from "react-i18next";
import { VeterinariansGrid } from "./components/VeterinariansGrid";
import { Outlet, useNavigate } from "react-router-dom";

export default function Veterinarians() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return <Grid container spacing={2}>
        <Grid size={12}>
            <Typography variant="h4">
                {t("Pages.Veterinarians.Title")}
            </Typography>
        </Grid>
        <Grid display="flex" justifyContent="flex-end" size={12}>
            <Button
                onClick={() => navigate("/veterinarians/create")}>
                {t("Pages.Veterinarians.NewVet")}
            </Button>
        </Grid>
        <Grid size={12}>
            <VeterinariansGrid />
        </Grid>
        <Grid size={12}>
            <Outlet />
        </Grid>
    </Grid>
}