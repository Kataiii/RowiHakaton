import styles from './css/ChatCard.module.css';


export interface ChatCardProps{
    name: string;
    post: string;
    lastMessageContent: string;
    time: Date;
}


const ChatCard = (props: ChatCardProps) => {
    return(
        <div>
            <h1>{props.name}</h1>
            <h2>{props.post}</h2>
            <p>{props.time.toDateString()}</p>
            <p>{props.lastMessageContent}</p>
        </div>
    )
}

export default ChatCard;