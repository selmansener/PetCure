import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTranslation } from "react-i18next";
import { VeterinariansGrid } from "./VeterinariansGrid";
import { useNavigate } from "react-router-dom";

export default function Veterinarians() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return <Grid container spacing={2}>
        <Grid display="flex" justifyContent="flex-end" size={12}>
            <Button
                onClick={() => navigate("/veterinarians/create")}>
                {t("Pages.Veterinarians.NewVet")}
            </Button>
        </Grid>
        <Grid size={12}>
            <VeterinariansGrid />
        </Grid>
    </Grid>
}