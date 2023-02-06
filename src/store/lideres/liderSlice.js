import { createSlice } from '@reduxjs/toolkit';

//////////////////////////////////////////////////////////////
export const liderSlice = createSlice({
   name: 'liderSlice',
   initialState: {
        isLoading: true,
           infolideres:[           
           ], 
           activeLider:[
           ],
},
reducers: {
//////////////////////////////////////////////////////////////
    loadLideres: (state,{payload=[]})=>{           
        state.isLoading = false;
        payload.forEach(lider => {       
            const exists = state.infolideres.some(dbLider=>
            {
               if(dbLider.id === lider.id) return true;             
               return false;            
            }
            );  
            if (!exists ) {
            state.infolideres.push(lider);
            }           
        }
        );
    },
//////////////////////////////////////////////////////////////    
    deleteLiderid:(state,{payload=[]})=>{
        state.isLoading = false;
        var ind=0;
        let data = state.infolideres;
         data.forEach((lider,index) => {        
                if(payload === lider.id) {
                    ind=index;                    
                } 
                return;             
            }
        );
        state.infolideres.splice(ind,1);
    },    
//////////////////////////////////////////////////////////////
    setLider:(state,{payload=[]})=>{  
    },
//////////////////////////////////////////////////////////////
    addNewLider: (state,payload=[])=>{
        console.log(payload);
        state.infolideres.push(payload.payload);
     },
//////////////////////////////////////////////////////////////    
//////////////////////////////////////////////////////////////    
    setSaving:(state)=>{

    },
//////////////////////////////////////////////////////////////    
    updateLider:(state,{payload})=>{        
    state.infolideres.map((dbLider,index)=>{
            if(dbLider.id === payload.id) {
                state.infolideres[index]=payload;
            }; 
         }
     )    
    },

//////////////////////////////////////////////////////////////    

}
});
export const {
    loadLideres,
    addNewLider,
    setActiveLider,
    setLider,
    setSaving,
    updateLider,
    deleteLiderid,
} = liderSlice.actions;