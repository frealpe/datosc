import {Link as RouterLink} from 'react-router-dom'
import {Grid,TextField,Typography,Button, Link, Alert} from '@mui/material'
import {Google} from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hook'
import { startGoogleSignIn, startloginUserWithEmailPassword } from '../../store/auth'
import { useDispatch, useSelector } from 'react-redux'
import { useMemo, useState } from 'react'

/////////////////////////////////////////////////////////////////////////////////////
const formData = {
  correo:'laboratorio@unicauca.edu.co',
  password:'123456',

}
/////////////////////////////////////////////////////////////////////////////////////
const formValidation = {
correo:[(value)=>value.includes('@'),'No es un correo valido'],
password:[(value)=>value.length >=6, 'El password debe tener mas de 6 caracteres'],
}
/////////////////////////////////////////////////////////////////////////////////////

export const LoginPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setformSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );

   const isAuthenticating = useMemo( () => status === 'checking', [status]); 

  const {formState,correo,password,onInputChange,
    isFormValid,correoValid,passwordValid,    
} = useForm(formData,formValidation);

  
  const onSubmit = (event) =>{
    event.preventDefault();                 //onSubmit envia datos al servidor
    setformSubmitted(true);
    if(!isFormValid) return;    
    dispatch(startloginUserWithEmailPassword(formState));
  }

///////////////////////////////////////////////////////////////////////////////
  const onGoogleSignIn = (event) =>{
    
    dispatch(startGoogleSignIn());
  }
///////////////////////////////////////////////////////////////////////////////

  return (  
    <AuthLayout title='Login'>
    <form onSubmit={onSubmit}>
          <Grid container>

            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
              label='Correo' 
              type='email' 
              placeholder='correo@unicauca.edu.co'
              fullWidth
              name="correo"
              value={correo}
              onChange={onInputChange}              
              error={!!correoValid && formSubmitted}
              helperText={correoValid}
              />
            </Grid>

            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
              label='Contraseña' 
              type='password' 
              placeholder='Contraseña'
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}   
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}             
              />
            </Grid >

            <Grid container spacing={1} sx={{mb:2,mt:2}}>
            <Grid 
                item 
                xs={12}
                display={ !!errorMessage ? '': 'none' }
              >             
                    <Alert severity='error'>
                     {errorMessage}
                    </Alert>            
              </Grid>              
              <Grid item xs={12} sm={6}>             
                  <Button 
                   disabled={ isAuthenticating }
                  type="submit" 
                  variant='contained' 
                  fullWidth>                    
                    Login
                  </Button>              
              </Grid>

              <Grid item xs={12}sm={6}>             
                  <Button 
                  variant='contained' 
                  fullWidth
                  onClick={onGoogleSignIn}
                  >                    
                    <Google/>
                    <Typography sx={{ml:1}}>Google</Typography>                                         
                  </Button>              
              </Grid>

            </Grid>

           <Grid container direction='row' justifyContent= 'end'>
            <Link component={RouterLink} color='inherit' to = "/auth/register">           
              Crear una cuenta          
            </Link>
           </Grid> 

          </Grid>

    </form>

    </AuthLayout>


  )
}
