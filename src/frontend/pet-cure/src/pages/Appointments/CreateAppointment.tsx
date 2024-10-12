import { Box, Grid2, Typography } from "@mui/material";
import { AppointmentDateSelector } from "./components/AppointmentDateSelector";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { VeterinariansSelector } from "./components/VeterinariansSelector";
import { ExistingPetRecordGrid } from "./components/ExistingPetRecordGrid";
import DebouncedTextField from "../../components/form/DebouncedTextField";
import { CreatePetRecord } from "./components/CreatePetRecord";
import { VeterinarianDto } from "../../store/api";
import { AppointmentTimeSelector } from "./components/AppointmentTimeSelector";
import { ExistingPetRecordSelector } from "./components/ExistingPetRecordSelector";

export default function CreateAppointment() {
    const { t } = useTranslation();
    const [currentTab, setCurrentTab] = useState(0);
    const [selectedVet, setSelectedVet] = useState<VeterinarianDto | undefined>();
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setCurrentTab(newValue);
    };

    const handleVetSelect = (vet: VeterinarianDto) => {
        setSelectedVet(vet);
    }

    return <Grid2 container spacing={2}>
        <Grid2 size={3}>
            <Typography variant="h4">
                {t("Pages.CreateAppointment.Veterinarians")}
            </Typography>
        </Grid2>
        <Grid2 size={3}>
            <Typography variant="h4">
                {t("Pages.CreateAppointment.AppointmentDate")}
            </Typography>
        </Grid2>
        <Grid2 size={6}>
            <Typography variant="h4">
                {t("Pages.CreateAppointment.AppointmentTime")}
            </Typography>
        </Grid2>
        <Grid2 size={3}>
            <VeterinariansSelector
                onSelect={handleVetSelect}
            />
        </Grid2>
        <Grid2 size={3}>
            {<AppointmentDateSelector
                vet={selectedVet}
                onSelect={(selected) => setSelectedDate(selected)}
            />}
        </Grid2>
        <Grid2 size={6}>
            {<AppointmentTimeSelector
                selectedVet={selectedVet}
                selectedDate={selectedDate}
                onSelect={() => { }}
            />}
        </Grid2>
        <Grid2 size={12}>
            <Tabs
                value={currentTab}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
            >
                <Tab label={t("Pages.CreateAppointment.NewPetOwner")} />
                <Tab label={t("Pages.CreateAppointment.ExistingPetOwnerRecords")} />
            </Tabs>
        </Grid2>
        {currentTab === 0 && <Grid2 size={12}>
            <CreatePetRecord />
        </Grid2>}
        {currentTab === 1 && <Grid2 size={12}>
            <ExistingPetRecordSelector />
        </Grid2>}
    </Grid2 >
}