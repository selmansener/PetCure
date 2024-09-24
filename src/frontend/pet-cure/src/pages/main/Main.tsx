import { Button, Grid2 } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Main() {
    const navigate = useNavigate();

    return <Grid2 container spacing={2}>
        Some Dashboard Content
    </Grid2>
}