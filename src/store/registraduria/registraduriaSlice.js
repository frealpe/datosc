import { createSlice } from '@reduxjs/toolkit';

//////////////////////////////////////////////////////////////
export const registraduriaSlice = createSlice({
   name: 'registraduriaSlice',
   initialState: {
        isLoading: true,
           inforegistros:[           
           ], 
           numeroRegistro:[
           ],
},
reducers: {
//////////////////////////////////////////////////////////////
    loadRegistraduria: (state,{payload=[]})=>{   
      console.log(payload.registro);        
        //state.registro = payload.total;
         payload.registro.forEach(lider => {       
            const exists = state.inforegistros.some(dbLider=>
            {
               if(dbLider.id === lider.id) return true;             
               return false;            
            }
            );  
            if (!exists ) {
            state.inforegistros.push(lider);
            }           
        }
        );
     },


}
});
export const {
    loadRegistraduria,
} = registraduriaSlice.actions;