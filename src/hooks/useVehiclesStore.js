import { useDispatch, useSelector } from 'react-redux';
import { calendarApi } from '../api';
import {onLoadVehicles} from '../store';

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
    return{
        startLoadingVehicles,
        vehiculos

    }
 
}
