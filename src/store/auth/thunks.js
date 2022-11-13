import { loginUserWithEmailpassword, registerUserWithEmailpassword, renewAuthToken } from "../../mongo/provider";
import { checkingCredentials } from "./";
import { login, logout } from "./authSlice";
///////////////////////////////////////////////////////////////////////////////


export const checkingAuthentication = (correo,password) => {

    return async(dispatch) =>{
            dispatch(checkingCredentials());
    }

}

///////////////////////////////////////////////////////////////////////////////
export const startGoogleSignIn=()=>{

    return async(dispatch) =>{
        dispatch(checkingCredentials());
    }

}
///////////////////////////////////////////////////////////////////////////////
export const startloginUserWithEmailPassword=({password,correo})=>{

    return async(dispatch) =>{
        dispatch(checkingCredentials({correo,password}));
        const {ok,uid,token,nombre,errorMessage} = await loginUserWithEmailpassword({password,correo});
        if(!ok) return dispatch(logout({errorMessage}))  
        localStorage.setItem('token',token);     
        dispatch( login( {uid,nombre,correo }));
    }
}
///////////////////////////////////////////////////////////////////////////////
export const startCreatingUserWithEmailPassword=({nombre,password,correo})=>{

    return async(dispatch) =>{
        dispatch(checkingCredentials({correo,password}));
        const {ok,uid,errorMessage} = await registerUserWithEmailpassword({nombre,password,correo});
        if(!ok) return dispatch(logout({errorMessage}))       
        dispatch( login( {uid,nombre,correo} ));

    }
  
}
///////////////////////////////////////////////////////////////////////////////
export const chekingAuthToken=()=>{

    return async(dispatch)=>{

        const token = localStorage.getItem('token');
        if (!token) return dispatch(logout({}));
        const{ok,nombre,uid,errorMessage} = await renewAuthToken();
        if(!ok) return dispatch(logout({errorMessage}))       
        localStorage.setItem('token',token); 
        dispatch( login( {uid,nombre,correo} ));
    }

} 
///////////////////////////////////////////////////////////////////////////////
export const startLogout=()=>{

    return async(dispatch)=>{
        localStorage.clear();        
        dispatch(logout({}))       
    }

} 
