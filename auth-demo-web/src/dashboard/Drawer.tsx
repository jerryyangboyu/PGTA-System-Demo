import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeftOutlined';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { AppBarProps } from './AppBar';
import Typography from '@mui/material/Typography';

export const drawerWidth: number = 240;

interface DrawerProp extends AppBarProps {
    children: JSX.Element
}

const StyledDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

export default function Drawer({ open, onToggle, children }: DrawerProp) {
    return (
        <StyledDrawer variant="permanent" open={open}>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }}
            >
                {
                    open
                    ? <Typography 
                        variant='subtitle1'
                        sx={{
                            width: "100%",
                            textAlign: "left",
                            paddingLeft: 2
                        }}>Modules Menu</Typography>
                    : <></>
                }
                <IconButton onClick={onToggle}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            {children}
        </StyledDrawer>
    )

}


