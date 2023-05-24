import React, { useEffect, useMemo } from 'react';
import { Button, Input, Space, Tabs } from 'antd';
import styles from './css/ChatListPage.module.css';
import { useAppDispatch, useAppSelector } from '../store/store';
import { chatsSelectors } from '../store/slices/chat';
import { ChatsContainer } from '../components/ChatsContainer';
import { selectGetClosedStatus, selectGetOpenedStatus } from '../store/slices/chat/selectors';
import { RequestStatus } from '../lib/requestStatus';
import { getClosedChats, getOpenedChats } from '../store/slices/chat/asyncActions';
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
            label: 'активные чаты',
            children: <ChatsOpenedPage/>
        },
        {
            key: 'closed',
            label: 'закрытые чаты',
            children: <ChatsClosedPage/>
        },
    ], []);

    

    return (
        <div>
            <div className={styles.SearchDivWrap}>
                <Search className={styles.SearchDiv} placeholder="Поиск" onSearch={onSearch}
                    style={{ borderRadius: '35px' }} />
            </div>
            <Tabs
                defaultActiveKey="1"
                type="card"
                size={'middle'}
                items={tabs}
            />
        </div>
    )
}

export default ChatsPage;