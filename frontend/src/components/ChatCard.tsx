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
//TODO сделать стили и нормально дату

const ChatCard = (props: ChatCardProps) => {

    const {id} = props;

    const navigate = useNavigate();

    const onChatItemClick = () => navigate(`${CHATS_ROUTE_PATH}/${id}`,)

    return(
        <div onClick={onChatItemClick} style={{cursor: 'pointer'}}>
            <h1>{props.name}</h1>
            <h2>{props.post}</h2>
            <p>{props.time.toDateString()}</p>
            <p>{props.lastMessageContent}</p>
        </div>
    )
}

export default ChatCard;