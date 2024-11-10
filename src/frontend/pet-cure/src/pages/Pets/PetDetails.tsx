import { Button, Divider, Grid2 as Grid, IconButton, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useParams } from "react-router-dom";
import { useGetApiPetsByIdQuery } from "../../store/api";
import dayjs from "dayjs";
import { useEffect, useRef } from "react";

export default function PetDetails() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { id } = useParams();
    const { data, isLoading, isFetching, isError } = useGetApiPetsByIdQuery({
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
                    {t("Pages.PetDetails.Title", {
                        petName: data?.name
                    })}
                </Typography>
            </Grid>
            <Grid size={6} display="flex" justifyContent="flex-end">
                <Button variant="outlined" onClick={() => navigate(`/pets/${data?.id}/update`)}>
                    {t("Generic.Forms.Update")}
                </Button>
                <IconButton onClick={() => navigate("/pets")} sx={{
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
                    {t("Pages.PetDetails.MicroChipId")}
                </Typography>
                <Typography>
                    {data?.microChipId}
                </Typography>
            </Grid>
            <Grid size={4}>
                <Typography>
                    {t("Pages.PetDetails.Name")}
                </Typography>
                <Typography>
                    {data?.name}
                </Typography>
            </Grid>
            <Grid size={4}>
                <Typography>
                    {t("Pages.PetDetails.Species")}
                </Typography>
                <Typography>
                    {data?.species}
                </Typography>
            </Grid>
            <Grid size={4}>
                <Typography>
                    {t("Pages.PetDetails.Breed")}
                </Typography>
                <Typography>
                    {data?.breed}
                </Typography>
            </Grid>
            <Grid size={4}>
                <Typography>
                    {t("Pages.PetDetails.Gender")}
                </Typography>
                <Typography>
                    {data?.gender}
                </Typography>
            </Grid>
            <Grid size={4}>
                <Typography>
                    {t("Pages.PetDetails.DateOfBirth")}
                </Typography>
                <Typography>
                    {dayjs(data?.dateOfBirth).format("DD.MM.YYYY")}
                </Typography>
            </Grid>
            <Grid size={4}>
                <Typography>
                    {t("Pages.PetDetails.Weight")}
                </Typography>
                <Typography>
                    {data?.weight}
                </Typography>
            </Grid>
            <Grid size={4}>
                <Typography>
                    {t("Pages.PetDetails.Color")}
                </Typography>
                <Typography>
                    {data?.color}
                </Typography>
            </Grid>
            <Grid size={4}>
                <Typography>
                    {t("Pages.PetDetails.MedicalHistory")}
                </Typography>
                <Typography>
                    {data?.medicalHistory}
                </Typography>
            </Grid>
            <Grid size={4}>
                <Typography>
                    {t("Pages.PetDetails.Owner")}
                </Typography>
                <Typography>
                    {`${data?.firstName} ${data?.lastName}`}
                </Typography>
            </Grid>
            <Grid size={4}>
                <Typography>
                    {t("Pages.PetDetails.OwnerPhone")}
                </Typography>
                <Typography>
                    {data?.ownerPhone}
                </Typography>
            </Grid>
            <Grid size={4}>
                <Typography>
                    {t("Pages.PetDetails.OwnerPhone")}
                </Typography>
                <Typography>
                    {data?.ownerPhone}
                </Typography>
            </Grid>
            <Grid size={4}>
                <Typography>
                    {t("Pages.PetDetails.LastAppointmentDate")}
                </Typography>
                <Typography>
                    {dayjs(data?.lastAppointmentDate).format("DD.MM.YYYY HH:mm")}
                </Typography>
            </Grid>
        </Grid>
    </Paper>
}