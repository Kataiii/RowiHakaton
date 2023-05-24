import { selectRole } from "../store/slices/viewer/selectors";
import { useAppSelector } from "../store/store";
import {Chat} from '../entities/Chat';
import NewCardChat from "../components/NewCardChat";
import styles from './css/PoolChatsPage.module.css';
import CardForManager from "../components/CardForManager";

const chats: Chat[] = [
    {
        id: 1,
        title: 'Чат',
        isClosed: false,
        lastMessage: 'Моя проблема, помогите ааааааа',
        lastSenderName: 'Фио пользователя',
        lastSenderRoleName: 'client'
    },
    {
        id: 2,
        title: 'Чат',
        isClosed: false,
        lastMessage: 'Моя проблема, помогите ааааааа',
        lastSenderName: 'Фио пользователя',
        lastSenderRoleName: 'client'
    },
    {
        id: 3,
        title: 'Чат',
        isClosed: false,
        lastMessage: 'Моя проблема, помогите ааааааа',
        lastSenderName: 'Фио пользователя',
        lastSenderRoleName: 'client'
    }
]

const PoolChatsPage = () => {

    const userRole = useAppSelector(selectRole) ?? 'client';

    return(
        <div>
            {
                userRole == 'consultant'
                ?
                <div className={styles.App}>
                    <>
                        {
                            chats.map((item, index) => {
                                return(
                                    <NewCardChat id={index}
                                                title={item.title}
                                                isClosed={item.isClosed}
                                                lastMessage={item.lastMessage}
                                                lastSenderName={item.lastSenderName}
                                                lastSenderRoleName={item.lastSenderRoleName}/>
                                )
                            })
                        }
                    </>
                </div>
                :
                <div className={styles.App}>
                    <>
                        {
                            chats.map((item, index) => {
                                return(
                                    <CardForManager chat={item} comment={'Комментарий консультанта'}/>
                                )
                            })
                        }
                    </>
                </div>
            }
        </div>
    )
}

export default PoolChatsPage;