import { createSlice } from "@reduxjs/toolkit";

const cartsSlice = createSlice({
    
    name: "carts",

    initialState: {
        carts : []
    },

    reducers: {
        addCart : (state, action) => {
            state.carts.push(action.payload);
        },

        deleteCart: (state,action) => {
            state.carts = state.carts.filter((eachCart) => eachCart.attribue !== action.attribute);
        }
    }
});

export const { addCart, deleteCart } = cartsSlice.actions;
export default cartsSlice.reducer;