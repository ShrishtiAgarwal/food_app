import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import cartSliceUi from "./cartSliceUi";

const store = configureStore(
    {
        reducer : {
            cart: cartSlice.reducer,
            cartUi: cartSliceUi.reducer
        }
    }
)

export default store
