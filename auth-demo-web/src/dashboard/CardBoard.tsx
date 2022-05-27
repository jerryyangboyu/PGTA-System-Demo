import Masonry from '@mui/lab/Masonry';
import DetailCard from "./components/DetailCard"
import VacancyCard from "./components/VacancyCard"


export default function BasicMasonry() {
    return (
        <Masonry columns={{ xs: 1, md: 2, lg: 3 }} spacing={2}>
            <DetailCard />
            <VacancyCard />
            <DetailCard />
            <VacancyCard />
            <DetailCard />
            <VacancyCard />
            <DetailCard />
            <VacancyCard />
            <DetailCard />
            <VacancyCard />
            <DetailCard />
            <VacancyCard />
            <DetailCard />
            <VacancyCard />
        </Masonry>
    );
}
