import { Backdrop, CircularProgress } from "@mui/material";

// export default function Loading() {
//     return <Box sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         alignContent: "center",
//         flexGrow: 1,
//     }}>
//         <CircularProgress />
//     </Box>
// }

export default function Loading() {
    return <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={true}
    >
        <CircularProgress color="inherit" />
    </Backdrop>
}