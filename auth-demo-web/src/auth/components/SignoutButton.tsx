import { useMsal } from "@azure/msal-react";
import { Button } from "@mui/material";

/**
 * sign out button logic
 */
export default function SignOutButton() {
    const { instance } = useMsal();

    const handleLogout = () => {
        instance.logoutPopup({
            postLogoutRedirectUri: "/login",
            mainWindowRedirectUri: "/login"
        });
    }
    return (
        <Button variant="text" onClick={handleLogout}>Sign Out</Button>
    )
}