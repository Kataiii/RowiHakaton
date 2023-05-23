import React from 'react';
import { Button, Input, Space } from 'antd';
import styles from './css/ChatListPage.module.css';
import PrimaryButton from '../components/PrimaryButton';
import ChatCard, { ChatCardProps } from '../components/ChatCard';
import { time } from 'console';

const { Search } = Input;

const data: ChatCardProps[] = [
    {
        name: 'Иванов Иван Иванович',
        post: 'Консультант',
        time: new Date(),
        lastMessageContent: 'Я усталь, хочу спать...'
    },
    {
        name: 'Иванов Иван Иванович',
        post: 'Консультант',
        time: new Date(),
        lastMessageContent: 'Я усталь, хочу спать...'
    },
    {
        name: 'Иванов Иван Иванович',
        post: 'Консультант',
        time: new Date(),
        lastMessageContent: 'Я усталь, хочу спать...'
    }
]

const ChatsPage: React.FC = () => {
    const onSearch = (value: string) => console.log(value);

    return(
        <div>
            <div className={styles.SearchDivWrap}>
                <Search className={styles.SearchDiv} placeholder="Поиск" onSearch={onSearch} 
                    style={{ borderRadius: '35px'}} />
            </div>
            <div>
                <Button>Активные чаты</Button>
                <Button>Архив чатов</Button>
            </div>
            <div>
                {
                    data.map((item, index) => (
                        <ChatCard key={index} 
                                name={item.name}
                                post={item.post}
                                time={item.time}
                                lastMessageContent={item.lastMessageContent}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ChatsPage;