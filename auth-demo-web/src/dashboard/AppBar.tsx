import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import IconHistory from "@mui/icons-material/History"
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import { Button, Card, CardContent, Divider, Link, ListItemIcon, Menu, MenuItem, Popover, Tooltip, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { useState, MouseEvent } from 'react';
import SignOutButton from '../auth/components/SignoutButton';
import SettingsIcon from "@mui/icons-material/Settings"
import PersonIcon from '@mui/icons-material/Person';
import useTheme from '@mui/material/styles/useTheme';


export interface AppBarProps {
    open?: boolean;
    onToggle?: () => void
}

export function UserProfileMobile() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <ListItemIcon>
                        <PersonIcon fontSize="small" />
                    </ListItemIcon>
                    Profile
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <SettingsIcon fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <SignOutButton isMobile />
            </Menu>
        </>
    );
}

function UserProfileDesktop() {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const credentialOpen = Boolean(anchorEl);
    const id = credentialOpen ? 'user-info-popover' : undefined;

    return (
        <>
            <Button variant="text" color="inherit" sx={{ marginLeft: 2, backgroundColor: "rgba(255, 255, 255, 0.08)", minWidth: 265 }}
                onClick={handleClick} aria-describedby={id}>
                <Box display="flex">
                    <Box display="flex" flexDirection="column" paddingLeft={2} paddingRight={1}>
                        <Typography variant="inherit" component="span" sx={{ fontWeight: "bold" }}>
                            ZCABBYA@ucl.ac.uk
                        </Typography>
                        <Typography component="span" variant="caption" align='right'>
                            Academic Leader
                        </Typography>
                    </Box>
                    <Avatar alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/147/147142.png" />
                </Box>
            </Button>
            <Popover
                id={id}
                open={credentialOpen}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Card sx={{ minWidth: 365 }}>
                    <CardContent>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography variant='body1' noWrap>
                                Univeristy College London
                            </Typography>
                            <SignOutButton />
                        </Box>
                        <Box display="flex" justifyContent="flex-start" alignItems="center" marginTop={3}>
                            <Avatar sx={{
                                bgcolor: "#00ccff",
                                width: 92,
                                height: 92
                            }}>BY</Avatar>
                            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start"
                                paddingLeft={3}>
                                <Typography variant="h6" component="p">
                                    Boyu, Yang
                                </Typography>
                                <Typography variant="caption" component="p">
                                    ZCABBYA@ucl.ac.uk
                                </Typography>
                                <Link href="#" variant='body2'>Edit Profile</Link>
                                <Link href="#" variant="body2">Additional Link</Link>
                            </Box>
                        </Box>
                        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                        <Box display="flex" justifyContent="flex-start" alignItems="center">
                            <IconHistory sx={{ width: 42, height: 42 }} />
                            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start"
                                sx={{ marginLeft: 2 }}>
                                <Typography variant='subtitle2' component="p">
                                    Start From Where You Left Of
                                </Typography>
                                <Link variant='body2' href="#">Continue Reviewing</Link>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Popover>
        </>
    )
}

function UserProfile() {
    const theme = useTheme();
    const isMediaPhone = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

    if (isMediaPhone)
        return <UserProfileMobile />
    return <UserProfileDesktop />
}

export default function DashBoardAppBar({ open, onToggle }: AppBarProps) {
    return (
        <>
            <AppBar position='fixed'>
                {/* keep right padding when drawer closed */}
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={onToggle}
                        sx={{ marginRight: '36px' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        PGTA Dashboard
                    </Typography>

                    <IconButton size="large" aria-label="show 4 new notifications" color="inherit">
                        <Badge badgeContent={4} color="warning">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton size="large" aria-label="show 8 new emails" color="inherit">
                        <SettingIcon />
                    </IconButton>

                    <UserProfile />
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    )
}


