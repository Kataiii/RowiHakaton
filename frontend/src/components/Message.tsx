import { Message } from "../entities/Message";
import { selectViwer } from "../store/slices/viewer/selectors";
import { useAppSelector } from "../store/store";
import styles from "./css/Message.module.css";


const MessageBlock = (props: Message) => {
    const userId = useAppSelector(selectViwer) ?? {
        id: 1,
        mail: 'mail@mail.ru',
        password: 'aaaaaa',
        name: 'Иванов Иван Иванович',
        token: 'saddddddddasdasdasdsadasdasdas',
        role: 'consultant'
    };

    return(
        <div className={userId.id == props.senderId? styles.DivWrapMy: styles.DivWrap}>
            <div className={userId.id == props.senderId? styles.DivMessageMy: styles.DivMessage}>
                <p className={userId.id == props.senderId? styles.MessageContentMy:styles.MessageContent}>{props.text}</p>
                <div className={styles.TimeDivWrap}>
                    <p className={styles.TimeDiv}>{props.time.toLocaleDateString('ru')+ ' ' + props.time.toLocaleTimeString('ru')}</p>
                </div>
            </div>
        </div>
    )
}

export default MessageBlock;