import { CHATS_ROUTE_PATH, PROFILE_ROUTE_PATH } from "../constatns"
import {UserOutlined, MessageOutlined} from '@ant-design/icons';

interface SiderNavItem {
    label: string,
    to: string,
    icon: React.ReactElement
}


export const siderNavConfig: SiderNavItem[] = [
    {
        label: 'Профиль',
        to: PROFILE_ROUTE_PATH,
        icon: <UserOutlined />
    },
    {
        label: 'Чаты',
        to: CHATS_ROUTE_PATH,
        icon: <MessageOutlined />
    }
]