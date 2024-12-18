import { Alert, Box, Button, FormControl, Grid2 as Grid, IconButton, Paper, Snackbar, SnackbarCloseReason, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { usePostApiVeterinariansMutation } from "../../store/api";
import * as Yup from "yup";
import { useFormik } from 'formik';
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import CloseIcon from '@mui/icons-material/Close';

export default function CreateVeterinarian() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);

    const [CreateVeterinarian, results] = usePostApiVeterinariansMutation();
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
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            specialization: "",
            yearsOfExperience: 0
        },
        validationSchema: schema,
        onSubmit: (values) => {
            CreateVeterinarian({
                createVeterinarianCommand: {
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
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

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

    return <Paper sx={{
        p: 2
    }}>
        <Grid container spacing={2} ref={targetRef}>
            <Grid size={12}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <Typography variant={"h4"}>
                        {t("Pages.CreateVeterinarian.Title")}
                    </Typography>
                    <IconButton onClick={() => navigate("/veterinarians")}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </Grid>
            <Grid size={4}>
                <FormControl fullWidth>
                    <TextField label={<Typography>{t("Pages.CreateVeterinarian.FirstName")}</Typography>}
                        name="firstName"
                        disabled={isLoading}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={touched.firstName && errors.firstName}
                        error={touched.firstName && errors.firstName !== undefined}
                        variant="outlined"
                        value={veterinarian?.firstName} />
                </FormControl>
            </Grid>
            <Grid size={4}>
                <FormControl fullWidth>
                    <TextField label={<Typography>{t("Pages.CreateVeterinarian.LastName")}</Typography>}
                        name="lastName"
                        disabled={isLoading}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={touched.lastName && errors.lastName}
                        error={touched.lastName && errors.lastName !== undefined}
                        variant="outlined"
                        value={veterinarian?.lastName} />
                </FormControl>
            </Grid>
            <Grid size={4}>
                <FormControl fullWidth>
                    <TextField label={<Typography>{t("Pages.CreateVeterinarian.Phone")}</Typography>}
                        name="phone"
                        disabled={isLoading}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={touched.phone && errors.phone}
                        error={touched.phone && errors.phone !== undefined}
                        variant="outlined"
                        value={veterinarian?.phone} />
                </FormControl>
            </Grid>
            <Grid size={4}>
                <FormControl fullWidth>
                    <TextField label={<Typography>{t("Pages.CreateVeterinarian.Email")}</Typography>}
                        name="email"
                        disabled={isLoading}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={touched.email && errors.email}
                        error={touched.email && errors.email !== undefined}
                        variant="outlined"
                        value={veterinarian?.email} />
                </FormControl>
            </Grid>
            <Grid size={4}>
                <FormControl fullWidth>
                    <TextField label={<Typography>{t("Pages.CreateVeterinarian.Specialization")}</Typography>}
                        name="specialization"
                        disabled={isLoading}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={touched.specialization && errors.specialization}
                        error={touched.specialization && errors.specialization !== undefined}
                        variant="outlined"
                        value={veterinarian?.specialization} />
                </FormControl>
            </Grid>
            <Grid size={4}>
                <FormControl fullWidth>
                    <TextField label={<Typography>{t("Pages.CreateVeterinarian.YearsOfExperience")}</Typography>}
                        name="yearsOfExperience"
                        disabled={isLoading}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={touched.yearsOfExperience && errors.yearsOfExperience}
                        error={touched.yearsOfExperience && errors.yearsOfExperience !== undefined}
                        variant="outlined"
                        value={veterinarian?.yearsOfExperience} />
                </FormControl>
            </Grid>
            <Grid size={12} display="flex" justifyContent="flex-end">
                <Button variant="outlined"
                    disabled={isLoading}
                    onClick={() => navigate("/veterinarians")}
                    sx={{
                        mr: 2
                    }}
                >
                    {t("Generic.Forms.Cancel")}
                </Button>
                <Button variant="contained"
                    disabled={isLoading}
                    onClick={() => submitForm()}>
                    {t("Generic.Forms.Submit")}
                </Button>
            </Grid>
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
        </Grid>
    </Paper>
}