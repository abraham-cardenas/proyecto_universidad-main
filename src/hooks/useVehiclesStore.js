import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { calendarApi } from '../api';
import {onLoadVehicles} from '../store/vehiculos/VehiculoSlice';

export const useVehiclesStore = () => {
    
    const dispatch=useDispatch();
    const{vehiculos} = useSelector(state=> state.vehicle);
    const startLoadingVehicles=async()=>{

        try {
            const { data } = await calendarApi.get('/api/vehiculos/');
            console.log(data)
            dispatch(onLoadVehicles(data.vehiculos));
          } catch (error) {
      
          }

    }
    const StartSavingVehicle = async (vehiculos) => {

        try {

            const { data } = await calendarApi.post('/api/vehiculos', vehiculos);

        } catch (error) {
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }

    }
    return{
        StartSavingVehicle,
        vehiculos,
        startLoadingVehicles       

    }
 
}
