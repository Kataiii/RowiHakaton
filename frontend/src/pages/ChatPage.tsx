import React from 'react';
import { useParams } from 'react-router-dom';
import ChatCanvas from '../components/ChatCanvas';
import HeaderChat from '../components/HeaderChat';


const ChatPage: React.FC = () => {

    const {id} = useParams();


    return(
        <div>
            <HeaderChat titleHeader='ФИО' contentHeader='Должность' status='статус'/>
            <ChatCanvas/>
        </div>
    )
}

export default ChatPage;