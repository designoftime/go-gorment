import { createSlice } from "@reduxjs/toolkit";

const storeSettigsSlice =  createSlice({

    name: "storeSetting",

    initialState: {},

    reducers: {

        addStoreSetting: (state, action) => {
            state = action.payload
        }

    }

});

export const { addStoreSetting } = storeSettigsSlice.actions;
export default storeSettigsSlice.reducer;