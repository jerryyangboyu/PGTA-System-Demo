/*
    Credit from fathomless, ref: https://stackoverflow.com/questions/53772429/mui-how-can-i-style-the-scrollbar-with-css-in-js
    A Nicer Way To Make Scroll Bar Prettier
*/

import type { } from "@mui/lab/themeAugmentation";
import createTheme from "@mui/material/styles/createTheme";

export const dashboardTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                // Color Scheme Credit: Tina, ref: https://stackoverflow.com/users/6826836/tina
                body: {
                    '::-webkit-scrollbar': {
                        width: "5px"
                    },

                    /* Track */
                    '::-webkit-scrollbar-track': {
                        background: '#f1f1f1'
                    },

                    /* Handle */
                    '::-webkit-scrollbar-thumb': {
                        background: "#888"
                    },

                    /* Handle on hover */
                    '::-webkit-scrollbar-thumb:hover': {
                        background: "#555"
                    }
                },
            },
        },
    },
});
