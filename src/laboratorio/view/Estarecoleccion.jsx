import { Container } from '@material-ui/core';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import Select from 'react-select';
import GraficaPie from '../../charts/dataTable';
import Grafipie from '../../charts/pieChart';
import {evalrecolect,getDataRec, numrecolect } from '../../helpers';
const margin = { top: -680, right: 450, bottom: 80, left: 80 };
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
    fontSize: 96,
    color: "#000000",
    // background: "#FFFFFF33",
    textAlign: "center",
    // This is important to preserve the chart interactivity
    pointerEvents: "none"
  },
  totalLabel: {
    fontSize: 30
  },
 
};

///////////////////////////////////////////////////
///////////////////////////////////////////////////
export const Estarecoleccion = () => {
  
  const[datos,setData] =useState([]);
  const[posic,setPosic] =useState([]);
  const[datag,setDatag] =useState([]);
  const[total,setTotal]= useState([]);
  const[efic,setEfic]= useState([]);
  const[evalt,setEvalt]= useState([]);
///////////////////////////////////////////////////
  async function loadregistra (){
    const salida = await getDataRec();    
    const datos = salida.registro;      
    setData(datos.registros);
    const codigo = numrecolect(datos.registros);
    setPosic(codigo);
  }
///////////////////////////////////////////////////
async function evalregist (pos){
    //setEposin(pos);
    const {evalrec,evalGtotal,sali} = evalrecolect({data:datos,pos:pos});
    setDatag(sali); 
    setEfic(sali[0].porcentaje);
    setTotal(evalrec[11].value);
   
    //console.log(sld);
    setEvalt(evalrec);
    //setEvalt(sld);
    //setDatag(evalrec); 
}
///////////////////////////////////////////////////
const handleSelectChange = ( event ) => {
  evalregist(event.value);
}
///////////////////////////////////////////////////
  useEffect(() => {
    loadregistra();
},[]);  
///////////////////////////////////////////////////  data={data}
  return(
    <Grid>
        <Grid item xs={12} sx={{mt:2}}>
            <Select
                    defaultValue={1}
                    options = { posic.map(sup => ({ label: sup.id, value: sup.id })) }
                    onChange = { handleSelectChange }
                />
        </Grid>

            <div style={styles.overlay}>
                   <span>{`${efic}%`}</span>
                   <span style={styles.totalLabel}>Porcentaje de Eficencia</span>
                   <span style={styles.totalLabel}>Total Firmas: {total}</span>
            </div>  

            <Container>
              { 
                  <GraficaPie data={datag}/>
              }
            </Container>

            <Container>
              { 
                  <Grafipie data={evalt}/>
              }
            </Container>

    </Grid>
  )
}


