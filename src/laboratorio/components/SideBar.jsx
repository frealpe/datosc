import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { Box, Divider, Drawer, List, ListItem,ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { useNavigate} from 'react-router-dom';


export const SideBar = ({drawerWidht=240}) => {
  
    let navigate = useNavigate();
    const itemsList = [
   
        { 
            text : "Home",
            icon: <HomeOutlinedIcon/>,
            onClick:()=> {navigate("/")}
        },

        { 
            text : "Salas",
            icon: <ReceiptOutlinedIcon/>,
            onClick:()=> {navigate("/salas")}
        },
        
        { 
            text : "Laboratorios",
            icon: <TungstenOutlinedIcon/>,
            onClick: ()=>{navigate("/Laboratorios")}
        },

        { 
            text : "Cronograma",
            icon: <CalendarMonthOutlinedIcon/>,
            onClick: ()=> {navigate("/Cronograma") }
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
                                Dashboard Laboratorios
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
