import { Alert, Button, FormControl, Grid2, Snackbar, SnackbarCloseReason, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useGetApiVeterinariansByIdQuery, usePutApiVeterinariansByIdMutation } from "../../store/api";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from 'formik';
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export default function UpdateVeterinarian() {
    const { id } = useParams();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { data: veterinarianInitial, isLoading: isLoadingQuery, isFetching, isError: isErrorQuery } = useGetApiVeterinariansByIdQuery({
        id: parseInt(id ?? "0")
    });

    const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);

    const [UpdateVeterinarian, results] = usePutApiVeterinariansByIdMutation();
    const { isLoading, error, isSuccess, status, isError } = results;

    const requiredField = t("FormValidation.RequiredField");
    const schema = Yup.object({
        firstName: Yup.string().required(requiredField),
        lastName: Yup.string().required(requiredField),
        phone: Yup.string().required(requiredField),
        email: Yup.string().email().required(requiredField),
        yearsOfExperience: Yup.number()
            .min(0, t("FormValidation.MinZero"))
            .nullable(),
    });

    const {
        values: veterinarian,
        handleChange,
        handleBlur,
        touched,
        errors,
        submitForm
    } = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstName: veterinarianInitial?.firstName,
            lastName: veterinarianInitial?.lastName,
            phone: veterinarianInitial?.phone,
            email: veterinarianInitial?.email,
            specialization: veterinarianInitial?.specialization,
            yearsOfExperience: veterinarianInitial?.yearsOfExperience
        },
        validationSchema: schema,
        onSubmit: (values) => {
            UpdateVeterinarian({
                id: parseInt(id ?? "0"),
                updateVeterinarianCommand: {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    phone: values.phone,
                    email: values.email,
                    specialization: values.specialization,
                    yearsOfExperience: values.yearsOfExperience ?? 0
                }
            })
        }
    });

    const handleErrorClose = (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setErrorSnackbarOpen(false);
    };

    useEffect(() => {
        if (isSuccess) {
            navigate("/veterinarians");
        }
    }, [isSuccess]);

    useEffect(() => {
        const errorData = error as FetchBaseQueryError;

        if (errorData) {
            setErrorSnackbarOpen(true);
        }

    }, [isError]);

    return <Grid2 container spacing={2}>
        <Grid2 size={12}>
            <Typography variant="h4">
                {t("Pages.UpdateVeterinarian.Title", {
                    id: veterinarianInitial?.id,
                    vetName: `${veterinarian.firstName} ${veterinarian.lastName}`
                })}
            </Typography>
        </Grid2>
        <Grid2 size={4}>
            <FormControl fullWidth>
                <TextField label={<Typography>{t("Pages.CreateVeterinarian.FirstName")}</Typography>}
                    name="firstName"
                    disabled={isLoading}
                    slotProps={{
                        inputLabel: {
                            shrink: veterinarian?.firstName !== undefined && veterinarian?.firstName !== ""
                        }
                    }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.firstName && errors.firstName}
                    error={touched.firstName && errors.firstName !== undefined}
                    variant="outlined"
                    value={veterinarian?.firstName} />
            </FormControl>
        </Grid2>
        <Grid2 size={4}>
            <FormControl fullWidth>
                <TextField label={<Typography>{t("Pages.CreateVeterinarian.LastName")}</Typography>}
                    name="lastName"
                    disabled={isLoading}
                    slotProps={{
                        inputLabel: {
                            shrink: veterinarian?.lastName !== undefined && veterinarian?.lastName !== ""
                        }
                    }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.lastName && errors.lastName}
                    error={touched.lastName && errors.lastName !== undefined}
                    variant="outlined"
                    value={veterinarian?.lastName} />
            </FormControl>
        </Grid2>
        <Grid2 size={4}>
            <FormControl fullWidth>
                <TextField label={<Typography>{t("Pages.CreateVeterinarian.Phone")}</Typography>}
                    name="phone"
                    disabled={isLoading}
                    slotProps={{
                        inputLabel: {
                            shrink: veterinarian?.phone !== undefined && veterinarian?.phone !== ""
                        }
                    }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.phone && errors.phone}
                    error={touched.phone && errors.phone !== undefined}
                    variant="outlined"
                    value={veterinarian?.phone} />
            </FormControl>
        </Grid2>
        <Grid2 size={4}>
            <FormControl fullWidth>
                <TextField label={<Typography>{t("Pages.CreateVeterinarian.Email")}</Typography>}
                    name="email"
                    disabled={isLoading}
                    slotProps={{
                        inputLabel: {
                            shrink: veterinarian?.email !== undefined && veterinarian?.email !== ""
                        }
                    }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.email && errors.email}
                    error={touched.email && errors.email !== undefined}
                    variant="outlined"
                    value={veterinarian?.email} />
            </FormControl>
        </Grid2>
        <Grid2 size={4}>
            <FormControl fullWidth>
                <TextField label={<Typography>{t("Pages.CreateVeterinarian.Specialization")}</Typography>}
                    name="specialization"
                    disabled={isLoading}
                    slotProps={{
                        inputLabel: {
                            shrink: veterinarian?.specialization !== undefined && veterinarian?.specialization !== ""
                        }
                    }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.specialization && errors.specialization}
                    error={touched.specialization && errors.specialization !== undefined}
                    variant="outlined"
                    value={veterinarian?.specialization} />
            </FormControl>
        </Grid2>
        <Grid2 size={4}>
            <FormControl fullWidth>
                <TextField label={<Typography>{t("Pages.CreateVeterinarian.YearsOfExperience")}</Typography>}
                    name="yearsOfExperience"
                    disabled={isLoading}
                    slotProps={{
                        inputLabel: {
                            shrink: veterinarian?.yearsOfExperience !== undefined
                        }
                    }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.yearsOfExperience && errors.yearsOfExperience}
                    error={touched.yearsOfExperience && errors.yearsOfExperience !== undefined}
                    variant="outlined"
                    value={veterinarian?.yearsOfExperience} />
            </FormControl>
        </Grid2>
        <Grid2 size={12} display="flex" justifyContent="flex-end">
            <Button variant="outlined"
                disabled={isLoading}
                onClick={() => submitForm()}>
                {t("Generic.Forms.Submit")}
            </Button>
        </Grid2>
        <Snackbar open={errorSnackbarOpen} autoHideDuration={6000} onClose={handleErrorClose}>
            <Alert
                onClose={handleErrorClose}
                severity="error"
                variant="filled"
                sx={{ width: '100%' }}
            >
                {/* TODO: Needs a mapping for status codes, validation errors and unexpected errors*/}
                {t(`Pages.CreateVeterinarian.Errors.${(error as FetchBaseQueryError)?.status}`)}
            </Alert>
        </Snackbar>
    </Grid2>
}