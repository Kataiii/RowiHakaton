import { CHATS_ROUTE_PATH, PROFILE_ROUTE_PATH } from "../constatns"
import User from '../../assets/images/icons/icon-user.svg';
import Chat from '../../assets/images/icons/icon-chat.svg';

interface SiderNavItem {
    label: string,
    to: string,
    icon: any
}


export let siderNavConfig: SiderNavItem[] = [
    {
        label: 'Профиль',
        to: PROFILE_ROUTE_PATH,
        icon: User
    },
    {
        label: 'Чаты',
        to: CHATS_ROUTE_PATH,
        icon: Chat
    }
]