import { useEffect } from "react";
import { ChatsContainer } from "../components/ChatsContainer";
import { RequestStatus } from "../lib/requestStatus";
import { chatsSelectors } from "../store/slices/pool-of-chats";
import { getClosedChats } from "../store/slices/pool-of-chats/asyncActions";
import { selectGetClosedStatus } from "../store/slices/pool-of-chats/selectors";
import { useAppDispatch, useAppSelector } from "../store/store";


export const ChatsClosedPage: React.FC= () => {

    const closedChatsLoadingStatus = useAppSelector(chatsSelectors.selectGetClosedStatus);
    const closedChats = useAppSelector(state => chatsSelectors.selectChats(state, true));

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getClosedChats());
    }, [])

    return (
        <ChatsContainer isActiveChats={false} chats={closedChats} isLoading = {closedChatsLoadingStatus == RequestStatus.LOADING}/>
    )
}