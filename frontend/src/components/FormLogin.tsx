import styles from './css/FormLogin.module.css';
import { Button, Form, Input } from 'antd';
import PrimaryButton from './PrimaryButton';

const FormLogin = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
            <div className={styles.FormDiv}>
                <h1 className={styles.FormTitle}>Авторизация</h1>
                <div className={styles.FormWrapDiv}>
                <Form.Item
                name="useremail"
                rules={[{ required: true, message: 'Введите email' },
                        { type: 'email', message: 'Неверный формат email'}]}
                >
                    <Input className={styles.FormInput} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="password"
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
                    <PrimaryButton action={() => console.log('Hello world')} content='Войти' />
                </Form.Item>
                </div>
            </div>
        </Form>
    )
}

export default FormLogin;