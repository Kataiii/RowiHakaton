import { CHATS_ROUTE_PATH, CHAT_POOL_PATH, PROFILE_ROUTE_PATH, CHAT_QUESTION_PATH } from "../routing/constatns"
import User from '../assets/images/icons/icon-user.svg';
import Chat from '../assets/images/icons/icon-chat.svg';
import Chats from '../assets/images/icons/icon-chats.svg';
import Question from '../assets/images/icons/icon-question_.svg';
import { RootState } from "../store/store";
import { Role } from "../entities/Viewer";

interface SiderNavItem {
    label: string,
    to: string,
    icon: any
}


export const getSiderNavConfig = (role: Role) => {
    if (role == 'client') return [
        ...siderNavConfig,
        {label: 'Тех. поддержка', to: CHAT_QUESTION_PATH, icon: Question}
    ];
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
        icon: Chats
    }
]