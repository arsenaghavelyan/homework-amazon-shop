import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../lib/data"

const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        products: data,
    },
    reducers: {
        increaseProdCount(state, { payload }) {
            const isSelected = state.products.find((el) => el.id === payload.id)
            if (isSelected.count > 0) {
                isSelected.count--
                isSelected.basketCount++
            }
            
            // console.log(isSelected.basketCount);
        },
        decreaseProdCount(state, { payload }) {
            const isSelected = state.products.find((el) => el.id === payload.id)
            isSelected.count++
            isSelected.basketCount--
        }
    }
})

export default productSlice.reducer
export const { increaseProdCount, decreaseProdCount } = productSlice.actions
export const selectProduct = ((state) => state.productSlice.products) 