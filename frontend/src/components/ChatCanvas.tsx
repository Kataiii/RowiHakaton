import { Message } from "../entities/Message";
import MessageBlock from "./Message";
import styles from './css/ChatCard.module.css'


const ChatCanvas = (props: { messages: Message[]}) => {
    return(
        <div className={styles.ChatLayout}>
            <>
                {
                    props.messages.map((item, index) => {
                        return <MessageBlock id={index} text={item.text} time={item.time} senderId={item.senderId}/>
                    })
                }
            </>
        </div>
    )   
}

export default ChatCanvas;