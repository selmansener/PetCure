import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import DebouncedTextField from "../../../components/form/DebouncedTextField";
import { ExistingPetRecordGrid } from "./ExistingPetRecordGrid";
import { useTranslation } from "react-i18next";

export function ExistingPetRecordSelector() {
    const { t } = useTranslation();
    const [phone, setPhone] = useState<string>("");
    const [microChipId, setMicroChipId] = useState<string>("");

    return <React.Fragment>
        <Box display="flex" sx={{
            mb: 2
        }}>
            <DebouncedTextField
                sx={{
                    mr: 2
                }}
                label={t("Pages.CreateAppointment.Phone")}
                size="small"
                value={phone}
                delay={1000}
                onChange={(newValue) => setPhone(newValue)}
            />
            <Typography variant="h4"
                sx={{
                    mr: 2
                }}>
                {t("Pages.CreateAppointment.PhoneOrMicroChipId")}
            </Typography>
            <DebouncedTextField
                label={t("Pages.CreateAppointment.MicroChipId")}
                size="small"
                value={microChipId}
                delay={1000}
                onChange={(newValue) => setMicroChipId(newValue)}
            />
        </Box>
        <ExistingPetRecordGrid
            phone={phone}
            microChipId={microChipId}
            onPetRecordSelected={(id) => { }}
        />
    </React.Fragment>
}