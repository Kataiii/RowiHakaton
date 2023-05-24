import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ChatCanvas from '../components/ChatCanvas';
import HeaderChat from '../components/HeaderChat';
import { useAppDispatch, useAppSelector } from '../store/store';
import { getChatInfo } from '../store/slices/chat/asyncActions';
import { RequestStatus } from '../lib/requestStatus';
import PageLoader from '../components/PageLoader';
import { chatSelectors } from '../store/slices/chat';
import styles from './css/ChatListPage.module.css'
import MainInputChat from '../components/MainInputChat';
import { viewerSelectors } from '../store/slices/viewer';
import ManagerInput from '../components/ManagetInput';
import { Tag } from 'antd';
import { Message } from '../entities/Message';

interface TagProps{
    content: string;
    action?: () => void;
}

const tags: TagProps[] = [
    {
        content: 'Проблема на сайте',
    },
    {
        content: 'Не работает сайт',
    },
    {
        content: 'Оформление кредита',
    },
    {
        content: 'Перенесение срока выплаты',
    },
    {
        content: 'Другое...',
    }    
]

const QuestionPage = () => {
        

    const {id} = useParams();
    const dispatch = useAppDispatch();
    
    const role = useAppSelector(viewerSelectors.selectRole);
    const getChatInfoStatus = useAppSelector(chatSelectors.selectLoadingStatus);
    // const messages = useAppSelector(chatSelectors.selectMessages)
    const messages: Message[] = [
        { id: 1, text: 'Здравствуйте! Меня зовут Максим.\n Я ваш консультант. Чем могу помочь?', senderId: 3, time: new Date() }
    ]
    const companion = useAppSelector(chatSelectors.selectCompanion) ?? {
        id: 1,
        mail: 'mail@mail.ru',
        password: 'aaaaaa',
        name: 'Иванов Иван Иванович',
        token: 'saddddddddasdasdasdsadasdasdas',
        role: 'consultant'
    };

    useEffect(() => {
        dispatch(getChatInfo(Number.parseInt(id ?? '')));
    }, [])

    return(
        <div className={styles.ChatPage}>
            <HeaderChat titleHeader={'Чат техподдержки'} 
                contentHeader={companion.name + ' '+ companion.role} 
                status='статус'/>
                {getChatInfoStatus == RequestStatus.LOADING ? <PageLoader/> : <ChatCanvas messages={messages}/>}
            {
                tags.map((item, index) => {
                    return <Tag className={styles.Tag} key={index}>{item.content}</Tag>
                })
            }
            
        </div>
    )
}

export default QuestionPage;