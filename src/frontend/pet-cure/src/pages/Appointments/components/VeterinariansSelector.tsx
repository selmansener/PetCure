import { Avatar, Box, FormControlLabel, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Radio, RadioGroup, Skeleton } from "@mui/material";
import { useState } from "react";
import { useGetApiVeterinariansQuery } from "../../../store/api";
import React from "react";
import { useTranslation } from "react-i18next";

export function VeterinariansSelector() {
    const { t } = useTranslation();
    const { data: veterinarians, isLoading, isFetching, isError } = useGetApiVeterinariansQuery();
    const [value, setValue] = useState<number>(0);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt((event.target as HTMLInputElement).value));
    };

    if (isLoading || isFetching) {
        return <Box sx={{ width: "100%" }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
    }

    return <React.Fragment>
        {veterinarians && <RadioGroup
            value={value}
            onChange={handleChange}
        >
            <Box sx={{
                width: "100%",
                height: "320px",
                overflowY: "scroll",
                overflowX: "hidden",
            }}>
                <List dense sx={{
                    width: '100%',
                    bgcolor: 'background.paper',
                    pr: 2
                }}>
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
    </React.Fragment>
}