import { useDispatch, useSelector } from "react-redux"
import { onCloseLabModal, onOpenLabModal } from "../store/ui/uiSlice";


export const usemodalStore = ()=>{ 

    const dispatch = useDispatch();
////////////////////////////////////////////////////////////////    
    const {activeSala} = useSelector(state=>state.salasSlice);     
////////////////////////////////////////////////////////////////        
    const {isLabModalOpen} =useSelector(state=>state.ui);      
////////////////////////////////////////////////////////////////    
    const openLabModal = ()=>{
        dispatch(onOpenLabModal());
    }
////////////////////////////////////////////////////////////////
    const closeLabModal = ()=>{
        dispatch(onCloseLabModal());
}
    
    return {
        isLabModalOpen,
        activeSala,
        openLabModal,
        closeLabModal
    }
}