import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { starLoadrecolector } from '../../store';

import { useLiderStore } from '../../hook/useLiderStore';
import MUIDataTable from "mui-datatables";


export const Recoleccion = () => {
  const dispatch = useDispatch();
  const[data,setdata] =useState(["1","1","15","87248875","Fabio Realpe","Sin novedad","1"]);
  const{inforecolector} = useLiderStore(); 
///////////////////////////////////////////////////
  useEffect(() => {
    dispatch(starLoadrecolector());   
    new Promise ((resolve, reject) => {
      setTimeout(() => {
        {          
          setdata(inforecolector);      
        }
        resolve();
      },100);     
    });

},[inforecolector,setdata]);  
///////////////////////////////////////////////////
  const columns = [ 
    {title:"Tomo",name:"codigo",type:"string"}, 

    {title:"Folio",name:"recolector",type:"string"}, 

    {title:"Renglon",name:"tomo",type:"string"},  

    {title:"Fila",name:"etiquetas_de_fila",type:"string"}, 

    {title:"Nombres",name:"uniprocedencia_en_cedula",type:"string"}, 

    {title:"Evaluación",name:"analizado_sin_novedad",type:"string"}, 

    {title: "Tipo",name:"cedula_ilegible",type:"string"},  

    {title: "Tipo",name:"cedula_no_corresponde",type:"string"}, 
    
    {title: "Tipo",name:"casilla_en_blanco",type:"string"}, 

    {title: "Tipo",name:"no_archivo",type:"string"}, 

    {title: "Tipo",name:"no_en_censo_nacional",type:"string"}, 

    {title: "Tipo",name:"nombre_ilegible",type:"string"}, 

    {title: "Tipo",name:"nombre_ Incompleto",type:"string"}, 

    {title: "Tipo",name:"registro_duplicado",type:"string"},    
    
    {title: "Tipo",name:"renglon_en_blanco",type:"string"},  
    
  ];


///////////////////////////////////////////////////  
  return(
    <Container>
      <MUIDataTable
          columns={columns}
          data={data}
          title="Recolectores"
                  
      />
    </Container>
  )
}
