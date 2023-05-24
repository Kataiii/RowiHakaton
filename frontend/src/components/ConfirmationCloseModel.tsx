import btnStyles from './css/Button.module.css';

const ConfirmationCloseModel = () => {
    return(
        <div>
            <h1>Ваш вопрос решили?</h1>
            <p>Получили ли вы ответ на поставленный вопрос? Если нет, мы направим вас к другому специалисту</p>
            <div>
                <button className={btnStyles.MainBtn}>Да</button>
                <button className={btnStyles.MainBtn}>Нет</button>
            </div>
        </div>
    )
}

export default ConfirmationCloseModel;