import { Box, Button, Divider, Grid2 as Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import DebouncedTextField from "../../../components/form/DebouncedTextField";
import { ExistingPetRecordGrid } from "./ExistingPetRecordGrid";
import { Trans, useTranslation } from "react-i18next";
import { ExistingPetRecordDetails } from "./ExistingPetRecordDetails";

export function ExistingPetRecordSelector() {
    const { t } = useTranslation();
    const [phone, setPhone] = useState<string>("");
    const [microChipId, setMicroChipId] = useState<string>("");
    const [selectedPetId, setSelectedPetId] = useState<number | undefined>();

    return <React.Fragment>
        {!selectedPetId && <React.Fragment>
            <Box display="flex" sx={{
                p: 2,
                alignItems: "center"
            }}>

                <Trans
                    i18nKey="Pages.CreateAppointment.PhoneOrMicroChipId"
                    components={{
                        phoneField: <DebouncedTextField
                            sx={{
                                mx: [2]
                            }}
                            label={t("Pages.CreateAppointment.Phone")}
                            size="small"
                            value={phone}
                            delay={1000}
                            onChange={(newValue) => setPhone(newValue)}
                        />,
                        chipField: <DebouncedTextField
                            sx={{
                                mx: [2]
                            }}
                            label={t("Pages.CreateAppointment.MicroChipId")}
                            size="small"
                            value={microChipId}
                            delay={1000}
                            onChange={(newValue) => setMicroChipId(newValue)}
                        />
                    }}
                />
            </Box>
            <ExistingPetRecordGrid
                phone={phone}
                microChipId={microChipId}
                onPetRecordSelected={(id) => setSelectedPetId(id)}
            />
        </React.Fragment>}
        {selectedPetId && <Grid container spacing={2}>
            <Grid size={6}>
                <Typography variant="h4">
                    {t("Pages.CreateAppointment.ExistingPetRecordDetails.Title")}
                </Typography>
            </Grid>
            <Grid size={6} textAlign="end">
                <Button variant={"outlined"} color="error" onClick={() => setSelectedPetId(undefined)}>
                    {t("Pages.CreateAppointment.ReSelect")}
                </Button>
            </Grid>
            <Grid size={12}>
                <Divider />
            </Grid>
            <Grid size={12}>
                <ExistingPetRecordDetails id={selectedPetId} />
            </Grid>
        </Grid>}
    </React.Fragment>
}