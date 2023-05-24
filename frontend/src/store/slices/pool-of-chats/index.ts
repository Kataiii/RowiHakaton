import { chatsSlice } from './slice';

export * as chatsSelectors from './selectors';
export * as chatsAsyncActions from './asyncActions';
export const chatsReducer = chatsSlice.reducer;