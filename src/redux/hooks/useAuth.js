import { useSelector } from "react-redux";
import { selectUser, selectIsLoggedIn, selectIsRefreshing } from "../auth/authSelectors";

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    const isRefreshing = useSelector(selectIsRefreshing);

    return {
        isLoggedIn,
        user,
        isRefreshing,
    };
};