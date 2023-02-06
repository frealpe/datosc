import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { Box, Divider, Drawer, List, ListItem,ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { useNavigate} from 'react-router-dom';


export const SideBar = ({drawerWidht=240}) => {
  
    let navigate = useNavigate();
    const itemsList = [
   
        { 
            text : "Departamento del Cauca",
            icon: <HomeOutlinedIcon/>,
            onClick:()=> {navigate("/")}
        },

        { 
            text : "Lideres",
            icon: <ConnectWithoutContactIcon/>,
            onClick:()=> {navigate("/Lideres")}
        },

        { 
            text : "Recoleccion",
            icon: <VolunteerActivismIcon/>,
            onClick:()=> {navigate("/Recoleccion")}
        },

        { 
            text : "Estadistica Recoleccion",
            icon: <TungstenOutlinedIcon/>,
            onClick: ()=>{navigate("/Estarecoleccion")}
        },

        { 
            text : "Registraduría",
            icon: <HowToRegIcon/>,
            onClick: ()=>{navigate("/Registro")}
        },        

        { 
            text : "Estadistica",
            icon: <CalendarMonthOutlinedIcon/>,
            onClick: ()=> {navigate("/Estadistica") }
        },        
        
    ]


/*     const submitHandler = (event) => {
        event.preventDefault();

        console.log(event);
        navigate("/salas");
    } 
 */
    
    return (

        <>
        
            <Box
                component='nav'
                sx={{width:{sm:drawerWidht}, flexShrink:{sm:0}}}
            >
                <Drawer
                        variant='permanent'
                        open
                        sx={{
                            display:{xs:'block'},
                            '& .MuiDrawer-paper':{boxSizing:'border-box',width:drawerWidht}
                        }}
                >
                        <Toolbar>
                            <Typography variant='h8' noWrap component='div'>
                                Cauca nos Une
                            </Typography>
                        </Toolbar>
                    
                        <Divider/>
                        <List>
                                {itemsList.map((item) => {
                                const { text, icon, onClick } = item;
                                return (
                                    <ListItem button key={text} onClick={onClick}>
                                        {
                                            icon && <ListItemIcon>{icon}</ListItemIcon>                                
                                        }
                                            <ListItemText primary={text} />
                                    </ListItem>
                                );
                                })}
                        </List>
            
                        <Divider />

                </Drawer>
            </Box>
        </>

  )
}
