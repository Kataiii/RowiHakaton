import { useNavigate } from 'react-router-dom';
import styles from './css/ChatCard.module.css';
import { CHATS_ROUTE_PATH, PROFILE_ROUTE_PATH } from '../routing/constatns';


export interface ChatCardProps{
    id: number;
    name: string;
    post: string;
    lastMessageContent: string;
    time: Date;
}

const ChatCardClose = (props: ChatCardProps) => {
    
    const {id} = props;

    const navigate = useNavigate();

    const onChatItemClick = () => navigate(`${CHATS_ROUTE_PATH}/${id}`,)

    return(
        <div className={styles.DivChatCard} onClick={onChatItemClick} style={{cursor: 'pointer'}}>
            <div className={styles.DivTitleWrap}>
                <h1 className={styles.DivChatTitle}>Чат</h1>
                <h1 className={styles.DivChatTitleNumber}>#{id + 1}</h1>
            </div>
            <h1 className={styles.DivChatTitleMessage}>{props.lastMessageContent}</h1>
            <div className={styles.DivTimeWrap}>
                <p className={styles.DivChatTime}>{props.time.toLocaleDateString("ru")}</p>
                <p className={styles.DivChatTime}>{props.time.toLocaleTimeString("ru")}</p>
            </div>
        </div>
    )
}

export default ChatCardClose;