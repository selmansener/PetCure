import { createTheme, responsiveFontSizes } from "@mui/material";
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { LinkProps } from '@mui/material/Link';
import React from "react";

const LinkBehavior = React.forwardRef<
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
    colorSchemes: { light: true, dark: true },
    cssVariables: {
        colorSchemeSelector: 'class'
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

export const theme = responsiveFontSizes(mdTheme, {
    factor: 4
});