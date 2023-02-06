import { NavBar,SideBar  } from "../components";
import { Box, Toolbar } from "@mui/material"
import { Cronograma, Laboratorios, NoteView, Salas} from '../view'
import { Navigate, Route, Routes } from 'react-router-dom'

const drawerWidth  = 340;
export const LaboratorioPage = () => {
  return (

      <Box sx={{display:'flex'}}>

              <NavBar drawerWidth ={drawerWidth }/>           
              <SideBar drawerWidth ={drawerWidth }/>
          
              <Box 
                componente='main'
                sx={{flexGrow:1,p:9}}
              >
                <Toolbar>
                  <Routes>                  
                        <Route path="/" element={ <NoteView/> } />
                        <Route path="/salas" element={<Salas/>} />
{/*                         <Route path="/laboratorios" element={ <Laboratorios/> } />
                        <Route path="/cronograma" element={ <Cronograma/> } />
                        <Route path='/*' element={ <Navigate to="/" /> } /> */}
                  </Routes>  
                </Toolbar>

              </Box>             
        

      </Box> 
    
  )
}
