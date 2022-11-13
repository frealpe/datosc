
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux'
import {usemodalStore} from '../../hook'
import { setActSala } from '../../store/salas/thunks';

import { LaboratorioModal } from './LaboratorioModal';
import { cloneElement } from 'react';


export const Tarjetas = (props) => {
    const dispatch = useDispatch();
    const {openLabModal} = usemodalStore();
    
//////////////////////////////////////////////////////////////////////////////////////
    const id = props._id; 
    const descripcion = props.descripcion;
    const nombre = props.nombre;
    const coleccion = props.coleccion;
    const laboratorista = props.laboratorista;
    const labImageUrl=`http://localhost:8080/api/uploads/${coleccion}/${id}`;
    //const data = [id,descripcion,nombre,coleccion,laboratorista,labImageUrl];
    
//////////////////////////////////////////////////////////////////////////////////////
    const ClickModal = ()=>{
          
          //let data = {props,labImageUrl};
          
          dispatch(setActSala({id,descripcion,nombre,coleccion,laboratorista,labImageUrl}));
          //dispatch(setActSala(data));
          //dispatch(setActSala(data));
          
          dispatch(openLabModal());
  }  
//////////////////////////////////////////////////////////////////////////////////////
  return (
      <div className="col animate__animated animate__fadeIn">
          
          <div className="card">

              <div className="row no-gutters">
                  
                  <div className="col-12">                    
                      <img src={ labImageUrl } className="card-img" alt={nombre } />
                  </div>

                  <div className="col-12">

                      <div className="card-body">

                          <h5 className="card-title">{ nombre }</h5>
                          <p className="card-text">{descripcion }</p>


                          <p className="card-text">
                              <small className="text-muted">{"Laboratorista:"}
                                {laboratorista }
                              </small>
                          </p>
                            {/* //TODO se debe colocar todo en {} */}

                          <Grid container spacing={1} sx={{mb:2,mt:2}}>
                                
                                <Grid item xs={12} sm={4}>             
                                        <Button                           
                                        type="submit" 
                                        variant='contained' 
                                        fullWidth
                                        onClick={ClickModal}
                                        size="large">                     
                                        Editar
                                        </Button>              
                                </Grid>

                                <Grid item xs={12} sm={4}>             
                                        <Button                           
                                        type="submit" 
                                        variant='contained' 
                                        fullWidth
                                       
                                        size="large">                    
                                        Eliminar
                                        </Button>              
                                </Grid>

                                <Grid item xs={12} sm={4}>             
                                    <Link to={`/Laboratorios/${id}`}>
                                        <Button                           
                                        type="submit" 
                                        variant='contained' 
                                        fullWidth
                                        size="large">                    
                                        Laboratorios
                                        </Button>              
                                    </Link>                                    
                                </Grid>                                
                          </Grid>
                      </div>
                  </div>
              </div>
          </div>
          <LaboratorioModal></LaboratorioModal>
      </div>
  )
}
