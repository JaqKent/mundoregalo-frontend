import item4 from '~assets/bottomBanner.png';
import item3 from '~assets/middleBaner1.png';
import item2 from '~assets/middleBaner2.png';
import item1 from '~assets/topBaner.png';

interface SliderItem {
    img: string;
}

export const ITEMS: SliderItem[] = [
    {
        img: item1,
    },
    {
        img: item2,
    },
    {
        img: item3,
    },
    {
        img: item4,
    },
];
