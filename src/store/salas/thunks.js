import { starLoadalltSalas} from "../../mongo/provider";
import { loadSala, setActiveSala } from "./salasSlice";


export const starLoadtSalas =(coleccion)=>{


    return async(dispatch) =>{
        const {ok,data}= await starLoadalltSalas();
        dispatch(loadSala(data.salas));        
        
    }
}

export const setActSala = (props)=>{
    //export const setActSala = (data)=>{    
    //    console.log(data);
    // console.log({id,descripcion,nombre,coleccion,laboratorista,labImageUrl});        
    return (dispatch)=>{
        dispatch(setActiveSala(props)); 
    }

}