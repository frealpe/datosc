import { NavBar,SideBar,SideBarNative } from "../components";
import { Box, Toolbar } from "@mui/material"
import { Cronograma, Laboratorios, NoteView, Salas} from '../view'
import { Navigate, Route, Routes} from 'react-router-dom'



const drawerWidth = 240;

export const PrincipalRoutes = () => {
  return (
    <>
    
    <Box sx={{display:'flex'}}>

            <SideBar drawerWidth ={drawerWidth }/>            
            <NavBar drawerWidth ={drawerWidth }/>  
            <Box 
              componente='main'
              sx={{flexGrow:1,p:11}}
              >
              <Toolbar>                            
                <Routes>                 
                            <Route path="/" element={<NoteView/> } />
                            <Route path="/salas" element={<Salas/>} />
                            <Route path="/laboratorios/:labid" element={<Laboratorios/> } />
                            <Route path="/laboratorios" element={<Laboratorios/> } />                            
                            <Route path="/cronograma" element={<Cronograma/> } />
                            <Route path='/*' element={ <Navigate to="/" /> } />
                </Routes>

              </Toolbar>

            </Box>             
      
    </Box> 
    </>  
)
}
