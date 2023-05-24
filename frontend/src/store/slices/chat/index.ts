import { chatSlice } from "./slice";

export const chatReducer = chatSlice.reducer;
export * as chatSelectors from './selectors';
export * as chatAsyncActions from './asyncActions';