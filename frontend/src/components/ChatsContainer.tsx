import { Empty, Space } from 'antd';
import React from 'react';
import { Chat } from '../entities/Chat';
import ChatCard from './ChatCard';

interface ChatsContainerProps {
    chats: Chat[],
    isLoading: boolean
}

export const ChatsContainer: React.FC<ChatsContainerProps> = ({ chats, isLoading }) => {

    const buildLayout = () => {
        if (isLoading) return <div>Загрузка</div>
        if (chats.length == 0) return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        return <Space style={{ width: '100%' }} size={30}>
            {chats.map(chat => (
                <ChatCard id={chat.id} key={chat.id} name={chat.lastSenderName} post={''} lastMessageContent={chat.lastMessage} time={new Date()} />
            ))}
        </Space>
    }

    return buildLayout();
}