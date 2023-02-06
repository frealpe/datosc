import crossfilter from 'crossfilter2'
import { evalg, evalrec } from './database';

//////////////////////////Importar csv/////////////////////
export const getDataRec = async () => { 
    const response = await fetch("recolectores.json");  
    const registro = await response.json();
  return {registro};
}
///////////////////////////////////////////////////////////
export const getData = async () => { 
    const response = await fetch("registrados.json");  
    const registro = await response.json();
  return {registro};
}
///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
export const evaldata = (data) => {
/********************************************************/
    function print_filter(filter) {
    var f=eval(filter);
    if (typeof(f.length) != "undefined") {}else{}
    if (typeof(f.top) != "undefined") {f=f.top(Infinity);}else{}
    if (typeof(f.dimension) != "undefined") {f=f.dimension(function(d) { return "";}).top(Infinity);}else{}
    console.log(filter+"("+f.length+") = "+JSON.stringify(f).replace("[","[\n\t").replace(/}\,/g,"},\n\t").replace("]","\n]"));
    }

/********************************************************/
var facts =  crossfilter(data);  
var typeDimension  = facts.dimension(function(d){return d.NombreNov;});
var typeGroup = typeDimension.group().all();    

var  arreglado = typeGroup.map( item => { 
    return { id: item.key,value:item.value}; 
});  

return {arreglado};
};
///////////////////////////////////////////////////////////
export const evalgener = (data) => {
/*********************************************************************************************************/
function print_filter(filter) {
    var f=eval(filter);
    if (typeof(f.length) != "undefined") {}else{}
    if (typeof(f.top) != "undefined") {f=f.top(Infinity);}else{}
    if (typeof(f.dimension) != "undefined") {f=f.dimension(function(d) { return "";}).top(Infinity);}else{}
    console.log(filter+"("+f.length+") = "+JSON.stringify(f).replace("[","[\n\t").replace(/}\,/g,"},\n\t").replace("]","\n]"));
    }
    var meta = 50000;
    var facts =  crossfilter(data);  
    var typeDimension  = facts.dimension(function(d){return d.NombreNov;});
    var typeGroup = typeDimension.group().all();    
    print_filter(typeGroup);
    var  arreglado = typeGroup.map( item => { 
        return { id: item.key,value:item.value}; 
    });

/*********************************************************************************************************/
    evalg[1].value = arreglado[3].value.toString();         //Es un dato inicial
    var porc = Number(arreglado[3].value)*100/meta;
    var final = (100-porc);
    evalg[1].label = "Firmas avaladas "+"%:"+porc.toString(); 
    evalg[0].label = "Porcentaje Faltante "+"%:"+final.toString(); 
    evalg[0].value = (meta-Number(arreglado[3].value)).toString();
/*********************************************************************************************************/
    return evalg;
};
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
export const evalrecolect = ({data,pos}) => {    
/*********************************************************************************************************/
/* console.log(pos);
console.log(data); */ 
function print_filter(filter) {
    var f=eval(filter);
    if (typeof(f.length) != "undefined") {}else{}
    if (typeof(f.top) != "undefined") {f=f.top(Infinity);}else{}
    if (typeof(f.dimension) != "undefined") {f=f.dimension(function(d) { return "";}).top(Infinity);}else{}
    console.log(filter+"("+f.length+") = "+JSON.stringify(f).replace("[","[\n\t").replace(/}\,/g,"},\n\t").replace("]","\n]"));
    }
/*********************************************************************************************************/
var facts =  crossfilter(data);  
var typeDimension  = facts.dimension(function(d){return d.codigo;});
var typeGroup = typeDimension.group();
//print_filter(typeGroup);
/*********************************************************************************************************/
 var fildata = typeDimension.filter(pos);
 //var fildata = typeDimension.filter(pos);
 //print_filter(fildata);
