import { useEffect } from "react";
import FormLogin from "../components/FormLogin";
import { selectIsAuth } from "../store/slices/viewer/selectors";
import { useAppSelector } from "../store/store";
import styles from './css/LoginPage.module.css';
import { useNavigate } from "react-router";
import { CHATS_ROUTE_PATH } from "../routing/constatns";

const LoginPage = () => {
    return(
        <div className={styles.LoginPageDiv}>
            <FormLogin/>
        </div>
    )
}

export default LoginPage;