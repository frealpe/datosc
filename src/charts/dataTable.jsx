//import { data } from "../data/data"
import { ResponsivePie } from "@nivo/pie";

const margin = { top: 80, right: 80, bottom: 80, left: 80 };

const styles = {
  root: {
    fontFamily: "consolas, sans-serif",
    textAlign: "center",
    position: "relative",
    width: 1200,
    height: 800
  },
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
    fontSize: 206,
    color: "#FF0000",
    // background: "#FFFFFF33",
    textAlign: "center",
    // This is important to preserve the chart interactivity
    pointerEvents: "none"
  },
  totalLabel: {
    fontSize: 24
  }
};


function GraficaPie({data}){
        console.log(data)
        return(
            <div style={styles.root}>
            <ResponsivePie
              margin={margin}
              data={data}
              innerRadius={0.7}
              enableArcLabels={false}
              padAngle={0.7}
              cornerRadius={3}
              sortByValue={true}
//              arcLinkLabel={d => `${d.id} (${d.formattedValue})`}
//              layers={['arcs', 'arcLabels', 'arcLinkLabels', 'legends', CenteredMetric]}

              fit={false}
//              colors={{ scheme: 'nivo' }}
              enableRadialLabels={true}
              activeOuterRadiusOffset={10}
              borderWidth={1}
              //activeInnerRadiusOffset={commonProperties.activeOuterRadiusOffset}
              arcLinkLabelsSkipAngle={3}
              arcLinkLabelsTextColor="black"
              arcLinkLabelsDiagonalLength={36}
              arcLinkLabelsStraightLength={34}
              arcLinkLabelsOffset={-24}
              arcLinkLabelsTextOffset={36}
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: 'color' }}
              arcLabelsSkipAngle={10}  
              arcLabelsTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        2
                    ]
                ]
            }}  
       //     tooltip={function(e){var t=e.datum;return(0,a.jsxs)(s,{style:{color:t.color},children:[(0,a.jsx)(d,{children:"id"}),(0,a.jsx)(c,{children:t.id}),(0,a.jsx)(d,{children:"value"}),(0,a.jsx)(c,{children:t.value}),(0,a.jsx)(d,{children:"formattedValue"}),(0,a.jsx)(c,{children:t.formattedValue}),(0,a.jsx)(d,{children:"color"}),(0,a.jsx)(c,{children:t.color})]})}}
       
            defs={[
              {
                  id: 'dots',
                  type: 'patternDots',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  size: 4,
                  padding: 1,
                  stagger: true
              },
              {
                  id: 'line',
                  type: 'patternLines',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  rotation: 45,
                  lineWidth: 6,
                  spacing: 10
              }
          ]}
        
          fill={[
            {match: {id: 'Analizado sin Novedad'},id:'line'},
            {match: {id: 'Casilla en blanco'},id:'line'},
            {match: {id: 'Cedula'},id:'line'},
            {match: {id: 'Cedula Ilegible'},id:'line'},
            {match: {id: 'Cedula Incompleta'},id:'line'},
            {match: {id: 'Cedula no Corresponde'},id:'line'},            
            {match: {id: 'Cedula,Nombre'},id:'line'},
            {match: {id: 'Fecha no corresponde'},id:'line'},
            {match: {id: 'Firma'},id: 'line'},
            {match: {id: 'Firma,Cedula,Nombres'},id:'line'},
            {match: {id: 'Firma,Nombres'},id:'line'},
            {match: {id: 'Grupo Significativo Diferente'},id:'line'}, 
            {match: {id: 'No archivo'},id:'line'},                                                
            {match: {id: 'No en censo'},id:'line'},                                                            
            {match: {id: 'No en censo nacional'},id:'line'},                                                                        
            {match: {id: 'Nombre Incompleto'},id:'line'},                                                                        
            {match: {id: 'Nombre ilegible'},id:'line'},      
            {match: {id: 'Nombres'},id:'line'},                                                                                                
            {match: {id: 'Registro duplicado'},id:'line'},                  
            {match: {id: 'Renglon en blanco'},id:'line'},                              
            {match: {id: 'Sin Titulo, Fotocopia de Fotocopia'},id:'line'},                                          
            {match: {id: 'Uniprocedencias folio completo'},id:'line'},                                                      
          ]}

        legends={[
          {
              anchor: 'right',
              direction: 'column',
              justify: false,
              translateX: 50,
              translateY: 50,
              itemsSpacing: 0,
              itemWidth: 150,
              itemHeight: 20,
              itemTextColor: '#999',
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 14,
              symbolShape: 'circle',
              effects: [
                          {
                              on: 'hover',
                              style: {
                                  itemTextColor: '#000'
                              }
                          }
                      ],
                      legendFormat:(d)=>{d.value+d.id}
                  }
                ]}

        
            />

  
           
          </div>

        )

}
export default GraficaPie