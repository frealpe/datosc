
import { useSelector } from 'react-redux';

export const useLiderStore = () => {
  
    const {infolideres} =useSelector(state=>state.lideres);      
    const {inforegistros,numeroRegistro} =useSelector(state=>state.registraduria);    
    const {inforecolector} =useSelector(state=>state.recolectores);    
   
    return{
        infolideres,
        inforegistros,
        inforecolector,
        numeroRegistro      
    } 
  
}
