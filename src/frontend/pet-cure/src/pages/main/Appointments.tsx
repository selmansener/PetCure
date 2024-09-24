import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function Appointments() {
    
    return <Grid container spacing={2}>
        <Grid display="flex" justifyContent="flex-end" size="grow">
            <Button>
                Yeni Randevu
            </Button>
        </Grid>
        <Grid>
            
        </Grid>
    </Grid>
}