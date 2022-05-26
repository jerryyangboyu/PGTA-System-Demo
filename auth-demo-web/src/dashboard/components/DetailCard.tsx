import { Button, Card, CardActions, CardContent, Divider } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

export default function VacancyCard() {
    return (
        <Card sx={{width: 385}}>
            <CardContent>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum libero ducimus atque optio. Doloribus, at nisi non molestias eos eligendi architecto sapiente porro, placeat sit dicta vel. Totam, magni!
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