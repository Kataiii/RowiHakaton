import MainInputChat from "./MainInputChat";
import styles from './css/Button.module.css';
import {useState} from 'react';
import RedirectModel from "./RedirectModel";


const ManagerInput = () => {
    const [isVisible, setVisibleState] = useState(false);

    const onClickHandler = () => {
        setVisibleState(true);
    }

    return(
        <div>
            <div className={styles.BtnWrap}>
                <button onClick={onClickHandler} className={styles.MainBtn}>Перенаправить</button>
                <button className={styles.MainBtn}>Завершить сессию</button>
            </div>
            <MainInputChat/>
            {
                isVisible
                ?
                <RedirectModel/>
                :
                <div></div>
            }
        </div>
    )
}

export default ManagerInput;