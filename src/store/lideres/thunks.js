import { actulizarData, borrarData, crearLider, getLoadLiders} from "../../mongo/provider";
import { addNewLider, deleteLiderid, loadLideres, updateLider} from "./liderSlice";

//////////////////////////////////////////////////////////////////
export const starLoadLiders =()=>{
    return async(dispatch) =>{
        const {ok,data}= await getLoadLiders();
        dispatch(loadLideres(data.lider));
        return ok;             
    }
}
//////////////////////////////////////////////////////////////////
export const deletLider = (props)=>{
    return async(dispatch)=>{
        const {ok,data}= await borrarData(props.id);             
        dispatch(deleteLiderid(data.id));
        return ok;          
    }
}
//////////////////////////////////////////////////////////////////
export const updLider = (props)=>{
    return async(dispatch)=>{
        const {ok,data}= await actulizarData(props); 
        dispatch(updateLider(data));
        return ok;          
    }      
}
//////////////////////////////////////////////////////////////////
export const newLider = (props)=>{
    return async(dispatch)=>{
        const {ok,data}= await crearLider(props.newData); 
        dispatch(addNewLider(data));
        return ok;          
    }      
}