import { getrecolector} from "../../mongo/provider";
import { loadrecolector } from "./recolectorSlice";
//////////////////////////////////////////////////////////////////
export const starLoadrecolector =()=>{
    return async(dispatch) =>{
        const {data}= await getrecolector();
        dispatch(loadrecolector(data.registros));           
    }
} 
 