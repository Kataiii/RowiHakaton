import { useEffect } from "react";
import { ChatsContainer } from "../components/ChatsContainer";
import { RequestStatus } from "../lib/requestStatus";
import { chatsSelectors } from "../store/slices/chat";
import { getOpenedChats } from "../store/slices/chat/asyncActions";
import { useAppDispatch, useAppSelector } from "../store/store";

export const ChatsOpenedPage: React.FC= () => {

    const openedChatsLoadingStatus = useAppSelector(chatsSelectors.selectGetOpenedStatus);
    const openedChats = useAppSelector(state => chatsSelectors.selectChats(state, false));

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getOpenedChats());
    }, [])

    return (
        <ChatsContainer chats={openedChats} isLoading = {openedChatsLoadingStatus == RequestStatus.LOADING}/>
    )
}