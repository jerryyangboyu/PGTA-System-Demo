import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import { drawerWidth } from './Drawer'
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import IconHistory from "@mui/icons-material/History"
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingIcon from '@mui/icons-material/Settings';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Button, Card, CardContent, Divider, Link, List, Popover } from '@mui/material';
import { Box } from '@mui/system';
import { useState, MouseEvent } from 'react';
import SignOutButton from '../auth/components/SignoutButton';


export interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
    onToggle?: () => void
}

const StyledAppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export default function AppBar({ open, onToggle }: AppBarProps) {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const credentialOpen = Boolean(anchorEl);
    const id = open ? 'user-info-popover' : undefined;

    return (
        <StyledAppBar position="absolute" open={open}>
            {/* keep right padding when drawer closed */}
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={onToggle}
                    sx={{
                        marginRight: '36px',
                        ...(open && { display: 'none' }),
                    }}
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
                            <Divider sx={{marginTop: 2, marginBottom: 2}} />
                            <Box display="flex" justifyContent="flex-start" alignItems="center">
                                <IconHistory sx={{width: 42, height: 42}}/>
                                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start"
                                    sx={{marginLeft: 2}}>
                                    <Typography variant='subtitle2' component="p">
                                        Start From Where You Left Of
                                    </Typography>
                                    <Link variant='body2' href="#">Continue Reviewing</Link>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Popover>
            </Toolbar>
        </StyledAppBar>
    )
}


