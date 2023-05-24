import styles from './css/FormLogin.module.css';
import btnStyle from './css/Button.module.css';
import { Button, Form, Input } from 'antd';
import { useAppDispatch, useAppSelector } from '../store/store';
import { login } from '../store/slices/viewer/asyncActions';
import { viewerSelectors } from '../store/slices/viewer';
import { RequestStatus } from '../lib/requestStatus';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { CHATS_ROUTE_PATH } from '../routing/constatns';
import Loader from './PageLoader';

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
                            <Button style={{backgroundColor: '#4164EE',
                                borderRadius: '48px',
                                fontFamily: 'Inter',
                                fontWeight: 500,
                                fontStyle: 'normal',
                                fontSize: '16px',
                                color: '#FEFEFE',
                                padding: '0px 140px',
                                border: 'none'
                                }} htmlType='submit' loading={loginStatus == RequestStatus.LOADING}>Войти</Button>
                        </Form.Item>
                    </div>
                </div>
            </Form>

        </>

    )
}

export default FormLogin;