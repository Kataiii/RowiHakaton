import React, { useEffect, useMemo } from 'react';
import { Button, Input, Space, Tabs } from 'antd';
import styles from './css/ChatListPage.module.css';
import { useAppDispatch, useAppSelector } from '../store/store';
import { chatsSelectors } from '../store/slices/pool-of-chats';
import { ChatsContainer } from '../components/ChatsContainer';
import { selectGetClosedStatus, selectGetOpenedStatus } from '../store/slices/pool-of-chats/selectors';
import { RequestStatus } from '../lib/requestStatus';
import { getClosedChats, getOpenedChats } from '../store/slices/pool-of-chats/asyncActions';
import { ChatsClosedPage } from './ChatsClosedPage';
import { ChatsOpenedPage } from './ChatsOpenedPage';

const { Search } = Input;

type TabBarKey = 'closed' | 'opened';
interface TabBarItem {
    key: TabBarKey,
    label: string,
    children: React.ReactElement
}


const ChatsPage: React.FC = () => {
    const onSearch = (value: string) => console.log(value);

    const tabs = useMemo<TabBarItem[]>(() => [
        {
            key: 'opened',
            label: 'Активные чаты',
            children: <ChatsOpenedPage />
        },
        {
            key: 'closed',
            label: 'Закрытые чаты',
            children: <ChatsClosedPage />
        },
    ], []);



    return (
        <div>
            <div className={styles.SearchDivWrap}>
                <Search className={styles.SearchDiv} placeholder="Поиск" onSearch={onSearch}
                    style={{ borderRadius: '35px' }} />
            </div>
            <div className={styles.AppDiv}>
                <Tabs className={styles.Tabs}
                    defaultActiveKey="1"
                    type="card"
                    size={'middle'}
                    items={tabs}
                />
            </div>
        </div>
    )
}

export default ChatsPage;