import { AppBar, Box, Button, Grid2 as Grid, Link, MenuItem, Select, SelectChangeEvent, Toolbar, Typography } from "@mui/material"
import React, { useMemo } from "react"
import { config } from "../../config";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useColorScheme } from '@mui/material/styles';
import ColorLensIcon from '@mui/icons-material/ColorLens';

const menuItems = [
    {
        title: "MenuItems.ApptsCalendar",
        path: "/calendar"
    },
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

    return <Grid container spacing={2} display="flex" justifyContent="flex-end">
        {menuItems.map(item => {
            return <Grid key={item.title}>
                <Link to={item.path} component={NavLink}>
                    {t(item.title)}
                </Link>
            </Grid>
        })}
    </Grid>
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

const supportedLanguages = [
    {
        code: "tr",
        lang: "Türkçe",
        iconCode: "tr"
    },
    {
        code: "en",
        lang: "English",
        iconCode: "us"
    },
]

function LangSwitcher() {
    const { i18n } = useTranslation();

    const supportedLanguages = useMemo(() => {
        return [
            {
                code: "tr",
                lang: "Türkçe",
                iconCode: "tr"
            },
            {
                code: "en",
                lang: "English",
                iconCode: "us"
            },
        ];
    }, []);

    const handleLanguageChange = (event: SelectChangeEvent) => {
        let lang;
        switch (event.target.value) {
            case "en":
            case "en-GB":
            case "en-US":
                lang = "en";
                break;
            case "tr":
                lang = "tr";
        }

        i18n.changeLanguage(lang);
    }

    const getLanguage = () => {
        switch (i18n.language) {
            case "en-GB":
            case "en-US":
            case "en":
                return "en";
            case "tr-TR":
            case "tr":
            default:
                return "tr";
        }
    }
    return <Select
        value={getLanguage()}
        onChange={handleLanguageChange}
        size={"small"}
        sx={{ mr: 2 }}
    >
        {supportedLanguages.map(supportedLang => (
            <MenuItem value={supportedLang.code} key={supportedLang.lang}>
                <img
                    loading="lazy"
                    width="20"
                    src={`https://flagcdn.com/w20/${supportedLang.iconCode}.png`}
                    srcSet={`https://flagcdn.com/w40/${supportedLang.iconCode}.png 2x`}
                    alt={supportedLang.code}
                />
                <Typography variant="caption" sx={{ pl: 1 }}>
                    {supportedLang.lang}
                </Typography>
            </MenuItem>
        ))}
    </Select>
}


export function Header() {
    return <React.Fragment>
        <AppBar position="fixed" color="inherit" elevation={1} 
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 2 })}>
            <Toolbar>
                <Grid size={12} container display="flex" alignItems="center">
                    <Grid size={4}>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            flexGrow: 1,
                        }}>
                            <Link to="/" component={NavLink}>
                                PetCure
                            </Link>
                        </Box>
                    </Grid>
                    <Grid size={6}>
                        <Menu />
                    </Grid>
                    <Grid size={2}>
                        <Box sx={{
                            ml: 2,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                        }}>
                            <ColorLensIcon />
                            <ModeSwitcher />
                            <LangSwitcher />
                        </Box>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </React.Fragment>
}