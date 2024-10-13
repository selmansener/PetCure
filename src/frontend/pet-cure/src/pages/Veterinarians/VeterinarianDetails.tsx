import { Button, Divider, Grid2 as Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { useGetApiVeterinariansByIdQuery } from "../../store/api";

export default function VeterinarianDetails() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { id } = useParams();
    const { data, isLoading, isFetching, isError } = useGetApiVeterinariansByIdQuery({
        id: parseInt(id ?? "0")
    });
    return <Grid container spacing={2}>
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
}