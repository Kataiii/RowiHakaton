import { Navigate } from "react-router-dom";
import { AUTH_ROUTE_PATH } from "../constatns";
import { useAppSelector } from "../../store/store";
import { viewerSelectors } from "../../store/slices/viewer";


interface AuthGuardProps {
    children: React.ReactElement;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
    const isAuthorized = useAppSelector(viewerSelectors.selectIsAuth);

    return (
        isAuthorized
            ? children
            : <Navigate to={AUTH_ROUTE_PATH} replace />
    )
}

export default AuthGuard;