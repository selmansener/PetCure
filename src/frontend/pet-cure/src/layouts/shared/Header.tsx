import { AppBar, Box, Button, Grid2, Link, MenuItem, Select, Toolbar, Typography } from "@mui/material"
import React from "react"
import { config } from "../../config";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useColorScheme } from '@mui/material/styles';
import ColorLensIcon from '@mui/icons-material/ColorLens';

const menuItems = [
    {
        title: "MenuItems.Veterinarians",
        path: "/veterinarians"
    },
    {
        title: "MenuItems.Appointments",
        path: "/appointments"
    }
]

function Menu() {
    const { t } = useTranslation();

    return <Grid2 container spacing={2} display="flex" justifyContent="flex-end">
        {menuItems.map(item => {
            return <Grid2 key={item.title}>
                <Link to={item.path} component={NavLink}>
                    {t(item.title)}
                </Link>
            </Grid2>
        })}
    </Grid2>
}

type themeMode = 'light' | 'dark' | 'system';

function ModeSwitcher() {
    const { mode, setMode } = useColorScheme();

    if (!mode) {
        return null;
    }

    return (
        <Select
            size="small"
            value={mode}
            onChange={(event) => {
                setMode(event.target.value as themeMode);
            }}
        >
            <MenuItem value="system">System</MenuItem >
            <MenuItem value="light">Light</MenuItem >
            <MenuItem value="dark">Dark</MenuItem >
        </Select>
    );
}


export function Header() {
    return <React.Fragment>
        <AppBar position="fixed" color="inherit" elevation={1}>
            <Toolbar>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    flexGrow: 1,
                }}>
                    <Link to="/" component={NavLink}>
                        PetCure
                    </Link>
                </Box>
                <Menu />
                <Box sx={{
                    ml: 2,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "150px",
                    justifyContent: "space-evenly",
                }}>
                    <ColorLensIcon />
                    <ModeSwitcher />
                </Box>
            </Toolbar>
        </AppBar>
    </React.Fragment>
}