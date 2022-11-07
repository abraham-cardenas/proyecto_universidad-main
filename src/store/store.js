import { configureStore } from "@reduxjs/toolkit";
import { uiSlice,authSlice} from "./";
import { EmpresaSlice } from "./empresa/EmpresaSlice";
import { VehiculoSlice } from "./vehiculos/VehiculoSlice";

export const store=configureStore({
    reducer:{
        auth: authSlice.reducer,
        ui:uiSlice.reducer,
        vehicle: VehiculoSlice.reducer,
        empresa:EmpresaSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false
    })
})