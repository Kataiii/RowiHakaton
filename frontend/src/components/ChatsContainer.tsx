import { Empty, Space } from 'antd';
import React from 'react';
import { Chat } from '../entities/Chat';
import ChatCard from './ChatCard';
import ChatCardClose from './ChatCardClose';
import PageLoader from './PageLoader';

interface ChatsContainerProps {
    chats: Chat[],
    isLoading: boolean,
    isActiveChats: boolean
}

export const ChatsContainer: React.FC<ChatsContainerProps> = ({ chats, isLoading, isActiveChats }) => {

    const buildLayout = () => {
        if (isLoading) return <PageLoader/>
        if (chats.length == 0) return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        return <Space style={{ width: '100%' }} wrap={true} direction={isActiveChats? 'vertical': 'horizontal'} size={30}>
            {chats.map(chat => (
                isActiveChats?
                <ChatCard id={chat.id} key={chat.id} name={chat.lastSenderName} post={''} lastMessageContent={chat.lastMessage} time={new Date()} />
                :
                <ChatCardClose id={chat.id} key={chat.id} name={chat.lastSenderName} post={''} lastMessageContent={chat.lastMessage} time={new Date()} />
            ))}
        </Space>
    }

    return buildLayout();
}