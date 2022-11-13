import {Link as RouterLink} from 'react-router-dom'
import {Grid,TextField,Typography,Button, Link, Alert} from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hook';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

/////////////////////////////////////////////////////////////////////////////////////
const formData = {
    correo:'laboratorio@unicauca.edu.co',
    password:'123456',
    nombre:'laboratorios'

}
/////////////////////////////////////////////////////////////////////////////////////
const formValidation = {
  correo:[(value)=>value.includes('@'),'No es un correo valido'],
  password:[(value)=>value.length >=6, 'El password debe tener mas de 6 caracteres'],
  nombre:[(value)=>value.length >=1, 'El nombre es obligatorio'],
}
/////////////////////////////////////////////////////////////////////////////////////


export const RegisterPage = () => {
 
    const dispatch = useDispatch();
    
    const [formSubmitted, setformSubmitted] = useState(false);

    const { status, errorMessage } = useSelector( state => state.auth );

    const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

    const {formState,nombre,correo,password,onInputChange,
          isFormValid,nombreValid,correoValid,passwordValid,    
      } = useForm(formData,formValidation);

    const onSubmit = (event) =>{
      event.preventDefault();
      setformSubmitted(true);
      if(!isFormValid) return;
      dispatch(startCreatingUserWithEmailPassword(formState))
    }
  
  
  return  (

    <AuthLayout title='Crear una Cuenta'>

    <form onSubmit={onSubmit}>
          <Grid container>

          <Grid item xs={12} sx={{mt:2}}>
              <TextField 
              label='Nombre y Apellido' 
              type='text' 
              placeholder='nombre y apellido'
              fullWidth
              name="nombre"
              value={nombre}
              onChange={onInputChange}
              error={!!nombreValid && formSubmitted}
              helperText={nombreValid}
              />
            </Grid>

            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
              label='Correo' 
              type='correo' 
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
              <Grid item xs={12}>             
                  <Button 
                    disabled={isCheckingAuthentication}
                    type="submit" 
                    variant='contained' 
                    fullWidth>
                    Crear cuenta
                  </Button>              
              </Grid>
            </Grid>


           <Grid container direction='row' justifyContent= 'end'>
            <Typography sx={{mr:1}}>¿Si ya tienes una cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to = "/auth/login">           
              Ingresar          
            </Link>            
           </Grid> 

          </Grid>

    </form>

    </AuthLayout>


  )
}
