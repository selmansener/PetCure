import { Box, Grid2, Typography } from "@mui/material";
import { AppointmentDateSelector } from "./components/AppointmentDateSelector";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { VeterinariansSelector } from "./components/VeterinariansSelector";
import { ExistingPetRecordSelector } from "./components/ExistingPetRecordSelector";
import DebouncedTextField from "../../components/form/DebouncedTextField";
import { CreatePetRecord } from "./components/CreatePetRecord";
import { VeterinarianDto } from "../../store/api";
import { AppointmentTimeSelector } from "./components/AppointmentTimeSelector";

export default function CreateAppointment() {
    const { t } = useTranslation();
    const [currentTab, setCurrentTab] = useState(0);
    const [phone, setPhone] = useState<string>("");
    const [microChipId, setMicroChipId] = useState<string>("");
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
        <Grid2 size={3}>

        </Grid2>
        <Grid2 size={3}>

        </Grid2>
        <Grid2 size={3}>
            <VeterinariansSelector
                onSelect={handleVetSelect}
            />
        </Grid2>
        <Grid2 size={3}>
            <AppointmentDateSelector
                selectedVet={selectedVet}
                onSelect={(selected) => setSelectedDate(selected)}
            />
        </Grid2>
        <Grid2 size={6}>
            <AppointmentTimeSelector
                selectedVet={selectedVet}
                selectedDate={selectedDate}
            />
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
            <ExistingPetRecordSelector
                phone={phone}
                microChipId={microChipId}
                onPetRecordSelected={(id) => { }}
            />
        </Grid2>}
    </Grid2 >
}