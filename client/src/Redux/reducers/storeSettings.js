import { createSlice } from "@reduxjs/toolkit";

const storeSettigsSlice =  createSlice({

    name: "storeSettings",

    initialState: {},

    reducers: {

        addStoreSetting: (state, action) => {
            return action.payload;
        }

    }

});

export const { addStoreSetting } = storeSettigsSlice.actions;
export default storeSettigsSlice.reducer;