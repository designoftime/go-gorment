import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../reducers/authSlice";
import storeSettings from "../reducers/storeSettings";

const store = configureStore({
    reducer: {
        auth: authSlice,
        storeSettings: storeSettings
    }
});

export default store;