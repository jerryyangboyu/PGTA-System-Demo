
import { UnauthenticatedTemplate } from "@azure/msal-react";
import Box from "@mui/system/Box";
import Footer from "../../common/Footer";
import NavBar from "../../common/NavBar";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
    return (
        <UnauthenticatedTemplate>
            <Box sx={{
                maxWidth: "100%",
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <NavBar></NavBar>
                <LoginForm></LoginForm>
                <Footer></Footer>
            </Box>
        </UnauthenticatedTemplate>
    )
}