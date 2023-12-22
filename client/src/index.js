import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'animate.css';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Google Login
import { GoogleOAuthProvider } from '@react-oauth/google';

// Redux Store
import { Provider } from 'react-redux';
import store from './Redux/Store/Store';

import appRouter from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
    <Provider store={store}>
        <ToastContainer />
        <RouterProvider router={appRouter} />
    </Provider>
  </GoogleOAuthProvider>
);

reportWebVitals();
