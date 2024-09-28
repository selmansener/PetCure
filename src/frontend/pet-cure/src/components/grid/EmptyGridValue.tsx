import { Box, Typography } from "@mui/material";

export function EmptyGridValue() {
    return <Box height="100%" display="flex" flexDirection="column" justifyContent="center" alignContent="center">
        <Typography textAlign="center">
            -
        </Typography>
    </Box>
}