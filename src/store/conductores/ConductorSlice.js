import { createSlice } from '@reduxjs/toolkit';
export const ConductorSlice = createSlice({
    name: 'Conductor',
    initialState: {
        conductores: [],
        isLoadingConductores: true,
    },
    reducers: {
        onLoadConductores: (state, { payload = [] }) => {
            state.isLoadingConductores = false;
           
            state.conductores= payload;
                
            
             
        },
    }
});


// Action creators are generated for each case reducer function
export const { onLoadConductores } = ConductorSlice.actions;