/*********************************************************************************************************/
var evale = fildata.top(Infinity);
//console.log(evale);
/*********************************************************************************************************/
var evalua = crossfilter(evale);
/*********************************************************************************************************/
var evalsinoveda= evalua.dimension(function(d){return d["analizado_sin_novedad"];}); 
var evalGsinoveda = evalsinoveda.groupAll().reduceSum(d=>{return d["analizado_sin_novedad"];}).value();
/*********************************************************************************************************/
var evaluni= evalua.dimension(function(d){return d["uniprocedencia_en_cedula"];}); 
var evalGuni = evaluni.groupAll().reduceSum(d=>{return d["uniprocedencia_en_cedula"];}).value();
/*********************************************************************************************************/
var evalileg= evalua.dimension(function(d){return d["cedula_ilegible"];}); 
var evalGIleg = evalileg.groupAll().reduceSum(d=>{return d["cedula_ilegible"];}).value();
/********************************************************************************************************/
var evalceno= evalua.dimension(function(d){return d["cedula_no_corresponde"];}); 
var evalGceno = evalceno.groupAll().reduceSum(d=>{return d["cedula_no_corresponde"];}).value();
/********************************************************************************************************/
var evalcblan= evalua.dimension(function(d){return d["casilla_en_blanco"];}); 
var evalcGblan = evalcblan.groupAll().reduceSum(d=>{return d["casilla_en_blanco"];}).value();
/********************************************************************************************************/
var evalnoa= evalua.dimension(function(d){return d["no_archivo"];}); 
var evalGnoa = evalnoa.groupAll().reduceSum(d=>{return d["no_archivo"];}).value();
/********************************************************************************************************/
var evalnocen= evalua.dimension(function(d){return d["no_en_censo"];}); 
var evalGnocen = evalnocen.groupAll().reduceSum(d=>{return d["no_en_censo"];}).value();
/********************************************************************************************************/
var evalnocenn= evalua.dimension(function(d){return d["no_en_censo_nacional"];}); 
var evalGnocenn = evalnocenn.groupAll().reduceSum(d=>{return d["no_en_censo_nacional"];}).value();
/********************************************************************************************************/
var evalnoil= evalua.dimension(function(d){return d["nombre_ilegible"];}); 
var evalGnoil = evalnoil.groupAll().reduceSum(d=>{return d["nombre_ilegible"];}).value();
/********************************************************************************************************/
var evalresd= evalua.dimension(function(d){return d["registro_duplicado"];}); 
var evalGresd = evalresd.groupAll().reduceSum(d=>{return d["registro_duplicado"];}).value();
/********************************************************************************************************/
var evalenb= evalua.dimension(function(d){return d["renglon_en_blanco"];}); 
var evalGenb = evalenb.groupAll().reduceSum(d=>{return d["renglon_en_blanco"];}).value();
/********************************************************************************************************/
var evaltotal= evalua.dimension(function(d){return d["total"];}); 
var evalGtotal = evaltotal.groupAll().reduceSum(d=>{return d["total"];}).value();
/*********************************************************************************************************/

evalrec[0].value=evalGsinoveda;
evalrec[1].value=evalGuni;
evalrec[2].value=evalGIleg;
evalrec[3].value=evalGceno;            
evalrec[4].value=evalcGblan;
evalrec[5].value=evalGnoa;
evalrec[6].value=evalGnocen;
evalrec[7].value=evalGnocenn;
evalrec[8].value=evalGnoil;
evalrec[9].value=evalGresd;
evalrec[10].value=evalGenb;
evalrec[11].value=evalGtotal;


/////////////////PORCENTAJES//////////////////////


var porc = Math.round(Number(evalGsinoveda)*100/evalGtotal);
var final = Math.round(100-porc);

evalrec[0].label = "Firmas Avaladas "+"%:"+porc.toString(); 
evalrec[0].porcentaje=porc.toString(); 
//evalrec[11].label = "Firmas NO Avaladas "+"%:"+final.toString(); 
var total = evalGtotal-evalGsinoveda.toString();
evalrec[12].value=total;
evalrec[12].label = "Firmas NO Avaladas "+"%:"+final.toString(); 

const sali = [evalrec[0],evalrec[12]];

 //console.log(evalrec);
    return {evalrec,evalGtotal,sali};
};
///////////////////////////////////////////////////////////
export const numrecolect = (data) => {    
    /*********************************************************************************************************/
//        console.log(data);
        function print_filter(filter) {
            var f=eval(filter);
            if (typeof(f.length) != "undefined") {}else{}
            if (typeof(f.top) != "undefined") {f=f.top(Infinity);}else{}
            if (typeof(f.dimension) != "undefined") {f=f.dimension(function(d) { return "";}).top(Infinity);}else{}
            console.log(filter+"("+f.length+") = "+JSON.stringify(f).replace("[","[\n\t").replace(/}\,/g,"},\n\t").replace("]","\n]"));
            }
            var facts =  crossfilter(data);  
            var typeDimension  = facts.dimension(function(d){return d.codigo;});
            var typeGroup = typeDimension.group().top(Infinity);
            
            var  codigo = typeGroup.map( item => { 
                return { id: item.key}; 
            });

//            print_filter(typeGroup);
            return codigo;        
    }    
    
