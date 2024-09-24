import { AppBar, Box, Button, Grid2, Toolbar, Typography } from "@mui/material"
import React from "react"
import { NavLink, useNavigate } from "react-router-dom";
import { config } from "../../config";
import { useTranslation } from "react-i18next";

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
            return <Grid2>
                <NavLink key={item.title} to={item.path}>
                    <Typography>
                        {t(item.title)}
                    </Typography>
                </NavLink>
            </Grid2>
        })}
    </Grid2>
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
                    <NavLink to="/">
                        <Typography>
                            PetCure
                        </Typography>
                    </NavLink>
                </Box>
                <Menu />
            </Toolbar>
        </AppBar>
    </React.Fragment>
}