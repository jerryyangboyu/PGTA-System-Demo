import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export default function NavBar() {
    return (
        <AppBar position="relative">
            <Toolbar>
                <Avatar src="/UCL_CS_LOGO.jpeg" sx={{ mr: 2 }} variant="square"></Avatar>
                <Typography variant="h6" color="inherit" noWrap>
                    PGTA Application System
                </Typography>
            </Toolbar>
        </AppBar>
    )
}