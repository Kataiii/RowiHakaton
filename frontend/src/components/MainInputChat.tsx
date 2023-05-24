import Smile from '../assets/images/icons/icon-smile.svg';
import Clip from '../assets/images/icons/icon-clip.svg';
import Send from '../assets/images/icons/icon-send.svg';
import { Input } from 'antd';
import styles from './css/MainInputChat.module.css';
import {useState} from 'react';


const MainInputChat = () => {
    const [text, setTextState] = useState('');
    
    const onClickHandler = () => {
        console.log(text);
    }

    return(
        <div className={styles.DivMainInpit}>
            <img className={styles.Icon} src={Clip} alt='clip'></img>
            <Input onChange={e => setTextState(e.target.value)} placeholder="Введите ваше сообщение..." />
            <img className={styles.Icon} src={Smile} alt='smile'></img>
            <button className={styles.SendBtn} onClick={onClickHandler}>Отправить</button>
        </div>
    )
}

export default MainInputChat;