import styles from './css/FormLogin.module.css';
import { Input } from 'antd';
import PrimaryButton from './PrimaryButton';
import { Link } from 'react-router-dom';


const FormLogin = () => {
    return(
        <div className={styles.FormDiv}>
            <h1 className={styles.FormTitle}>Авторизация</h1>
            <div className={styles.FormWrapDiv}>
                <Input className={styles.FormInput} placeholder="Email" />
                <Input className={styles.FormInput} placeholder="Пароль" />
                <div className={styles.FormDivLink}>
                    <a className={styles.FormLink} href='#'>Забыли пароль?</a>
                </div>
            </div>
            <PrimaryButton action={() => console.log('Hello world')} content='Войти'/>
        </div>
    )
}

export default FormLogin;