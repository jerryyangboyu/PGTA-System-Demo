import Button from "@mui/material/Button";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { useNavigate } from "react-router-dom";

export default function SignInButton() {
    const { instance } = useMsal();
    const navigate = useNavigate();

    const handleLogin = () => {
        instance.loginPopup(loginRequest).catch(e => {
            console.log(e);
        })
        .then((result) => {
            navigate("/", {replace: true})
            console.log(result)
        });
    }
    return (
        <Button variant="contained" onClick={handleLogin}>Authorize</Button>
    )
}