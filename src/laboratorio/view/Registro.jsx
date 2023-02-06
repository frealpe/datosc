import { Container } from '@material-ui/core';
import { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { getData } from '../../helpers';


export const Registro = () => {
  const[data,setData] =useState([]);
///////////////////////////////////////////////////
  async function load (){
   const salida = await getData();
   const datos = salida.registro;
   setData(datos.registro);
  
  }
///////////////////////////////////////////////////
  useEffect(() => {
    load();
},[]);  
///////////////////////////////////////////////////
  const columns = [ 
    {title:"Tomo",name:"Tomo",type:"string"}, 

    {title:"Folio",name:"Folio",type:"string"}, 

    {title:"Renglon",name:"Renglon",type:"string"},  

    {title:"Cedula",name:"Cedula",type:"string"}, 

    {title:"Nombres",name:"Nombres",type:"string"}, 

    {title:"Evaluación",name:"NombreNov",type:"string"}, 

    //{title: "Tipo",name:"TipoNov",type:"string"},  

  ];


///////////////////////////////////////////////////  
  return(
    <Container>
      <MUIDataTable
          columns={columns}
          data={data}
          title="Registraduria"
                  
      />
    </Container>
  )
}
