import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: "basketSlice",
    initialState: {
        products: []
    },
    reducers: {
        onClickFN(state, { payload }) {
            state.products = payload.productsFilter
        }
    }
})

export const selectBasket = (state => state.basketSlice.products)
export default basketSlice.reducer
export const { onClickFN } = basketSlice.actions