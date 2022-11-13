import { createSlice } from '@reduxjs/toolkit';

//////////////////////////////////////////////////////////////
export const salasSlice = createSlice({
   name: 'salas',
   initialState: {
        isLoading: true,
           infosala:[
            
           ], 
           activeSala:[
           ],

},
reducers: {
//////////////////////////////////////////////////////////////
    loadSala: (state,{payload=[]})=>{    

        state.isLoading = false;
        payload.forEach(sala => {       
            const exists = state.infosala.some(dbSala=>
            {
               if(dbSala._id === sala._id) return true;             
               return false;            
            }
            );  

            if ( !exists ) {
            state.infosala.push(sala);
        }           
        });
    },
//////////////////////////////////////////////////////////////
    setActiveSala:(state,{payload=[]})=>{                 
          state.activeSala= payload;
    },
//////////////////////////////////////////////////////////////
    addNewSala: (state,actions)=>{

    },
//////////////////////////////////////////////////////////////    
    setSala:(state,actions)=>{

    },
//////////////////////////////////////////////////////////////    
    setSaving:(state)=>{

    },
//////////////////////////////////////////////////////////////    
    updateSala:(state,actions)=>{

    },
//////////////////////////////////////////////////////////////    
    deleteSalaid:(state,actions)=>{

    },
//////////////////////////////////////////////////////////////    

}
});
export const {
    loadSala,
    addNewSala,
    setActiveSala,
    setSalas,
    setSaving,
    updateSala,
    deleteSalaid,
} = salasSlice.actions;