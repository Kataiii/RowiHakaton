import FormLogin from "../components/FormLogin";
import styles from './css/LoginPage.module.css';

const LoginPage = () => {
    return(
        <div className={styles.LoginPageDiv}>
            <FormLogin/>
        </div>
    )
}

export default LoginPage;