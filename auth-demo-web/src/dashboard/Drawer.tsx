import Divider from '@mui/material/Divider';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Toolbar from '@mui/material/Toolbar';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import HomeIcon from "@mui/icons-material/Home"
import HistoryIcon from "@mui/icons-material/History"
import RightIcon from "@mui/icons-material/ChevronRight"
import PersonIcon from "@mui/icons-material/Person"
import JobIcon from "@mui/icons-material/Work"
import QuestionIcon from "@mui/icons-material/QuestionAnswer"
import VacancyIcon from "@mui/icons-material/EventAvailable"
import RTWIcon from "@mui/icons-material/Approval"
import { Typography } from '@mui/material';

interface DrawerProp {
    open: boolean
    onToggle: () => void
}

interface MenuButtonProp {
    icon: JSX.Element
    label: string
}
function MenuButton({ icon, label }: MenuButtonProp) {
    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon style={{
                    minWidth: "42px"
                }}>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={label} sx={{ paddingRight: 10 }} />
                <ListItemIcon style={{
                    display: "flex",
                    justifyContent: "flex-end"
                }}>
                    <RightIcon />
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
    )
}

function MenuLabel({label}: {label: string}) {
    return (
        <ListItem disablePadding>
            <Typography variant='button' component="span" width="100%" textAlign="center">{label}</Typography>
        </ListItem>
    )
}

export default function Drawer({ open, onToggle }: DrawerProp) {
    return (
        <SwipeableDrawer
            open={open}
            ModalProps={{ keepMounted: true }}
            onOpen={onToggle}
            onClose={onToggle}
            sx={{
                zIndex: 10,
            }}
        >
            <Toolbar />
            <nav aria-label="main function">
                <List>
                    <MenuButton icon={<HomeIcon />} label="Home" />
                    <MenuButton icon={<HistoryIcon />} label="Recent" />
                </List>
            </nav>
            <Divider />
            <nav aria-label="secondary mailbox folders">
                <List>
                    <MenuLabel label='Favourite'/>
                    <MenuButton icon={<VacancyIcon />} label="Vacancies" />
                    <MenuButton icon={<PersonIcon />} label="Profile" />
                </List>
            </nav>
            <Divider />
            <nav aria-label="secondary mailbox folders">
                <List>
                    <MenuLabel label='Modules'/>
                    <MenuButton icon={<QuestionIcon />} label="Q&A Session" />
                    <MenuButton icon={<VacancyIcon />} label="Vacancies" />
                    <MenuButton icon={<JobIcon />} label="Jobs" />
                    <MenuButton icon={<PersonIcon />} label="Profile" />
                    <MenuButton icon={<RTWIcon />} label="Documents" />

                </List>
            </nav>
        </SwipeableDrawer>
    )

}


