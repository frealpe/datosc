import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
   name: 'auth',
   initialState: {
        status:'checking', //'checking', 'authe'
        uid: null,
        correo: null,
        nombre:null,
        //photoURL: null,
        errorMessage: null    
},
reducers: {
        login: ( state, { payload } ) => {
                state.status = 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
                state.uid = payload.uid;
                state.correo = payload.correo;
                state.nombre = payload.nombre;
//                state.photoURL = payload.photoURL;
                state.errorMessage = null;
            },
        logout: ( state, { payload } ) => {
                state.status = 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
                state.uid = null;
                state.correo = null;
                state.nombre = null;
//                state.photoURL = null;
                state.errorMessage = payload.errorMessage;
            },

        checkingCredentials: (state) =>{

                state.status='checking'

        }
}
});
export const { login,logout,checkingCredentials } = authSlice.actions;