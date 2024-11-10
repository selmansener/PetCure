import { Box, Button, Grid2 as Grid, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Header } from "./Header";
import ReplyIcon from '@mui/icons-material/Reply';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (

        <Box component="main" sx={{
            bgcolor: 'secondary.transparent'
        }}>
            <Grid container alignItems="center" spacing={2}>
                <Header />
                <Grid size={6} >
                    <img src="../../not-found.jpeg" style={{
                        width: "100%"
                    }} />
                </Grid>
                <Grid textAlign="center" size={6}>
                    <Typography variant="h3" mb={4}>
                        {t("Pages.NotFound.Title")}
                    </Typography>
                    <Box>
                        <Button sx={{
                            mr: 1
                        }} variant="contained"
                            startIcon={<ReplyIcon />}
                            onClick={() => navigate(-1)}>
                            {t("Pages.NotFound.GoBack")}
                        </Button>
                        <Button sx={{
                            ml: 1
                        }} variant="contained"
                            startIcon={<HomeIcon />}
                            onClick={() => navigate("/")}>
                            {t("Pages.NotFound.GoToHome")}
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}