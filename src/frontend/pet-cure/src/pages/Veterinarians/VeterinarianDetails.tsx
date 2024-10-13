import { Button, Divider, Grid2 as Grid, IconButton,  Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { useGetApiVeterinariansByIdQuery } from "../../store/api";
import { useEffect, useRef } from "react";
import CloseIcon from '@mui/icons-material/Close';

export default function VeterinarianDetails() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { id } = useParams();
    const { data, isLoading, isFetching, isError } = useGetApiVeterinariansByIdQuery({
        id: parseInt(id ?? "0")
    });

    useEffect(() => {
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [id]);

    return <Paper sx={{
        p: 2
    }}>
        <Grid container spacing={2} ref={targetRef}>
            <Grid size={6}>
                <Typography variant="h4">
                    {t("Pages.VeterinarianDetails.Title", {
                        vetName: `${data?.firstName} ${data?.lastName}`
                    })}
                </Typography>
            </Grid>
            <Grid size={6} display="flex" justifyContent="flex-end">
                <Button variant="outlined" onClick={() => navigate(`/veterinarians/${data?.id}/update`)}>
                    {t("Generic.Forms.Update")}
                </Button>
                <IconButton onClick={() => navigate("/veterinarians")} sx={{
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
                    {t("Pages.VeterinarianDetails.FirstName")}
                </Typography>
                <Typography>
                    {data?.firstName}
                </Typography>
            </Grid>
            <Grid size={4}>
                <Typography>
                    {t("Pages.VeterinarianDetails.LastName")}
                </Typography>
                <Typography>
                    {data?.lastName}
                </Typography>
            </Grid>
            <Grid size={4}>
                <Typography>
                    {t("Pages.VeterinarianDetails.Phone")}
                </Typography>
                <Typography>
                    {data?.phone}
                </Typography>
            </Grid>
            <Grid size={4}>
                <Typography>
                    {t("Pages.VeterinarianDetails.Email")}
                </Typography>
                <Typography>
                    {data?.email}
                </Typography>
            </Grid>
            <Grid size={4}>
                <Typography>
                    {t("Pages.VeterinarianDetails.Specialization")}
                </Typography>
                <Typography>
                    {data?.specialization}
                </Typography>
            </Grid>
            <Grid size={4}>
                <Typography>
                    {t("Pages.VeterinarianDetails.YearsOfExperience")}
                </Typography>
                <Typography>
                    {data?.yearsOfExperience}
                </Typography>
            </Grid>
            <Grid size={4}>
                <Typography>
                    {t("Pages.VeterinarianDetails.CurrentAppointmentCount")}
                </Typography>
                <Typography>
                    {data?.currentAppointmentCount}
                </Typography>
            </Grid>
        </Grid>
    </Paper>
}