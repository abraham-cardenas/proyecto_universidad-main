import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { calendarApi } from '../api';

import {onLoadConductores}from '../store/conductores/ConductorSlice';

export const useConductorStore = () => {
    
    const dispatch=useDispatch();
    const{conductores} = useSelector(state=> state.conductor);
    const startLoadingConductores=async()=>{

        try {
            const { data } = await calendarApi.get('/api/conductor/');
            console.log(data)
            dispatch(onLoadConductores(data.conductores));
          } catch (error) {
      
          }

    }
    const StartSavingConductor = async (conductores) => {

        try {

            const { data } = await calendarApi.post('/api/conductor', conductores);

        } catch (error) {
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
            
        }

    }
    return{
       
        startLoadingConductores,
        StartSavingConductor,
        conductores     

    }
 
}
