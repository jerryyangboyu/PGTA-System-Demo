import { AuthenticatedTemplate } from "@azure/msal-react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppBar from "./AppBar";
import Drawer from "./Drawer";
import CardBoard from "./CardBoard";
import { useState } from "react";


export default function DashBoard() {
    return (
        <AuthenticatedTemplate>
            <DashboardContent />
        </AuthenticatedTemplate>
    )
}

const mdTheme = createTheme();

function DashboardContent() {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
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
                        
                        paddingTop: 4,
                        paddingLeft: 10,
                        paddingRight: 10
                    }}
                >
                    <CardBoard />
                </Box>
            </>
        </ThemeProvider>
    );
}