import { Grid2 as Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export function ErrorPage() {
    const { t } = useTranslation();

    return <Grid container spacing={2} text-align="center">
        <Grid size={4}>
            <img src="../../tech-buddy.png" style={{
                width: "100%"
            }} />
        </Grid>
        <Grid size={8} sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",

        }}>
            <Typography variant="h2">
                {t("Pages.ErrorPage.Title")}
            </Typography>
            <Typography variant="h4">
                {t("Pages.ErrorPage.Subtitle")}
            </Typography>
            <ErrorOutlineIcon color="error" sx={{
                fontSize:"17.5em"
            }} />
        </Grid>
    </Grid >
}