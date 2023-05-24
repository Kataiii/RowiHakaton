import { Chat } from "../entities/Chat";
import btnStyle from './css/Button.module.css';
import { useNavigate } from "react-router-dom";
import styles from './css/NewCardChat.module.css';

const CardForManager = (props: {chat: Chat, comment?:string}) => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate('/chats/'+props.chat.id);
    }

    return(
        <div className={styles.CardDiv}>
            <div className={styles.CardTitleWrap}>
                <h1 className={styles.CardTitle}>{props.chat.title}#{props.chat.id + 1}</h1>
                <p className={styles.CardContent}>{props.chat.lastSenderName}</p>
            </div>
            <div>
                <p className={styles.ContentManager}>
                    <p className={styles.ContentTitle}>Последнее сообщение пользователя:</p>
                    {props.chat.lastMessage}
                </p>
            </div>
            {
                props.comment !== undefined?
                <div>
                <p className={styles.ContentManager}>
                    <p className={styles.ContentTitle}>Комментарий:</p>
                    {props.comment}
                </p>
            </div>
                :
                <p></p>
            }
            <div className={styles.DivButton}>
                 <button className={btnStyle.Button} onClick={onClickHandler}>Подключиться к чату</button>
            </div>
        </div>
    )
}

export default CardForManager;