import { AuthenticatedTemplate } from "@azure/msal-react";
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppBar from "./AppBar";
import Drawer from "./Drawer";
import CardBoard from "./CardBoard";
import { useState } from "react";
import { dashboardTheme } from "./dashboardTheme";

export default function DashBoard() {
    return (
        <AuthenticatedTemplate>
            <DashboardContent />
        </AuthenticatedTemplate>
    )
}

function DashboardContent() {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={dashboardTheme}>
            <>
                <CssBaseline />

                <AppBar open={open} onToggle={toggleDrawer} />

                <Drawer open={open} onToggle={toggleDrawer} />

                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        overflow: 'hidden',
                        paddingTop: 4,
                    }}
                    display="flex"
                    justifyContent="center"
                >
                    <CardBoard />
                </Box>
            </>
        </ThemeProvider>
    );
}