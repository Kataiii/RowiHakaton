import { Button, Input, Radio, RadioChangeEvent } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './css/Redirect.module.css';


const projects: string[] = [
    'Финансирование поставщиков маркетплейсов',
    'Кредит на исполнение госконтакта',
    'Факторинг',
    'Консультация'
]

const RedirectModel = () => {
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate('/chats');
        //TODO перенправление чата в другой пуш
    }

    const [value, setValue] = useState(1);
    const [text, setTextState] = useState('');

    const onChange = (e: RadioChangeEvent) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };

    return(
        <div className={styles.DivRed}>
            <div className={styles.Red}>
                <h1 className={styles.Title}>Перенаправить в:</h1>
                <Radio.Group className={styles.RadioGroup} onChange={onChange} value={value}>
                    <>
                        { 
                            projects.map((item, index) => {
                                return <Radio value={index+1} key={index+1}>{item}</Radio>
                            })
                        }
                    </>
                </Radio.Group>
                <p>Оставить комментарий:</p>
                <Input onChange={e => setTextState(e.target.value)} placeholder="Комментарий..." />
                <div className={styles.RedDivBtn}>
                    <Button className={styles.BtnRed} onClick={onClickHandler}>Перенаправить</Button>
                </div>
            </div>
        </div>
    )
}

export default RedirectModel;