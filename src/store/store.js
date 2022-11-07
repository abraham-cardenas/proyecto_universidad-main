import { configureStore } from "@reduxjs/toolkit";
import { uiSlice,authSlice} from "./";
import { EmpresaSlice } from "./empresa/EmpresaSlice";
import { VehiculoSlice } from "./vehiculos/VehiculoSlice";
import { ConductorSlice } from "./conductores/ConductorSlice";

export const store=configureStore({
    reducer:{
        auth: authSlice.reducer,
        ui:uiSlice.reducer,
        vehicle: VehiculoSlice.reducer,
        empresa:EmpresaSlice.reducer,
        conductor: ConductorSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false
    })
})