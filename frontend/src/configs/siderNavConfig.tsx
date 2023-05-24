import { CHATS_ROUTE_PATH, CHAT_POOL_PATH, PROFILE_ROUTE_PATH } from "../routing/constatns"
import User from '../assets/images/icons/icon-user.svg';
import Chat from '../assets/images/icons/icon-chat.svg';
import { RootState } from "../store/store";
import { Role } from "../entities/Viewer";

interface SiderNavItem {
    label: string,
    to: string,
    icon: any
}


export const getSiderNavConfig = (role: Role) => {
    if (role == 'client') return siderNavConfig;
    return [
        ...siderNavConfig,
        {label: 'Пул чатов', to: CHAT_POOL_PATH, icon: Chat}
    ]
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