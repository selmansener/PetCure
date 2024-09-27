import { createTheme, responsiveFontSizes } from "@mui/material";

declare module '@mui/material/styles' {
    interface Components {
        MuiPickersDay?: {
            styleOverrides?: {
                root?: {
                    // Add any other properties you want to override
                    '&.Mui-disabled'?: React.CSSProperties;
                };
            };
        };
    }
}

const mdTheme = createTheme({
    components: {
        MuiPickersDay: {
            styleOverrides: {
                root: {
                    '&.Mui-disabled': {
                        color: 'white !important', // Disabled days styling
                        backgroundColor: 'red',
                    },
                },
            },
        },
    },
});

export const theme = responsiveFontSizes(mdTheme, {
    factor: 4
});