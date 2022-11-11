import { createSlice } from '@reduxjs/toolkit';
export const EmpresaSlice = createSlice({
    name: 'Empresa',
    initialState: {
        empresas: [],
        isLoadingempresas: true,
        activeEmpresa: null

    },
    reducers: {
        onSetActiveEmpresa: (state, { payload }) => {
            state.activeEmpresa = payload;

        },

        onLoadEmpresas: (state, { payload = [] }) => {
           state.isLoadingempresas = false;
           state.empresas=payload;

        
           


        },
        onDeleteEmpresa: (state) => {
            if (state.activeEmpresa) {
                state.empresas = state.empresas.filter(empresa => empresa.id !== state.activeEmpresa.id);
                state.activeEmpresa = null;
            }
        },
        onUpdateEmpresa: (state, { payload }) => {
            state.empresas = state.empresas.map(empresa => {
                if (empresa.id == payload.id) {
                    return payload;

                }
                return empresa;
            });
        },

    }
});


// Action creators are generated for each case reducer function
export const { onLoadEmpresas,onDeleteEmpresa, onSetActiveEmpresa, onUpdateEmpresa } = EmpresaSlice.actions;