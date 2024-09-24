import { Grid2, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useGetApiVeterinariansByIdQuery } from "../../store/api";

export default function VeterinarianDetails() {
    const { t } = useTranslation();
    const { id } = useParams();
    const { data, isLoading, isFetching, isError } = useGetApiVeterinariansByIdQuery({
        id: parseInt(id ?? "0")
    });
    return <Grid2 container spacing={2}>
        <Grid2 size={4}>
            <Typography>
                {t("Pages.VeterinarianDetails.FirstName")}
            </Typography>
            <Typography>
                {data?.firstName}
            </Typography>
        </Grid2>
        <Grid2 size={4}>
            <Typography>
                {t("Pages.VeterinarianDetails.LastName")}
            </Typography>
            <Typography>
                {data?.lastName}
            </Typography>
        </Grid2>
        <Grid2 size={4}>
            <Typography>
                {t("Pages.VeterinarianDetails.Phone")}
            </Typography>
            <Typography>
                {data?.phone}
            </Typography>
        </Grid2>
        <Grid2 size={4}>
            <Typography>
                {t("Pages.VeterinarianDetails.Email")}
            </Typography>
            <Typography>
                {data?.email}
            </Typography>
        </Grid2>
        <Grid2 size={4}>
            <Typography>
                {t("Pages.VeterinarianDetails.Specialization")}
            </Typography>
            <Typography>
                {data?.specialization}
            </Typography>
        </Grid2>
        <Grid2 size={4}>
            <Typography>
                {t("Pages.VeterinarianDetails.YearsOfExperience")}
            </Typography>
            <Typography>
                {data?.yearsOfExperience}
            </Typography>
        </Grid2>
        <Grid2 size={4}>
            <Typography>
                {t("Pages.VeterinarianDetails.CurrentAppointmentCount")}
            </Typography>
            <Typography>
                {data?.currentAppointmentCount}
            </Typography>
        </Grid2>
    </Grid2>
}