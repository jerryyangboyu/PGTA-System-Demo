import { Button, Card, CardActions, CardContent, Divider } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { cardWidth } from "../CardBoard";

export default function ProfileCard() {
    return (
        // TODO: Card Width Compatibaility
        <Card sx={{width: cardWidth}}>
            <CardContent>
                
                <Divider sx={{marginTop: 2, marginBottom: -1}} />
            </CardContent>
            <CardActions>
                <Button variant="text" startIcon={<ArrowForwardIcon />}>
                    Edit Personal Detail
                </Button>
            </CardActions>
        </Card>
    )
}