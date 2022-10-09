import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem(state, action) {
            const newItem =action.payload
            const existingItem = state.cartItems.find((item) => item.id = newItem.id) 
            state.totalQuantity++;
            if(!existingItem){
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    image01: newItem.image01,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }else {
                newItem.quantity++;
                newItem.totalPrice = newItem.totalPrice + (newItem.price * newItem.quantity)
            }
            state.totalPrice =state.cartItems.reduce((total, item) => {
                return total = total + (item.price * item.quantity)
            })
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;
