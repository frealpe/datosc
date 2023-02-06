import laboratorioApi from "../api/laboratorioApi";
///////////////////////////////////////////////////////////////////////////////////////////
export const registerUserWithEmailpassword = async({correo,password,nombre})=>{
    
    const rol = "ADMIN_ROLE";

    try {
        const resp = await laboratorioApi.post('/usuarios',{correo,password,nombre,rol});
        const data = resp.data.usuario;
        return {
            ok: true, 
            uid: data.uid,nombre
        //Todo Enviar correo todo los datos 
        }        
    } catch (error) {
        const errorMessage = "El correo ya está en uso"; 

        return {
            ok: false,
            errorMessage,
        }
    }
}
///////////////////////////////////////////////////////////////////////////////////////////
export const loginUserWithEmailpassword = async({correo,password})=>{

    try {
        const resp= await laboratorioApi.post ('/auth/login',{correo,password});       

        return {
            ok: true, 
            uid: resp.data.usuario.uid,
            token: resp.data.token,
            nombre: resp.data.usuario.nombre
        }    

    } catch (error) {
        const errorMessage = "El correo o la contraseña no es válido";         

        return {
            ok: false,
            errorMessage,
        }
    }
}
///////////////////////////////////////////////////////////////////////////////////////////
export const renewAuthToken = async()=>{
    
    try {
        const resp = await laboratorioApi.post('/auth/renew');
        return{
            ok: true, 
            resp
        }
        //localStorage.setItem('token',data.token); 
        
    } catch (error) {
        const errorMessage = "El token no se puede actualizar";  

        localStorage.clear();       

        return {
            ok: false,
            errorMessage,
        }       
    }
}
///////////////////////////////////////////////////////////////////////////////////////////
export const getLoadLiders=async()=>{
    try {
        const resp = await laboratorioApi.get('/lider');
        const data = resp.data;        
        return{
            ok: true, 
            data
        }        
    } catch (error) {
        const errorMessage = "El token no se puede actualizar";  
        return {
            ok: false,
            errorMessage,
        }       
        
    }

}
///////////////////////////////////////////////////////////////////////////////////////////
export const actulizarData= async({id,nombre,celular,cedula,municipio})=>{

    try {
        const resp = await laboratorioApi.put(`/lider/${id}`,{nombre,celular,cedula,municipio});
        const data = resp.data;
        return{
            ok: true, 
            data
        }        
    } catch (error) {
        const errorMessage = "El token no se puede actualizar";  
        return {
            ok: false,
            errorMessage,
        }       
        
    }
}
///////////////////////////////////////////////////////////////////////////////////////////
export const borrarData= async(id)=>{

    try {
        const resp = await laboratorioApi.delete(`/lider/${id}`);      
        const data = resp.data
        return{
            ok: true, 
            data
        }        
    } catch (error) {
        const errorMessage = "El token no se puede actualizar";  
        return {
            ok: false,
            errorMessage,
        }       
        
    }
}

///////////////////////////////////////////////////////////////////////////////////////////
export const crearLider= async({nombre,celular,cedula,municipio})=>{

    try {
        const resp = await laboratorioApi.post('/lider/',{nombre,celular,cedula,municipio});
        const data = resp.data;
        console.log(data);
        return{
            ok: true, 
            data
        }        
    } catch (error) {
        const errorMessage = "El token no se puede actualizar";  
        return {
            ok: false,
            errorMessage,
        }       
        
    }
}
////////////////////////////////////////////////////////////////////////////////////////////
export const getRegistraduria=async()=>{
    try {
        //const resp = await laboratorioApi.get('/registraduria',{params:{desde:1,limite:10}});
        const resp = await laboratorioApi.get('/registraduria');        
        const data = resp.data.registro;
        const total = resp.data.totales;             
        return{
            total, 
            data
        }        
    } catch (error) {
        const errorMessage = "El token no se puede actualizar";  
        return {
            ok: false,
            errorMessage,
        }       
        
    }

}

////////////////////////////////////////////////////////////////////////////////////////////
export const getrecolector=async()=>{
    try {
        //const resp = await laboratorioApi.get('/recolector',{params:{desde:1,limite:10}});
        const resp = await laboratorioApi.get('/recolector');        
        console.log(resp);
        const data = resp.data;       
        return{
            data
        }        
    } catch (error) {
        const errorMessage = "El token no se puede actualizar";  
        return {
            ok: false,
            errorMessage,
        }       
        
    }

}