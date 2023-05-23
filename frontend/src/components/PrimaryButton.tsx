import styles from './css/Button.module.css'


interface ButtonProps{
    content: string;
    action?: () => void;
}

const PrimaryButton = (props: ButtonProps) => {
    return(
        <div>
            <button className={styles.PrimaryButton} onClick={props.action}>{props.content}</button>
        </div>
    )
}

export default PrimaryButton;