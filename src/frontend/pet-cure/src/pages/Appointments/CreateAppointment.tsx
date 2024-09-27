import { Avatar, Box, FormControlLabel, Grid2, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Radio, RadioGroup, Typography } from "@mui/material";
import { AppointmentDateSelector } from "./components/AppointmentDateSelector";
import { useGetApiVeterinariansQuery } from "../../store/api";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function CreateAppointment() {
    const { t } = useTranslation();
    const { data: veterinarians, isLoading, isFetching, isError } = useGetApiVeterinariansQuery();
    const [value, setValue] = useState<number>(0);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt((event.target as HTMLInputElement).value));
    };

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
            {veterinarians && <RadioGroup
                value={value}
                onChange={handleChange}
            >
                <Box sx={{
                    width: "100%",
                    height: "480px",
                    "overflow-y": "scroll",
                    "overflow-x": "hidden",
                }}>
                    <List dense sx={{
                        width: '100%',
                        bgcolor: 'background.paper'
                    }}>
                        <FormControlLabel
                            sx={{
                                display: "flex",
                                justifyContent: "space-between"
                            }}
                            key={0}
                            value={0} control={<Radio />}
                            labelPlacement="start"
                            label={
                                <ListItem
                                    disablePadding
                                >
                                    <ListItemButton>
                                        <ListItemAvatar>
                                            <Avatar />
                                        </ListItemAvatar>
                                        <ListItemText primary={t("Pages.CreateAppointment.AllVets")} />
                                    </ListItemButton>
                                </ListItem>
                            }

                        />
                        {veterinarians.map((veterinarian) => {
                            const labelId = `checkbox-list-secondary-label-${veterinarian}`;
                            return (
                                <FormControlLabel
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between"
                                    }}
                                    key={veterinarian.id}
                                    value={veterinarian.id} control={<Radio />}
                                    labelPlacement="start"
                                    label={
                                        <ListItem
                                            disablePadding
                                        >
                                            <ListItemButton>
                                                <ListItemAvatar>
                                                    <Avatar />
                                                </ListItemAvatar>
                                                <ListItemText id={labelId} primary={`${veterinarian.firstName} ${veterinarian.lastName}`} />
                                            </ListItemButton>
                                        </ListItem>
                                    } />
                            );
                        })}
                    </List>
                </Box>
            </RadioGroup>}
        </Grid2>
        <Grid2 size={3}>
            <AppointmentDateSelector />
        </Grid2>
        <Grid2 size={3}>
        </Grid2>
        <Grid2 size={3}>
        </Grid2>
    </Grid2 >
}