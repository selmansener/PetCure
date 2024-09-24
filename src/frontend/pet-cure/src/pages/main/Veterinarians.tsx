import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useGetVeterinariansQuery } from "../../store/api";
import { useEffect } from "react";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export default function Veterinarians() {
    const { data, isError, isLoading, error } = useGetVeterinariansQuery();

    useEffect(() => {
    }, [isError, error]);

    return <Grid container spacing={2}>
        <Grid display="flex" justifyContent="flex-end" size="grow">
            <Button>
                Yeni Veteriner
            </Button>
        </Grid>
        <Grid>
            
        </Grid>
    </Grid>
}