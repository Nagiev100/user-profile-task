import HeartIcon from '@/shared/icons/svg/heart.svg?raw';
import StarsFavoriteIcon from '@/shared/icons/svg/favorite.svg?raw';
import EmailIcon from '@/shared/icons/svg/email.svg?raw';
import CardsIcon from '@/shared/icons/svg/cards.svg?raw';
import {TabLink} from "../constants/constantsLink";
import PersonIcon from '@/shared/icons/svg/person.svg?raw'
import {ButtonNavType} from "@/navigation/types/types";

export const ButtonTabs: ButtonNavType[] = [
    {
        id: 1,
        icon: HeartIcon,
        navigateLink: TabLink.FAVORITE
    },
    {
        id: 2,
        icon: StarsFavoriteIcon,
        navigateLink: TabLink.SETTINGS
    },
    {
        id: 3,
        icon: CardsIcon,
        navigateLink: TabLink.CARD,
        type: true,
    },
    {
        id: 4,
        icon: EmailIcon,
        navigateLink: TabLink.HOME,
    },
    {
        id: 5,
        icon: PersonIcon,
        navigateLink: TabLink.USERPROFILE,
    },
]
