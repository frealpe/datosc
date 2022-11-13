
import { useSelector } from 'react-redux';

export const useLaboratorioStore = () => {
  
    const {infosala,activeSala} =useSelector(state=>state.salasSlice);      
   
    return{
        infosala,
        activeSala
    } 
  
}
