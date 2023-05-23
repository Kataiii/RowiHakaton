import { Outlet } from "react-router-dom";
import ChatPage from "../../pages/ChatPage";
import ChatsPage from "../../pages/ChatsPage";
import ErrorPage from "../../pages/ErrorPage";
import ProfilePage from "../../pages/ProfilePage";
import AuthGuard from "../guard/AuthGuard";

const HomeRouter = {
    path: '/home',
    element: 
        <AuthGuard>
            <Outlet context={[]}/>
        </AuthGuard>,
    errorElement: <ErrorPage/>,
    //TODO RoleGuard здесь?
    children: [
        {
            path: "/home/profile",
            element: <ProfilePage />
        },
        {
            path: '/home/chats',
            element: <ChatsPage/>
        },
        {
            path: '/home/chats/:id',
            element: <ChatPage/>
        }
        //TODO остальные роуты?
    ]
}

export default HomeRouter;