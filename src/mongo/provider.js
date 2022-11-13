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
export const starLoadalltSalas=async()=>{
    try {
        const resp = await laboratorioApi.get('/salas');
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
export const sendImage=async({coleccion,id})=>{
    try {

        const resp = await laboratorioApi.get(`/uploads/${coleccion}/${id}`);

        const data = resp.data;
        console.log(data);
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