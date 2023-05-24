import { Button, Input, Radio, RadioChangeEvent } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom"


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
        <div>
            <h1>Перенаправить в:</h1>
            <Radio.Group onChange={onChange} value={value}>
                <>
                    { 
                        projects.map((item, index) => {
                            <Radio value={index+1} key={index+1}>{item}</Radio>
                        })
                    }
                </>
            </Radio.Group>
            <p>Оставить комментарий:</p>
            <Input onChange={e => setTextState(e.target.value)} placeholder="Комментарий..." />
            <Button onClick={onClickHandler}>Перенаправить</Button>
        </div>
    )
}

export default RedirectModel;