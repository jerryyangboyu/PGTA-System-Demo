import { useMsal } from "@azure/msal-react";
import { Button, ListItemIcon, MenuItem } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout"
import React from "react";

/**
 * sign out button logic
 */
export default function SignOutButton({ isMobile = false }: { isMobile?: boolean }) {
    const { instance } = useMsal();

    const handleLogout = () => {
        instance.logoutPopup({
            postLogoutRedirectUri: "/login",
            mainWindowRedirectUri: "/login"
        });
    }
    return (
        isMobile
            ? <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                    <LogoutIcon fontSize="small" />
                </ListItemIcon>
                Sign Out
              </MenuItem>
            : <Button variant="text" onClick={handleLogout}>Sign Out</Button>
    )
}