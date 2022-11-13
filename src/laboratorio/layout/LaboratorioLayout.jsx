import { Box, Toolbar } from "@mui/material"
import { NavBar,SideBar  } from "../components";
import { Navigate, Route, Routes } from 'react-router-dom'

const drawerWidth  = 340;


export const LaboratorioLayout = ({children}) => {
  return (

    <>
    
    <Box sx={{display:'flex'}}>
           <NavBar drawerWidth ={drawerWidth }/>           
           <SideBar drawerWidth ={drawerWidth }/>

           <Box 
            componente='main'
            sx={{flexGrow:1,p:3}}
           >
            <Toolbar></Toolbar>
           {/*  {children} */}
          </Box>             
    </Box>

    
    </>
  )
}
