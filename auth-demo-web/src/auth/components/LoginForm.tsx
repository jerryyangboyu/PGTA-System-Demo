import * as React from 'react';
import Avatar from '@mui/material/Avatar'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Container from '@mui/system/Container'
import Box from '@mui/material/Box';
import EmailLogin from './EmailLogin';
import SSOLogin from './SSOLogin';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

enum PanelState { SamlLogin = 0, EmailLogin = 1 }
interface PanelProp {
    currentState: PanelState
    targetState: PanelState
    component: JSX.Element
}

function Panel(prop: PanelProp) {
    return (
        <div
            role="tabpanel"
            hidden={prop.currentState !== prop.targetState}
            id={`login-tab-${prop.targetState}`}
            aria-labelledby={`login-tab-${prop.targetState}`}
        >
            {/* do not render when tab is hidden */}
            {prop.currentState === prop.targetState && prop.component}
        </div>
    );
}

function LoginMethodTabs() {

    const [curTab, setCurTab] = React.useState(PanelState.SamlLogin);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setCurTab(newValue);
    };

    return (
        // <Box sx={{ width: '100%' }}>
        <Box>
            <Tabs value={curTab} onChange={handleChange} aria-label="basic tabs example" centered>
                <Tab label="UCL Student/Staff" />
                <Tab label="Others" />
            </Tabs>
            <Panel currentState={curTab} targetState={PanelState.SamlLogin} component={SSOLogin()} />
            <Panel currentState={curTab} targetState={PanelState.EmailLogin} component={EmailLogin()} />
        </Box>
        // </Box>
    )
}

export default function LoginForm() {
    return (
        <Container component="main">
            <Box sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="p" variant="subtitle2">
                    Select Sign in Method
                </Typography>
                <LoginMethodTabs />
            </Box>
        </Container>
    )
}