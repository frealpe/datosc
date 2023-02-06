import { createSlice } from '@reduxjs/toolkit';

//////////////////////////////////////////////////////////////
export const recolectorSlice = createSlice({
   name: 'recolectorSlice',
   initialState: {
        isLoading: true,
           inforecolector:[           
           ], 
           numeroRegistro:[
           ],
},
reducers: {
//////////////////////////////////////////////////////////////
    loadrecolector: (state,{payload=[]})=>{           
         payload.forEach(recolector => {       
            const exists = state.inforecolector.some(dbLider=>
            {
               if(dbLider.id === recolector.id) return true;             
               return false;            
            }
            );  
            if (!exists ) {
            state.inforecolector.push(recolector);
            }           
        }
        );
     },


}
});
export const {
    loadrecolector,
} = recolectorSlice.actions;