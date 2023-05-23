import { Outlet, createBrowserRouter, redirect } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ChatsPage from "../pages/ChatListPage";
import ChatPage from "../pages/ChatPage";
import { AUTH_ROUTE_PATH, CHATS_ROUTE_PATH, CHAT_ROUTE_PATH } from "./constatns";
import { authLoader } from "./guard/authLoader";

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => {
      const isAuth = false;
      return redirect(isAuth
        ? `/${CHATS_ROUTE_PATH}`
        : `/${AUTH_ROUTE_PATH}` 
      );
    }
  },
  {
    path: AUTH_ROUTE_PATH,
    element: <div>sfsf</div>,
  },
  {
    path: CHATS_ROUTE_PATH,
    element: <ChatsPage />,
    loader: authLoader
  },
  {
    path: CHAT_ROUTE_PATH,
    element: <ChatPage />,
    loader: authLoader
  }

]);

export default router;