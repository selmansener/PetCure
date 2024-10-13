import { Divider, Grid2 as Grid, Typography, useTheme } from "@mui/material";
import { useGetApiPetsByIdExistingRecordsQuery } from "../../../store/api";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import React from "react";

export interface ExistingPetRecordDetailsProps {
    id: number;
}

export function ExistingPetRecordDetails(props: ExistingPetRecordDetailsProps) {
    const theme = useTheme();
    const { t } = useTranslation();
    const { id } = props;
    const { data, isLoading, isFetching, isError } = useGetApiPetsByIdExistingRecordsQuery({
        id: id
    });

    return <Grid container spacing={2}>
        <Grid size={12}>
            <Typography variant="subtitle1">
                {t("Pages.CreateAppointment.ExistingPetRecordDetails.PetInfo")}
            </Typography>
        </Grid>
        <Grid size={2}>
            <Typography>
                {t("Pages.CreateAppointment.ExistingPetRecordDetails.Name")}
            </Typography>
            <Typography>
                {data?.name}
            </Typography>
        </Grid>
        <Grid size={2}>
            <Typography>
                {t("Pages.CreateAppointment.ExistingPetRecordDetails.Species")}
            </Typography>
            <Typography>
                {data?.species}
            </Typography>
        </Grid>
        <Grid size={2}>
            <Typography>
                {t("Pages.CreateAppointment.ExistingPetRecordDetails.Breed")}
            </Typography>
            <Typography>
                {data?.breed}
            </Typography>
        </Grid>
        <Grid size={2}>
            <Typography>
                {t("Pages.CreateAppointment.ExistingPetRecordDetails.Gender")}
            </Typography>
            <Typography>
                {data?.gender}
            </Typography>
        </Grid>
        <Grid size={2}>
            <Typography>
                {t("Pages.CreateAppointment.ExistingPetRecordDetails.DateOfBirth")}
            </Typography>
            <Typography>
                {dayjs(data?.dateOfBirth).format("DD-MM-YYYY")}
            </Typography>
        </Grid>
        <Grid size={2}>
            <Typography>
                {t("Pages.CreateAppointment.ExistingPetRecordDetails.Weight")}
            </Typography>
            <Typography>
                {data?.weight}
            </Typography>
        </Grid>
        <Grid size={2}>
            <Typography>
                {t("Pages.CreateAppointment.ExistingPetRecordDetails.Color")}
            </Typography>
            <Typography>
                {data?.color}
            </Typography>
        </Grid>
        <Grid size={2}>
            <Typography>
                {t("Pages.CreateAppointment.ExistingPetRecordDetails.MicroChipId")}
            </Typography>
            <Typography>
                {data?.microChipId}
            </Typography>
        </Grid>
        <Grid size={12}>
            <Divider />
        </Grid>
        <Grid size={12}>
            <Typography variant="subtitle1">
                {t("Pages.CreateAppointment.ExistingPetRecordDetails.OwnerInfo")}
            </Typography>
        </Grid>
        <Grid size={2}>
            <Typography>
                {t("Pages.CreateAppointment.ExistingPetRecordDetails.FirstName")}
            </Typography>
            <Typography>
                {data?.ownerInfo?.firstName}
            </Typography>
        </Grid>
        <Grid size={2}>
            <Typography>
                {t("Pages.CreateAppointment.ExistingPetRecordDetails.LastName")}
            </Typography>
            <Typography>
                {data?.ownerInfo?.lastName}
            </Typography>
        </Grid>
        <Grid size={2}>
            <Typography>
                {t("Pages.CreateAppointment.ExistingPetRecordDetails.Phone")}
            </Typography>
            <Typography>
                {data?.ownerInfo?.phone}
            </Typography>
        </Grid>
        <Grid size={2}>
            <Typography>
                {t("Pages.CreateAppointment.ExistingPetRecordDetails.Email")}
            </Typography>
            <Typography>
                {data?.ownerInfo?.email}
            </Typography>
        </Grid>
        <Grid size={2}>
            <Typography>
                {t("Pages.CreateAppointment.ExistingPetRecordDetails.Address")}
            </Typography>
            <Typography>
                {data?.ownerInfo?.address}
            </Typography>
        </Grid>
        <Grid size={2}>
            <Typography>
                {t("Pages.CreateAppointment.ExistingPetRecordDetails.City")}
            </Typography>
            <Typography>
                {data?.ownerInfo?.city}
            </Typography>
        </Grid>
        <Grid size={2}>
            <Typography>
                {t("Pages.CreateAppointment.ExistingPetRecordDetails.State")}
            </Typography>
            <Typography>
                {data?.ownerInfo?.state}
            </Typography>
        </Grid>
        <Grid size={2}>
            <Typography>
                {t("Pages.CreateAppointment.ExistingPetRecordDetails.ZipCode")}
            </Typography>
            <Typography>
                {data?.ownerInfo?.zipCode}
            </Typography>
        </Grid>
        <Grid size={2}>
            <Typography>
                {t("Pages.CreateAppointment.ExistingPetRecordDetails.EmergencyContact")}
            </Typography>
            <Typography>
                {data?.ownerInfo?.emergencyContact}
            </Typography>
        </Grid>
        {data?.medicalRecords && data?.medicalRecords.length > 0 &&
            <React.Fragment>
                <Grid size={12}>
                    <Divider />
                </Grid>
                <Grid size={12}>
                    <Typography variant="subtitle1">
                        {t("Pages.CreateAppointment.ExistingPetRecordDetails.PastMedicalRecords")}
                    </Typography>
                </Grid>
            </React.Fragment>}
        {data?.medicalRecords?.map((record) =>
            <Grid size={12} container spacing={2} key={record.id} sx={{
                border: `2px solid ${theme.palette.divider}`,
                borderRadius: "4px",
                p: 2
            }}>
                <Grid size={12}>
                    <Typography variant="subtitle2">
                        {t("Pages.CreateAppointment.ExistingPetRecordDetails.VisitDate", {
                            visitDate: dayjs(record.visitDate).format("DD/MM/YYYY HH:mm")
                        })}
                    </Typography>
                </Grid>
                <Grid size={2}>
                    <Typography>
                        {t("Pages.CreateAppointment.ExistingPetRecordDetails.Symptoms")}
                    </Typography>
                    <Typography>
                        {record.symptoms}
                    </Typography>
                </Grid>
                <Grid size={2}>
                    <Typography>
                        {t("Pages.CreateAppointment.ExistingPetRecordDetails.Diagnosis")}
                    </Typography>
                    <Typography>
                        {record.diagnosis ?? "-"}
                    </Typography>
                </Grid>
                <Grid size={2}>
                    <Typography>
                        {t("Pages.CreateAppointment.ExistingPetRecordDetails.Treatment")}
                    </Typography>
                    <Typography>
                        {record.treatment ?? "-"}
                    </Typography>
                </Grid>
                <Grid size={2}>
                    <Typography>
                        {t("Pages.CreateAppointment.ExistingPetRecordDetails.Medication")}
                    </Typography>
                    <Typography>
                        {record.medication ?? "-"}
                    </Typography>
                </Grid>
                <Grid size={2}>
                    <Typography>
                        {t("Pages.CreateAppointment.ExistingPetRecordDetails.FollowUpDate")}
                    </Typography>
                    <Typography>
                        {record.followUpDate ? dayjs(record.followUpDate).format("DD/MM/YYYY HH:mm") : "-"}
                    </Typography>
                </Grid>
                <Grid size={2}>
                    <Typography>
                        {t("Pages.CreateAppointment.ExistingPetRecordDetails.Notes")}
                    </Typography>
                    <Typography>
                        {record.notes ?? "-"}
                    </Typography>
                </Grid>
            </Grid>
        )}

        {data?.prescriptions && data?.prescriptions.length > 0 &&
            <React.Fragment>
                <Grid size={12}>
                    <Divider />
                </Grid>
                <Grid size={12}>
                    <Typography variant="subtitle1">
                        {t("Pages.CreateAppointment.ExistingPetRecordDetails.Prescriptions")}
                    </Typography>
                </Grid>
            </React.Fragment>}
        {data?.prescriptions && data?.prescriptions.length > 0 && data?.prescriptions.map(prescription =>
            <Grid size={12} container spacing={2} key={prescription.id} sx={{
                border: `2px solid ${theme.palette.divider}`,
                borderRadius: "4px",
                p: 2
            }}>
                <Grid size={12}>
                    <Typography variant="subtitle2">
                        {t("Pages.CreateAppointment.ExistingPetRecordDetails.DateIssued", {
                            dateIssued: dayjs(prescription.dateIssued).format("DD/MM/YYYY HH:mm")
                        })}
                    </Typography>
                </Grid>
                <Grid size={2}>
                    <Typography>
                        {t("Pages.CreateAppointment.ExistingPetRecordDetails.MedicationName")}
                    </Typography>
                    <Typography>
                        {prescription.medicationName}
                    </Typography>
                </Grid>
                <Grid size={2}>
                    <Typography>
                        {t("Pages.CreateAppointment.ExistingPetRecordDetails.Dosage")}
                    </Typography>
                    <Typography>
                        {prescription.dosage}
                    </Typography>
                </Grid>
                <Grid size={2}>
                    <Typography>
                        {t("Pages.CreateAppointment.ExistingPetRecordDetails.Duration")}
                    </Typography>
                    <Typography>
                        {prescription.duration}
                    </Typography>
                </Grid>
                <Grid size={2}>
                    <Typography>
                        {t("Pages.CreateAppointment.ExistingPetRecordDetails.Notes")}
                    </Typography>
                    <Typography>
                        {prescription.notes ?? "-"}
                    </Typography>
                </Grid>
            </Grid>
        )}
    </Grid>
}