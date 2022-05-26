import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import DetailCard from "./components/DetailCard"
import VacancyCard from "./components/VacancyCard"


export default function BasicMasonry() {
    return (
        <Box sx={{ paddingLeft: 10, paddingRight: 10 }}>
            <Masonry columns={{xs: 1, md: 2, lg: 3}} spacing={2}>
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
        </Box>
            
    );
}
