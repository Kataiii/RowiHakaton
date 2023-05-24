import MainInputChat from "./MainInputChat";
import styles from './css/Button.module.css';


const ManagerInput = () => {
    return(
        <div>
            <div className={styles.BtnWrap}>
                <button className={styles.MainBtn}>Перенаправить</button>
                <button className={styles.MainBtn}>Завершить сессию</button>
            </div>
            <MainInputChat/>
        </div>
    )
}

export default ManagerInput;