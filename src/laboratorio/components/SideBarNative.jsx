import {NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

export const SideBarNative = () => {
  return (
    <div className="sidebar">
        <ul>
                <li>
                    <NavLink to="/" 
                        exact className="text-dark rounded py-2 w-100 d-inline-block px-3"
                        activeClassName="active"
                    >
                        <HomeOutlinedIcon  
                        className="me-2"/> 
                        Home 
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/salas" 
                    exact className="text-dark rounded py-2 w-100 d-inline-block px-3"
                    activeClassName="active"
                    >
                        <ReceiptOutlinedIcon 
                        className="me-2"/>
                        Salas 
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/laboratorios" 
                    exact className="text-dark rounded py-2 w-100 d-inline-block px-3"
                    activeClassName="active"
                    >
                        <TungstenOutlinedIcon 
                        className="me-2"/>
                        Laboratorios
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cronograma" 
                    className="text-dark rounded py-2 w-100 d-inline-block px-3"
                    activeClassName="active"
                    >
                        <CalendarMonthOutlinedIcon 
                        className="me-2"/>
                        Cronograma 
                    </NavLink>
                </li>

        </ul>                        
    </div>
  )
}
