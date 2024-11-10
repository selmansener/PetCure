import { Button, Grid2 as Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Outlet, useNavigate } from "react-router-dom";
import { PetsGrid } from "./components/PetsGrid";

export default function Pets() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return <Grid container spacing={2}>
        <Grid size={12}>
            <Typography variant="h4">
                {t("Pages.Pets.Title")}
            </Typography>
        </Grid>
        <Grid display="flex" justifyContent="flex-end" size={12}>
            <Button onClick={() => navigate("/pets/create")}>
                {t("Pages.Pets.NewPet")}
            </Button>
        </Grid>
        <Grid size={12}>
            <PetsGrid />
        </Grid>
        <Grid size={12}>
            <Outlet />
        </Grid>
    </Grid>
}