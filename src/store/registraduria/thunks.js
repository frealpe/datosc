import { getRegistraduria} from "../../mongo/provider";
import { loadRegistraduria } from "./registraduriaSlice";
//////////////////////////////////////////////////////////////////
export const starLoadRegistraduria =()=>{
    return async(dispatch) =>{
        const {total,data}= await getRegistraduria();
//        dispatch(loadRegistraduria({total,data}));   
        return data;        
    }
} 
 