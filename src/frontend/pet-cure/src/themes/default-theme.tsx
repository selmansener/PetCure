import '@fontsource/poppins/400.css'; // Regular
import '@fontsource/poppins/500.css'; // Medium
import '@fontsource/poppins/600.css'; // Semi-Bold
import '@fontsource/poppins/700.css'; // Bold

import { createTheme, responsiveFontSizes } from "@mui/material";
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { LinkProps } from '@mui/material/Link';
import React from "react";

export const LinkBehavior = React.forwardRef<
    HTMLAnchorElement,
    Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
    const { href, ...other } = props;
    return <RouterLink ref={ref} to={href} {...other} />;
});

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
    colorSchemes: { 
        light: true, 
        dark: true 
    },
    cssVariables: {
        colorSchemeSelector: 'class'
    },
    typography: {
        // Define global font family
        fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',

        h1: {
            fontSize: '3rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
        },
        h2: {
            fontSize: '2.25rem',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            lineHeight: 1.3,
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 500,
            letterSpacing: '-0.01em',
            lineHeight: 1.4,
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 500,
            lineHeight: 1.4,
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 400,
            lineHeight: 1.5,
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.6,
        },
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.75,
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: 1.6,
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.7,
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.6,
        },
        button: {
            fontSize: '0.875rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: 1.35,
        },
        overline: {
            fontSize: '0.75rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
        },

    },
    // components: {
    //     MuiLink: {
    //         styleOverrides: {
    //             root: {
    //                 color: "#fff"
    //             }
    //         },
    //         defaultProps: {
    //             component: LinkBehavior,
    //         } as LinkProps,
    //     },
    // },
});

export const defaultTheme = responsiveFontSizes(mdTheme, {
    factor: 4
});