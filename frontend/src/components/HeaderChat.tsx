import Back from '../assets/images/icons/icon-back.svg';
import styles from './css/HeaderChat.module.css';
import { useNavigate } from 'react-router-dom';

interface HeaderChatProps{
    titleHeader: string;
    contentHeader: string;
    status: string;
}

const HeaderChat = (props: HeaderChatProps) => {
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate(-1)
    }

    return(
        <div className={styles.Header}>
            <div className={styles.HeaderDiv}>
                <img className={styles.Image} src={Back} alt='back' onClick={onClickHandler}></img>
                <div>
                    <div className={styles.HeaderDiv}>
                        <h1 className={styles.HeaderTitle}>{props.titleHeader}</h1>
                        <div className={styles.HeaderContentDiv}>
                            <p className={styles.HeaderContent}>{props.contentHeader}</p>
                        </div>
                    </div>
                    <div>
                        <p className={styles.HeaderContent}>{props.status}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderChat;