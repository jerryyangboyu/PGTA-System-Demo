import { Avatar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/system/Box";
import Footer from "../../common/Footer";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
    return (
        <Box sx={{
            maxWidth: "100%",
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
            <AppBar position="relative">
                <Toolbar>
                    <Avatar src="/UCL_CS_LOGO.jpeg" sx={{ mr: 2 }} variant="square"></Avatar>
                    <Typography variant="h6" color="inherit" noWrap>
                        PGTA Application System
                    </Typography>
                </Toolbar>
            </AppBar>

            <LoginForm />

            <Footer></Footer>
        </Box>
    )
}