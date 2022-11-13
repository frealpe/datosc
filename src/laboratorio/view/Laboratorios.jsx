import React from 'react'
import { useParams } from 'react-router-dom';

export const Laboratorios = () => {

  const params = useParams();

    if(!params.labid){
      console.log('No hay nada');
    }
  console.log(params);
  return (
    <div>Laboratorios</div>
  )
}
