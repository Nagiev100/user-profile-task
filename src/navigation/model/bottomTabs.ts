import HeartIcon from '../../../src/shared/icons/svg/heart.svg';
import StarsFavoriteIcon from '../../shared/icons/svg/favorite.svg';
import PersonIcon from '../../../src/shared/icons/svg/person.svg';
import EmailIcon from '../../../src/shared/icons/svg/email.svg';
import CardsIcon from '../../../src/shared/icons/svg/cards.svg';
import {TabLink} from "../constants/constantsLink";

export const ButtonTabs = [
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
        type: 1,
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
