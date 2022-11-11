import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { calendarApi } from '../api'
import { onLoadEmpresas, onDeleteEmpresa, onSetActiveEmpresa, onUpdateEmpresa } from '../store/empresa/EmpresaSlice';

export const useEmpresaStore = () => {

    const dispatch = useDispatch();
    const { empresas, activeEmpresa } = useSelector(state => state.empresa);

    const setActiveEmpresa = (empresa) => {
        dispatch(onSetActiveEmpresa(empresa));
        console.log(empresa)
    }

    const startLoadingEmpresas = async () => {

        try {
            const { data } = await calendarApi.get('/api/empresa/');
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

    const startUpdateEmpresa = async (empresa)=>{
        
        try {
            await calendarApi.put(`/api/empresa/${empresa.id}`, empresa);
            dispatch(onUpdateEmpresa({ ...empresa }));
            return;
        } catch (error) {
            Swal.fire('Error al guardar', error.response.data.msg, 'error');

        }
    }

    const startDeletingEmpresa = async (empresa) => {
        try {
           
            const { data } = await calendarApi.delete(`/api/empresa/${empresa.id}`);
            dispatch(onDeleteEmpresa());

        } catch (error) {
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }

    }
    return {
        StartSavingEmpresa,
        empresas,
        startLoadingEmpresas,
        startDeletingEmpresa,
        setActiveEmpresa,
        activeEmpresa,
        startUpdateEmpresa

    }
}
