import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import basketSlice from "./slices/basketSlice";
const store = configureStore({
    reducer: {
        productSlice,
        basketSlice
    }
})

export default store