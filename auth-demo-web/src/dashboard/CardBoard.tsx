import Masonry from '@mui/lab/Masonry';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import DetailCard from "./components/ProfileCard"
import VacancyCard from "./components/VacancyCard"

// Just Define MaxWidth, There are no common device with smaller than 385
// Except Iphone SE which is 375
export const cardWidth = 385;
export const gapWidth = 2;

export default function BasicMasonry() {
    // Media Query Auto Adjust Max-Width of Masonry
    // Note that Masonry can only centered using flex-box with constant max-width
    // Defalt pre-set: phone(xs) 1 col; ipad(md) 2 col; desktop(>lg) 3 col max
    const theme = useTheme();
    const isMediaPhone = useMediaQuery(theme.breakpoints.between('xs', 'md'));
    const isMediaTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const isMediaDesktop = useMediaQuery(theme.breakpoints.up('lg'))

    let maxWidth: number = cardWidth * 3 + gapWidth * 2
    if (isMediaDesktop)
        maxWidth = cardWidth * 3 + gapWidth * 2
    else if (isMediaTablet)
        maxWidth = cardWidth * 2 + gapWidth
    else if (isMediaPhone)
        maxWidth = cardWidth

    console.log("isDesktop: ", isMediaDesktop, "isIpad: ", isMediaTablet)

    return (
        <Masonry columns={{ xs: 1, md: 2, lg: 3 }} spacing={gapWidth} sx={{maxWidth}}>
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
