import HeartIcon from '../../../src/shared/icons/heart.svg';
import StarsFavoriteIcon from '../../../src/shared/icons/favorite.svg';
import PersonIcon from '../../../src/shared/icons/person.svg';
import EmailIcon from '../../../src/shared/icons/email.svg';
import CardsIcon from '../../../src/shared/icons/cards.svg';
import {TabLink} from "@/navigation/router";

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
