import { useEffect } from "react";
import { ChatsContainer } from "../components/ChatsContainer";
import { RequestStatus } from "../lib/requestStatus";
import { chatsSelectors } from "../store/slices/chat";
import { getClosedChats } from "../store/slices/chat/asyncActions";
import { selectGetClosedStatus } from "../store/slices/chat/selectors";
import { useAppDispatch, useAppSelector } from "../store/store";


export const ChatsClosedPage: React.FC= () => {

    const closedChatsLoadingStatus = useAppSelector(chatsSelectors.selectGetClosedStatus);
    const closedChats = useAppSelector(state => chatsSelectors.selectChats(state, true));

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getClosedChats());
    }, [])

    return (
        <ChatsContainer chats={closedChats} isLoading = {closedChatsLoadingStatus == RequestStatus.LOADING}/>
    )
}