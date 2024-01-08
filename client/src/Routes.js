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
import { Privacypolicy } from "./Components/PrivacyPolicy/Privacypolicy";
import Refundpolicy from "./Components/RefundPolicy/Refundpolicy";
import TermsofServices from "./Components/TermsofServices/TermsofServices";
import { ViewProduct } from "./Components/Shop/ViewProducts/ViewProduct";
import EmailVerification from "./Components/Accounts/EmailVerification/EmailVerification";
import { Ourstory } from "./Components/OurStory/Ourstory";
import { OneFeedsTwo } from "./Components/OneFeedsTwo/OneFeedsTwo";
import Checkout from "./Components/Checkout/Checkout";
import ContactUs from "./Components/ContactUs/ContactUs";
import { OrderHistory } from "./Components/Accounts/OrderHistory/OrderHistory";
import { Invoice } from "./Components/Invoice/Invoice";


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [{
                path: "/",
                element: <Home /> 
            },
            {
                path: "/collections/all",
                element: <Shop />
            },
            {
                path: "/accounts",
                children: [
                    {
                        path: "profile",
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
                        element: <EmailVerification />
                    },
                    {
                        path: "manage-subscription",
                        element: <ManageSubscription />
                    },
                    {
                        path: "reset-password",
                        element: <ResetPassword />
                    },
                    {
                        path: "order-history",
                        element: <OrderHistory/>
                    },
                    {
                        path: `invoice/:id`,
                        element: <Invoice/>
                    }
                ]
            },
            {
                path: "/policies",
                children: [
                    {
                        path: "privacy-policy",
                        element: <Privacypolicy />
                    },
                    {
                        path: "terms-of-service",
                        element: <TermsofServices />
                    },
                    {
                        path: "refund-policy",
                        element: <Refundpolicy />
                    }
                ]
            },
            {
                path: "/products/:productSlug",
                element: <ViewProduct />
            },
            {
                path: "/pages",
                children: [
                    {
                        path: "our-story",
                        element: <Ourstory />
                    },
                    {
                        path: "one-feeds-two",
                        element: <OneFeedsTwo />
                    },
                    {
                        path: "store-locator",
                        element: <ContactUs />
                    }
                ]
            },
            {
                path: "/checkouts",
                element: <Checkout />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
]);

export default appRouter;