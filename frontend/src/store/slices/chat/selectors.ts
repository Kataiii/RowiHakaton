import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { RequestStatus } from "../../../lib/requestStatus";


export const selectMessages = createDraftSafeSelector(
    [(state: RootState) => state.chatReducer.info?.messages],
    (messgaes) => messgaes ?? []
);

export const selectCompanion = createDraftSafeSelector(
    [(state: RootState) => state.chatReducer.info?.companiom],
    (companion) => companion
);

export const selectLoadingStatus = createDraftSafeSelector(
    [(state: RootState) => state.chatReducer.getChatInfoStatus],
    (status) => status
)

export const selectSendingStatus = createDraftSafeSelector(
    [(state: RootState) => state.chatReducer.sendMessageStatus],
    (status) => status
);