import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    
    name: "auth",

    initialState: {},

    reducers: {

        setUser: (state,action) => {
            state.user = action.user
        }

    }

});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;

