import { configureStore } from "@reduxjs/toolkit";
import { uiSlice,authSlice, VehiculoSlice } from "./";

export const store=configureStore({
    reducer:{
        auth: authSlice.reducer,
        ui:uiSlice.reducer,
        vehicle: VehiculoSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false
    })
})