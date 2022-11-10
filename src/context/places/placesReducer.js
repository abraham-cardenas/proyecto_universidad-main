import { PlacesState } from "./PlacesProvider";



export const placesReducer = (state, action) => {
  switch (action.type) {
    case "setUserLocation":
      return {
        ...state,
        userLocation: action.payload,
        isLoading:false
      };
    case 'setLoadingPlaces':
      return{
        ...state,
        isLoadingPlaces:true,
        places:[]
      };
    case 'setPlaces':
      return{
        ...state,
        isLoadingPlaces:false,
        places:action.payload
      }

    default:
      return state;
  }
};
