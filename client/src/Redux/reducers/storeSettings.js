import { createSlice } from "@reduxjs/toolkit";

const storeSettigsSlice =  createSlice({

    name: "storeSettings",

    initialState: {},

    reducers: {

        addStoreSetting: (state, action) => {
            return action.payload;
        },

        addCategories: (state, action) => {
            state.categories = action.payload;
        }

    }

});

export const { addStoreSetting, addCategories } = storeSettigsSlice.actions;
export default storeSettigsSlice.reducer;