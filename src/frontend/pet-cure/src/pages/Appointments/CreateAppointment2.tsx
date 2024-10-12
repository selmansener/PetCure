import { useTranslation } from "react-i18next";
import { Autocomplete, FormControl, Grid2 as Grid, Tab, Tabs, Typography } from "@mui/material";
import { VeterinariansSelector } from "./components/VeterinariansSelector";
import { VeterinarianDto } from "../../store/api";
import { NavLink } from "react-router-dom";
import { AppointmentDateSelector } from "./components/AppointmentDateSelector";
import { useState } from "react";
import { AppointmentTimeSelector } from "./components/AppointmentTimeSelector";
import { CreatePetRecord } from "./components/CreatePetRecord";
import { ExistingPetRecordSelector } from "./components/ExistingPetRecordSelector";

export default function CreateAppointment2() {
    const { t } = useTranslation();
    const [selectedVet, setSelectedVet] = useState<VeterinarianDto | undefined>();
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();
    const [selectedTime, setSelectedTime] = useState<Date | undefined>();
    const [currentTab, setCurrentTab] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setCurrentTab(newValue);
    };

    const onVetSelect = (value: VeterinarianDto) => {
        setSelectedVet(value);
    };

    const onDateSelected = (value: Date) => {
        setSelectedDate(value);
    }

    const onTimeSelected = (value: Date | null) => {
        if (value) {
            setSelectedTime(value);
        }
    }

    return <Grid container spacing={2}>
        <Grid size={12}>
            <Typography variant="h4">
                {t("Pages.CreateAppointment.Title")}
            </Typography>
        </Grid>
        <Grid size={3}>
            <FormControl fullWidth>
                <VeterinariansSelector
                    onSelect={onVetSelect}
                />
            </FormControl>
        </Grid>
        <Grid size={3}>
            <FormControl fullWidth>
                <AppointmentDateSelector
                    vet={selectedVet}
                    onSelect={onDateSelected}
                />
            </FormControl>
        </Grid>
        <Grid size={3}>
            <FormControl fullWidth>
                <AppointmentTimeSelector
                    selectedVet={selectedVet}
                    selectedDate={selectedDate}
                    onSelect={onTimeSelected}
                />
            </FormControl>
        </Grid>
        
        <Grid size={12}>
            <Tabs
                value={currentTab}
                onChange={handleTabChange}
            >
                <Tab label={t("Pages.CreateAppointment.NewPetOwner")} />
                <Tab label={t("Pages.CreateAppointment.ExistingPetOwnerRecords")} />
            </Tabs>
        </Grid>
        {currentTab === 0 && <Grid size={12}>
            <CreatePetRecord />
        </Grid>}
        {currentTab === 1 && <Grid size={12}>
            <ExistingPetRecordSelector />
        </Grid>}
    </Grid>
}