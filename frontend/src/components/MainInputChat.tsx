import Smile from '../assets/images/icons/icon-smile.svg';
import Clip from '../assets/images/icons/icon-clip.svg';
import Send from '../assets/images/icons/icon-send.svg';
import { Button, Input, InputRef } from 'antd';
import styles from './css/MainInputChat.module.css';
import {useEffect, useMemo, useRef, useState} from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { chatSelectors } from '../store/slices/chat';
import { RequestStatus } from '../lib/requestStatus';
import { sendMessage } from '../store/slices/chat/asyncActions';


const MainInputChat = () => {

    const [message, setMessage] = useState('');

    const dispatch = useAppDispatch();
    const sendingStatus = useAppSelector(chatSelectors.selectSendingStatus);

    const isSending = useMemo(() => sendingStatus == RequestStatus.LOADING, [sendingStatus]);
    const isSended = useMemo(() => sendingStatus == RequestStatus.SUCCESSFUL, [sendingStatus]);

    const isDisableSendButton = useMemo(() => isSending || !Boolean(message.trim()), [message, isSending]);

    useEffect(() => {
        if(isSended) setMessage('');
    }, [isSended])

    const onSend = () => {
        dispatch(sendMessage(message));
    }

    const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }

    return(
        <div className={styles.DivMainInpit}>
            <img className={styles.Icon} src={Clip} alt='clip'></img>
            <Input disabled = {isSending} value={message} onChange={onChangeMessage} placeholder="Введите ваше сообщение..." />
            <img className={styles.Icon} src={Smile} alt='smile'></img>
            <Button disabled = {isDisableSendButton} loading = {isSending} className={styles.SendBtn} onClick={onSend}>Отправить</Button>
        </div>
    )
}

export default MainInputChat;