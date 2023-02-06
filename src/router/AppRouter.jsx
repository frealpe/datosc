import { Navigate, Route, Routes} from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { chekingAuth } from '../hook'
import { PrincipalRoutes } from '../laboratorio/routes/PrincipalRoutes'
import { CheckingAuth } from '../ui'


export const AppRouter = () => {

  const status = chekingAuth();

  if ( status === 'checking' ) {

    return <CheckingAuth />
  } 

  return (

        <Routes>
            {

             (status === 'authenticated')   
              ? <Route path="/*" element={<PrincipalRoutes/>}/>      
              : <Route path="/auth/*" element={<AuthRoutes/>}/>
            }

            <Route path='/*' element={ <Navigate to='/auth/login' />  } />
            
        </Routes>

  )
}
