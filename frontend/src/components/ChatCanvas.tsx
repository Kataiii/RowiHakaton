import { Message } from "../entities/Message";
import MessageBlock from "./Message";
import styles from './css/ChatCard.module.css';
import { useAppSelector } from "../store/store";
import { viewerSelectors } from "../store/slices/viewer";
import { useLocation } from "react-router-dom";


const ChatCanvas = (props: { messages: Message[]}) => {
    const locate = useLocation();
    const role = useAppSelector(viewerSelectors.selectRole);

    const className = locate.pathname == '/question' 
        ? 
            styles.ChatLayoutQuestion 
        :
            role === 'client'
            ? 
                styles.ChatLayout 
            : 
                styles.ChatLayoutMan

    return(
        <div className={className}>
            <>
                {
                    props.messages.map((item, index) => {
                        return <MessageBlock id={index} text={item.text} time={item.time} senderId={item.senderId}/>
                    })
                }
            </>
        </div>
    )   
}

export default ChatCanvas;