import { createBrowserRouter } from "react-router-dom";
import { Login } from "./Components/Accounts/Ollys-Login/Login";
import { Shop } from "./Components/Shop/Shop";
import { Home } from "./Components/Home/Home";
import { CreateAccount } from "./Components/Accounts/CreateAccount/CreateAccount";
import { ForgotPassword } from "./Components/Accounts/ForgotPassword/ForgotPassword";
import { ManageSubscription } from "./Components/Accounts/ManageSubscription/ManageSubscription";
import ResetPassword from "./Components/Accounts/ResetPassword/ResetPassword";
import Profile from "./Components/Profile/Profile";
import NotFound from "./Components/ErrorPage/404Page";
import App from "./App";
import PrivateRoute from "./PrivateRoute";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [{
                path: "/",
                element: <Home /> 
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/accounts",
                children: [
                    {
                        path: "",
                        element: <PrivateRoute Component={Profile} />
                    },                    
                    {
                        path: "login",
                        element: <Login />
                    },
                    {
                        path: "register",
                        element: <CreateAccount />
                    },
                    {
                        path: "forgot-password",
                        element: <ForgotPassword />
                    },
                    {
                        path: "email-verification",
                        element: <ManageSubscription />
                    },
                    {
                        path: "manage-subscription",
                        element: <ManageSubscription />
                    },
                    {
                        path: "reset-password",
                        element: <ResetPassword />
                    }
                ]
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
]);

export default appRouter;