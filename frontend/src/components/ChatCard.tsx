import { useNavigate } from 'react-router-dom';
import styles from './css/ChatCard.module.css';
import { CHATS_ROUTE_PATH, PROFILE_ROUTE_PATH } from '../routing/constatns';


export interface ChatCardProps{
    id: number,
    name: string;
    post: string;
    lastMessageContent: string;
    time: Date;
}

const ChatCard = (props: ChatCardProps) => {

    const {id} = props;

    const navigate = useNavigate();

    const onChatItemClick = () => navigate(`${CHATS_ROUTE_PATH}/${id}`,)

    return(
        <div className={styles.DivCardOpen} onClick={onChatItemClick} style={{cursor: 'pointer'}}>
            <div className={styles.DivChatWrapOpen}>
                <h1 className={styles.DivChatTitle}>Чат</h1>
                <h1 className={styles.DivChatTitleNumber}>#{id + 1}</h1>
            </div>
            <h1 className={styles.DivLasMessage}>{props.lastMessageContent}</h1>
            <div className={styles.DivTimeWrap}>
                <p className={styles.DivChatTimeOpen}>{props.time.toLocaleDateString("ru")}</p>
                <p className={styles.DivChatTimeOpen}>{props.time.toLocaleTimeString("ru")}</p>
            </div>
        </div>
    )
}

export default ChatCard;