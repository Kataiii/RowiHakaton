import { createBrowserRouter, redirect } from "react-router-dom";
import ChatsPage from "../pages/ChatListPage";
import ChatPage from "../pages/ChatPage";
import { AUTH_ROUTE_PATH, CHATS_ROUTE_PATH, CHAT_ROUTE_PATH, PROFILE_ROUTE_PATH } from "./constatns";
import AuthGuard from "./guard/AuthGuard";
import { HomeLayout } from "./layouts/HomeLayout";
import ProfilePage from "../pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => {
      const isAuth = false;
      return redirect(isAuth
        ? CHATS_ROUTE_PATH
        : AUTH_ROUTE_PATH,
      );
    }
  },
  {
    path: AUTH_ROUTE_PATH,
    element: <div>sfsf</div>,
  },
  {
    element: <AuthGuard children={<HomeLayout />} />,
    children: [
      {
        path: CHATS_ROUTE_PATH,
        element: <ChatsPage />,
      },
      {
        path: CHAT_ROUTE_PATH,
        element: <ChatPage />,
      },
      {
        path: PROFILE_ROUTE_PATH,
        element: <ProfilePage/>
      }
    ]
  }
]);

export default router;