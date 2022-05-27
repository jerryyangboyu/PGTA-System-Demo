import { Button, Card, CardActions, CardContent, Divider } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { cardWidth } from "../CardBoard";

export default function VacancyCard() {
    return (
        <Card sx={{width: cardWidth}}>
            <CardContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ut neque provident quasi unde veritatis, expedita reprehenderit porro hic corporis minus suscipit placeat id, itaque ullam illo sint tempora nobis.
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus exercitationem ex sequi in qui, recusandae, aut necessitatibus, saepe facilis ipsa ut nemo dolorem facere. Modi vero nesciunt molestias reiciendis soluta!
                <Divider sx={{marginTop: 2, marginBottom: -1}} />
            </CardContent>
            <CardActions>
                <Button variant="text" startIcon={<ArrowForwardIcon />}>
                    Apply & View Your Application
                </Button>
            </CardActions>
        </Card>
    )
}