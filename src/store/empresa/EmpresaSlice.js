import { createSlice } from '@reduxjs/toolkit';
export const EmpresaSlice = createSlice({
    name: 'Empresa',
    initialState: {
        empresas: [],
        isLoadingempresas: true,
    },
    reducers: {
        
        onLoadEmpresas: (state, { payload = [] }) => {
            state.isLoadingempresas = false;
           
            state.empresas= payload;
                
            
             
        },
    }
});


// Action creators are generated for each case reducer function
export const { onLoadEmpresas } = EmpresaSlice.actions;