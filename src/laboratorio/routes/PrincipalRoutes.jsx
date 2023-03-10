import { NavBar,SideBar} from "../components";
import { Box, Toolbar } from "@mui/material"
import { NoteView,Lideres,Registro, Estadistica, Recoleccion, Estarecoleccion} from '../view'
import { Navigate, Route, Routes} from 'react-router-dom'

const drawerWidth = 240;

export const PrincipalRoutes = () => {


  return (
    <>    
    <Box sx={{display:'flex'}}>

            <SideBar drawerWidth ={drawerWidth}/>            
            <NavBar drawerWidth ={drawerWidth}/>  
            <Box 
              componente='main'
              sx={{flexGrow:1,p:11}}
              >
              <Toolbar>                            
                <Routes>                 
                            <Route path="/" element={<NoteView/> } />
                            <Route path="/lideres" element={<Lideres/>} />
                            <Route path="/registro" element={<Registro/>} />   
                            <Route path="/estadistica" element={<Estadistica/>} /> 
                            <Route path="/recoleccion" element={<Recoleccion/>} />   
                            <Route path="/estarecoleccion" element={<Estarecoleccion/>} />                               

{/*                         <Route path="/laboratorios/:labid" element={<Laboratorios/> } />
                            <Route path="/laboratorios" element={<Laboratorios/> } />   */}                          
                            {/* <Route path="/cronograma" element={<Cronograma/> } /> */}
                            <Route path='/*' element={ <Navigate to="/" /> } />
                </Routes>

              </Toolbar>

            </Box>             
      
    </Box> 
    </>  
)
}
