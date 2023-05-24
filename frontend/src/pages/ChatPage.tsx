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

const ChatPage: React.FC = () => {
    

    const {id} = useParams();
    const dispatch = useAppDispatch();
    

    const getChatInfoStatus = useAppSelector(chatSelectors.selectLoadingStatus);
    const messages = useAppSelector(chatSelectors.selectMessages)
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
            <HeaderChat titleHeader={'Чат #'+((parseInt(id?? '')) +1)} 
                contentHeader={companion.name + ' '+ companion.role} 
                status='статус'/>
                {getChatInfoStatus == RequestStatus.LOADING ? <PageLoader/> : <ChatCanvas messages={messages}/>}
            <MainInputChat/>
        </div>
    )
}

export default ChatPage;