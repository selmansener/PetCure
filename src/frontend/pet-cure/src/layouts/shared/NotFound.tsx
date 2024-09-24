import { Box, Button, Grid, Grid2, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { config } from "../../config";
import { Header } from "./Header";

export default function NotFound() {
    const { t } = useTranslation();

    return (

        <Box component="main" sx={{
            bgcolor: 'secondary.transparent'
        }}>
            <Grid2 container alignItems="center" spacing={2}>
                <Header />
                <Grid2 textAlign="center" mt={15} size="grow">
                    <Typography variant="h3">
                        {t("NotFound.Title")}
                    </Typography>
                </Grid2>
            </Grid2>
        </Box>
    )
}