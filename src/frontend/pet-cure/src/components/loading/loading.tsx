import { Box, CircularProgress } from "@mui/material";

export default function Loading() {
    return <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexGrow: 1,
    }}>
        <CircularProgress />
    </Box>
}