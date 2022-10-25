import { createSlice } from '@reduxjs/toolkit';
export const VehiculoSlice = createSlice({
    name: 'Vehiculo',
    initialState: {
        vehiculos: [],
        isLoadingVehicles: true,
    },
    reducers: {
        onLoadVehicles: (state, { payload = [] }) => {
            state.isLoadingVehicles = false;
           
            state.vehiculos= payload;
                
            
             
        },
    }
});


// Action creators are generated for each case reducer function
export const { onLoadVehicles } = VehiculoSlice.actions;