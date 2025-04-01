import cartSlice from "@/features/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        cart: cartSlice
    },
});

// RootState ve AppDispatch tiplerini çıkar
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;