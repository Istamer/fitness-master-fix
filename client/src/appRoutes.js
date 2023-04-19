import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Registration from "./pages/registration/registration";
import About from "./pages/about/about";
import NoPage from "./pages/noPage/NoPage";
import Profile from "./pages/profile/profile";
import Gym from "./pages/gym/gym";
import {AddEx} from "./pages/addEx";
import GenTraining from "./pages/gym/genTraining";
import Delete from "./pages/delEx/delete";
import ProfilePurchase from "./pages/profilePurchase/profilePurchase";

const appRoutes = {
    login: {
        path: "/login",
        element: <Login />,
    },
    registration: {
        path: "/registration",
        element: <Registration />,
    },
    home: {
        path: "/",
        element: <Home />
    },

    about: {
        path: "/about",
        element: <About />
    },

    profile: {
        path: "/profile",
        element: <Profile />
    },

    gym: {
        path: "/gym",
        element: <Gym />
    },

    delete: {
        path: "/delete",
        element: <Delete />
    },

    profilePurchase: {
        path: "/profilePurchase",
        element: <ProfilePurchase />
    },

    genTraining: {
            path: (category) => `/genTraining/${category}`,
            element: <GenTraining/>
        },

    noPage: {
        path: "*",
        element: <NoPage/>
    },

    admin: {
        addEx: {
            path: "/admin/addEx",
            element: <AddEx/>
        }
    }
}

export default appRoutes;
