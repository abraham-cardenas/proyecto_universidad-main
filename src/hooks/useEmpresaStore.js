import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { calendarApi } from '../api'
import { onLoadEmpresas } from '../store/empresa/EmpresaSlice';

export const useEmpresaStore = () => {

    const dispatch= useDispatch();
    const{empresas} = useSelector(state=> state.empresa);
    const startLoadingEmpresas=async()=>{

        try {
            const { data } = await calendarApi.get('/api/empresa/');
            console.log(data)
            dispatch(onLoadEmpresas(data.empresa));
      
      
          } catch (error) {
      
          }

        

    }

    const StartSavingEmpresa = async (empresa) => {

        try {

            const { data } = await calendarApi.post('/api/empresa', empresa);

        } catch (error) {
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }

    }
    return {
        StartSavingEmpresa,
        empresas,
        startLoadingEmpresas

    }
}
