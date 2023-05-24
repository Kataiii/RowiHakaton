import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";
import { selectIsManager } from "../../store/slices/viewer/selectors";


interface RoleGuardProps {
    children: React.ReactElement;
}

const RoleGuard: React.FC<RoleGuardProps> = ({ children }) => {
    
    const isManager = useAppSelector(selectIsManager);

    return (
        isManager
            ? children
            : <Navigate to={'-1'} replace />
    )
}

export default RoleGuard;