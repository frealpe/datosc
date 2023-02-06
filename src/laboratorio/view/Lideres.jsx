import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deletLider, starLoadLiders,updLider,newLider} from "../../store/lideres/thunks";
import { useEffect, useState } from "react";
import { useLiderStore } from "../../hook/useLiderStore";
import MaterialTable from "@material-table/core";


export const Lideres = () => {
   const dispatch = useDispatch();
  const[data,setdata] =useState(["Fabio Hernan","87248875","3113449655","Popayan"]);
  const{infolideres} =  useLiderStore(); 
///////////////////////////////////////////////////
  const ClickDeletItem =(oldData)=>{ 
    dispatch(deletLider(oldData));
}
///////////////////////////////////////////////////
const ClickNewItem =(newData)=>{ 
  dispatch(newLider(newData));
}
///////////////////////////////////////////////////
const ClickUpdatetItem=({upData})=>{
  dispatch(updLider(upData));
}
///////////////////////////////////////////////////
 useEffect(() => {
   const value = dispatch(starLoadLiders());   
   const getData = () => {
    setdata(infolideres);  
    console.log(infolideres);        
  }; 
  getData(value);
},[infolideres,setdata]) 
///////////////////////////////////////////////////
  const columns = [ 
    {title:"Nombre",field:"nombre",type:"string",export:true}, 

    {title:"Celular",field:"celular",type:"string"}, 

    {title:"Cedula",field:"cedula",type:"string"}, 

    {title: "Municipio",field:"municipio",type:"string"},  

    //{title: "id",field:"id",type:"string"},  

  ];


///////////////////////////////////////////////////  
  return(
    <Container>
      <MaterialTable
          columns={columns}
          data={data}
          title="Lideres"
          editable={{
/////////////////////////////////////////////////////              
              onRowAddCancelled: (newData) => console.log("Adicion cancelada"),
              onRowAdd:(newData)=>{
                 return new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      ClickNewItem({newData});                                     
                    }
                    resolve();  
                  },100);
 //                 const{infolideres} =  useLiderStore(); 
 //                 setdata(infolideres);
                 });  

              },
/////////////////////////////////////////////////////              
              onRowUpdate:(upData)=>{
                return new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      ClickUpdatetItem({upData});                                     
                    }
                    resolve();
                  },100);
                  const{infolideres} =  useLiderStore(); 
                  setdata(infolideres);  
                });                
              },
/////////////////////////////////////////////////////              
              onRowDelete:(oldData)=>{
                return new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      ClickDeletItem(oldData);                                     
                    }
                    resolve();
                  },100);
                  const{infolideres} =  useLiderStore(); 
                  setdata(infolideres);  
                });
              }, 
/////////////////////////////////////////////////////    
            }            
          }
/*           
          localization={{
            toolbar: {
              exportCSVName: "Datos exportados en csv",
            }
          }}  */

          options={{
            sorting: true, search: true,
            searchFieldAlignment: "right",
            searchAutoFocus: true, 
            searchFieldVariant: "standard",
            filtering: true, 
            paging: true, 
            pageSizeOptions: [20, 40, 50, 100], 
            pageSize: 20,
            paginationType: "stepped", 
            showFirstLastPageButtons: false, 
            paginationPosition: "both", 
            exportButton: true,
            exportAllData: true, 
            exportFileName: "TableData", 
            addRowPosition: "first", 
            actionsColumnIndex: -1, 
            selection: true,
            showSelectAllCheckbox: false, 
            showTextRowsSelected: false, 
            selectionProps: rowData => ({
              disabled: rowData.age == null,
              color:"primary"
            }),
//            grouping: true, 
            columnsButton: true,
          }}          
      />
    </Container>
  )
}
