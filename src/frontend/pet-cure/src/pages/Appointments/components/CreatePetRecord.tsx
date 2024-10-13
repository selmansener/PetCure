import { Button, Divider, FormControl, Grid2 as Grid, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export function CreatePetRecord() {
    const { t } = useTranslation();

    return <Grid container spacing={2}>
        <Grid size={12}>
            <Typography variant="subtitle1">
                {t("Pages.CreateAppointment.CreatePetRecord.PetInfo")}
            </Typography>
        </Grid>
        <Grid size={3}>
            <FormControl fullWidth>
                <TextField label={t("Pages.CreateAppointment.CreatePetRecord.PetInfo")} />
            </FormControl>
        </Grid>
        <Grid size={3}>
            <FormControl fullWidth>
                <TextField label={t("Pages.CreateAppointment.CreatePetRecord.Species")} />
            </FormControl>
        </Grid>
        <Grid size={3}>
            <FormControl fullWidth>
                <TextField label={t("Pages.CreateAppointment.CreatePetRecord.Breed")} />
            </FormControl>
        </Grid>
        <Grid size={3}>
            <FormControl fullWidth>
                <TextField label={t("Pages.CreateAppointment.CreatePetRecord.Gender")} />
            </FormControl>
        </Grid>
        <Grid size={3}>
            <FormControl fullWidth>
                <TextField label={t("Pages.CreateAppointment.CreatePetRecord.DateOfBirth")} />
            </FormControl>
        </Grid>
        <Grid size={3}>
            <FormControl fullWidth>
                <TextField label={t("Pages.CreateAppointment.CreatePetRecord.Weight")} />
            </FormControl>
        </Grid>
        <Grid size={3}>
            <FormControl fullWidth>
                <TextField label={t("Pages.CreateAppointment.CreatePetRecord.Color")} />
            </FormControl>
        </Grid>
        <Grid size={3}>
            <FormControl fullWidth>
                <TextField label={t("Pages.CreateAppointment.CreatePetRecord.MicroChipId")} />
            </FormControl>
        </Grid>
        <Grid size={3}>
            <FormControl fullWidth>
                <TextField label={t("Pages.CreateAppointment.CreatePetRecord.MedicalHistory")} />
            </FormControl>
        </Grid>
        <Grid size={12}>
            <Divider />
        </Grid>
        <Grid size={12}>
            <Typography variant="subtitle1">
                {t("Pages.CreateAppointment.CreatePetRecord.OwnerInfo")}
            </Typography>
        </Grid>
        <Grid size={3}>
            <FormControl fullWidth>
                <TextField label={t("Pages.CreateAppointment.CreatePetRecord.FirstName")} />
            </FormControl>
        </Grid>
        <Grid size={3}>
            <FormControl fullWidth>
                <TextField label={t("Pages.CreateAppointment.CreatePetRecord.LastName")} />
            </FormControl>
        </Grid>
        <Grid size={3}>
            <FormControl fullWidth>
                <TextField label={t("Pages.CreateAppointment.CreatePetRecord.Phone")} />
            </FormControl>
        </Grid>
        <Grid size={3}>
            <FormControl fullWidth>
                <TextField label={t("Pages.CreateAppointment.CreatePetRecord.Email")} />
            </FormControl>
        </Grid>
        <Grid size={3}>
            <FormControl fullWidth>
                <TextField label={t("Pages.CreateAppointment.CreatePetRecord.Address")} />
            </FormControl>
        </Grid>
        <Grid size={3}>
            <FormControl fullWidth>
                <TextField label={t("Pages.CreateAppointment.CreatePetRecord.City")} />
            </FormControl>
        </Grid>
        <Grid size={3}>
            <FormControl fullWidth>
                <TextField label={t("Pages.CreateAppointment.CreatePetRecord.State")} />
            </FormControl>
        </Grid>
        <Grid size={3}>
            <FormControl fullWidth>
                <TextField label={t("Pages.CreateAppointment.CreatePetRecord.ZipCode")} />
            </FormControl>
        </Grid>
        <Grid size={3}>
            <FormControl fullWidth>
                <TextField label={t("Pages.CreateAppointment.CreatePetRecord.EmergencyContact")} />
            </FormControl>
        </Grid>
        <Grid size={12}>
            <Divider />
        </Grid>
        <Grid size={12}>
            <Typography variant="subtitle1">
                {t("Pages.CreateAppointment.CreatePetRecord.GeneralInfo")}
            </Typography>
        </Grid>
        <Grid size={6}>
            <FormControl fullWidth>
                <TextField multiline minRows={4} label={t("Pages.CreateAppointment.CreatePetRecord.Reason")} />
            </FormControl>
        </Grid>
        <Grid size={6}>
            <FormControl fullWidth>
                <TextField multiline minRows={4} label={t("Pages.CreateAppointment.CreatePetRecord.Notes")} />
            </FormControl>
        </Grid>
    </Grid>
}