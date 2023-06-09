import { Navigate, Outlet, createBrowserRouter, redirect } from "react-router-dom";
import ChatsPage from "../pages/ChatListPage";
import ChatPage from "../pages/ChatPage";
import { AUTH_ROUTE_PATH, CHATS_ROUTE_PATH, CHAT_POOL_PATH, CHAT_QUESTION_PATH, CHAT_ROUTE_PATH, PROFILE_ROUTE_PATH } from "./constatns";
import AuthGuard from "./guard/AuthGuard";
import { HomeLayout } from "./layouts/HomeLayout";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
import RoleGuard from "./guard/RoleGuard";
import PoolChatsPage from "../pages/PoolChatsPage";
import QuestionPage from "../pages/QuestionPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthGuard children={<Navigate to = {CHATS_ROUTE_PATH}/>}/>
  },
  {
    path: AUTH_ROUTE_PATH,
    element: <LoginPage />,
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
        element: <ProfilePage />
      },
      {
        path: CHAT_POOL_PATH,
        element: <RoleGuard children={<PoolChatsPage/>} /> 
      },
      {
        path:CHAT_QUESTION_PATH,
        element: <QuestionPage/>
      }
    ]
  }
]);

export default router;