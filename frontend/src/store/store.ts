import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { socketMiddleware } from "./middlewares/socketMiddleware";
import { viewerReducer } from "./slices/viewer/";
import { chatsReducer } from "./slices/pool-of-chats";
import { chatReducer } from "./slices/chat";



const rootReducer = combineReducers({
    viewerReducer,
    chatsReducer,
    chatReducer
});


const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
            .prepend(socketMiddleware)
    });
}

export const store = setupStore();
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']