import Direct from "../pages/Direct";
import Explore from "../pages/Explore";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import { 
    DIRECT_ROUTE, 
    EXPLORE_ROUTE, 
    HOME_ROUTE, 
    LOGIN_ROUTE, 
    PROFILE_ROUTE, 
    REGISTER_ROUTE 
} from "../utils/consts";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTER_ROUTE,
        Component: Register
    }
]

export const privateRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: DIRECT_ROUTE,
        Component: Direct
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    },
    {
        path: EXPLORE_ROUTE,
        Component: Explore
    },
]
