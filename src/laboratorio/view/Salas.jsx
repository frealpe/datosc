import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLaboratorioStore } from '../../hook';
import { starLoadtSalas } from '../../store/salas';
import {Tarjetas} from '../components';


//TODO HAACE LA TARJETA DE LOS LABORATORIOS 309
export const Salas = () => {
  
  const coleccion="salas";
  const dispatch = useDispatch();
  const{infosala}=useLaboratorioStore();

   useEffect(() => {
    dispatch(starLoadtSalas(coleccion));
    
   },[])
      

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-200">
          {
            infosala.map((salas) =>(
              <Tarjetas key={salas._id} {...salas} coleccion={coleccion}/>
            )
                                                               
            )
          }

    </div>
  )
}
