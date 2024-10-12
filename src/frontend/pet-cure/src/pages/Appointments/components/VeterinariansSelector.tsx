import { Autocomplete, Avatar, Box, FormControlLabel, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Radio, RadioGroup, Skeleton, TextField } from "@mui/material";
import { useState } from "react";
import { useGetApiVeterinariansQuery, VeterinarianDto } from "../../../store/api";
import React from "react";
import { useTranslation } from "react-i18next";

export interface VeterinariansSelectorProps {
    onSelect: (selected: VeterinarianDto) => void;
}

export function VeterinariansSelector(props: VeterinariansSelectorProps) {
    const { onSelect } = props;
    const { t } = useTranslation();
    const { data: vets, isLoading, isFetching, isError } = useGetApiVeterinariansQuery();
    const options = React.useMemo(
        () => vets?.map(vet => {
            return {
                id: vet.id,
                label: `${vet.firstName} ${vet.lastName}`
            }
        }) ?? [],
        [vets],
    );

    const [value, setValue] = React.useState<{ id: number | undefined, label: string } | undefined>({
        id: undefined,
        label: ""
    });
    const [inputValue, setInputValue] = React.useState('');

    return <Autocomplete
        value={value}
        onChange={(event: any, newValue: { id: number | undefined, label: string } | null) => {
            if (newValue) {
                const foundVet = options.find(vet => vet.id === newValue.id);
                setValue(foundVet);

                const _foundVet = vets?.find(vet => vet.id === newValue.id);
                if (_foundVet) {
                    onSelect(_foundVet);
                }
            }
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
        }}
        disablePortal
        disabled={isLoading || isFetching}
        loading={isLoading || isFetching}
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={t("Pages.CreateAppointment.Veterinarians")} />}
    />
}