import { Container } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import GraficaPie from '../../charts/dataTable';
import Grafipie from '../../charts/pieChart';
import { evaldata, evalgener, evalrec, getData } from '../../helpers';

const margin = { top: -780, right: 13, bottom: 80, left: 80 };
const styles = {
  overlay: {
    position: "absolute",
    top: margin.top,
    right: margin.right,
    bottom: margin.left,
    left: margin.left,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 26,
    color: "#000000",
    // background: "#FFFFFF33",
    textAlign: "center",
    // This is important to preserve the chart interactivity
    pointerEvents: "none"
  },
  totalLabel: {
    fontSize: 20
  },
 
};


export const Estadistica = () => {

  const[data,setData] =useState([]);
  const[datag,setDatag] =useState([]);
  const[porce,setPorce] =useState([]);
///////////////////////////////////////////////////
  async function loadregistra (){
   const salida = await getData();
   const datos = salida.registro;   
   const regis  = evaldata(datos.registro);
   setData(regis.arreglado); 

  }
///////////////////////////////////////////////////
async function loadmeta (){
  const salida = await getData();
  const datos = salida.registro;   
  const meta = evalgener(datos.registro);
  setPorce(meta[0].label)
  setDatag(meta);  

 }

///////////////////////////////////////////////////
  useEffect(() => {
    loadregistra();
    loadmeta();
},[]);  
///////////////////////////////////////////////////  data={data}
  return(
    <Container>
 
      <Grafipie data={datag}/> 
      <div style={styles.overlay}>
                   <span>{`${porce}`}</span>                   
      </div>  

      <GraficaPie data={data}/>
    </Container>
  )
}


//import { ResponsiveBar } from '@nivo/bar'
