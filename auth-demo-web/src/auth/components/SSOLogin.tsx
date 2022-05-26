import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SignInButton from "./SignInButton";

export default function SSOLogin() {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <img
                src="https://www.filepicker.io/api/file/jpsrsxzcQM2Iv7OArR5p"
                alt="UCL logo"
            />

            <Typography component="p" variant="subtitle1" sx={{marginBottom: 4}}>
                Sign in With UCL Single-Sign-On
            </Typography>

            <SignInButton />
       </Box>
    )
}