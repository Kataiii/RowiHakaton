import styles from './css/FormLogin.module.css';
import { Button, Form, Input } from 'antd';
import PrimaryButton from './PrimaryButton';
import { useForm } from 'antd/es/form/Form';
import { useAppDispatch, useAppSelector } from '../store/store';
import { login } from '../store/slices/viewer/asyncActions';
import { viewerSelectors } from '../store/slices/viewer';
import { RequestStatus } from '../lib/requestStatus';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { CHATS_ROUTE_PATH } from '../routing/constatns';

const EMAIL_NAME = 'email';
const PASSWORD_NAME = 'password';
interface LoginFormState {
    [EMAIL_NAME]: string,
    [PASSWORD_NAME]: string
}

const FormLogin = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const isAuth = useAppSelector(viewerSelectors.selectIsAuth);
    const loginStatus = useAppSelector(viewerSelectors.selectLoginStatus);
    const errorText = useAppSelector(viewerSelectors.selectErrorText);

    useEffect(() => {
        if (isAuth) navigate(CHATS_ROUTE_PATH, { replace: true });
    }, [isAuth])

    const onFinish = (values: LoginFormState) => {
        dispatch(login({
            mail: values[EMAIL_NAME],
            password: values[PASSWORD_NAME]
        }));
    };

    return (
        <>
            <div>{errorText}</div>
            <Form
                onFinish={onFinish}
                autoComplete="off">
                <div className={styles.FormDiv}>
                    <h1 className={styles.FormTitle}>Авторизация</h1>
                    <div className={styles.FormWrapDiv}>
                        <Form.Item
                            name={EMAIL_NAME}
                            rules={[{ required: true, message: 'Введите email' },
                            { type: 'email', message: 'Неверный формат email' }]}
                        >
                            <Input className={styles.FormInput} placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            name={PASSWORD_NAME}
                            rules={[{ required: true, message: 'Введите пароль' }]}
                        >
                            <Input.Password className={styles.FormInput} placeholder="Пароль" />
                        </Form.Item>
                        <div className={styles.FormDivLink}>
                            <a className={styles.FormLink} href='#'>Забыли пароль?</a>
                        </div>
                    </div>
                    <div className={styles.FormButtonWrap}>
                        <Form.Item>
                            <Button htmlType='submit' loading={loginStatus == RequestStatus.LOADING}>Войти</Button>
                            {/* <PrimaryButton content='Войти' /> */}
                        </Form.Item>
                    </div>
                </div>
            </Form>

        </>

    )
}

export default FormLogin;