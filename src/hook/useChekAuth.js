import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { chekingAuthToken } from "../store/auth";

///////////////////////////////////////////////////////////////////////////////
export const chekingAuth=()=>{
    const dispatch = useDispatch();
    const { status } = useSelector( state => state.auth );
    useEffect(() => {
        dispatch(chekingAuthToken());
    },[]);

    return status;
}
///////////////////////////////////////////////////////////////////////////////