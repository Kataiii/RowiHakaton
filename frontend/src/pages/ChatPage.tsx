import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ChatCanvas from '../components/ChatCanvas';
import HeaderChat from '../components/HeaderChat';
import { useAppDispatch } from '../store/store';
import { getChatInfo } from '../store/slices/chat/asyncActions';


const ChatPage: React.FC = () => {

    const {id} = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getChatInfo(Number.parseInt(id ?? '')));
    }, [])

    return(
        <div>
            <HeaderChat titleHeader='ФИО' contentHeader='Должность' status='статус'/>
            <ChatCanvas/>
        </div>
    )
}

export default ChatPage;