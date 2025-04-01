import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cart, mockCart } from '@/utils/util'

interface CartState {
    card: cart[],
    count: number,
    totalPrice: number
}

const initialState: CartState = {
    card: [],
    count: 0,
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state: CartState, action: PayloadAction<cart>) => {
            const newItem = action.payload;

            const existingItemIndex = state.card.findIndex((item) => item.id === newItem.id)

            if (existingItemIndex >= 0) {
                state.card[existingItemIndex].quantity += newItem.quantity;
            }else {
                state.card.push(newItem)
            }
            
            state.count += newItem.quantity;
            state.totalPrice += newItem.price * newItem.quantity;
        }
    }
})

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;