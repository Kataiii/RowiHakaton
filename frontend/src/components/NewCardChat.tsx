import { Chat } from "../entities/Chat";
import btnStyle from './css/Button.module.css';
import { useNavigate } from "react-router-dom";
import styles from './css/NewCardChat.module.css';

const NewCardChat = (props: Chat) => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate('/chats/'+props.id);
    }

    return(
        <div className={styles.CardDiv}>
            <div className={styles.CardTitleWrap}>
                <h1 className={styles.CardTitle}>{props.title}#{props.id + 1}</h1>
                <p className={styles.CardContent}>{props.lastSenderName}</p>
            </div>
            <div>
                <p className={styles.Content}>{props.lastMessage}</p>
            </div>
            <div className={styles.DivButton}>
                 <button className={btnStyle.Button} onClick={onClickHandler}>Подключиться к чату</button>
            </div>
        </div>
    )
}

export default NewCardChat;