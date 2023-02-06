import { ResponsivePie } from "@nivo/pie";

const margin = { top: 40, right: 80, bottom: 80, left: 80 };

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
    fontSize: 96,
    color: "#FFFFFF",

    textAlign: "center",

    pointerEvents: "none"
  },
  totalLabel: {
    fontSize: 24
  }
};

function Grafipie({data}){

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
    

    legends={[
      {
          anchor: 'right',
          direction: 'column',
          justify: false,
          translateX: 20,
          translateY: 200,
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
export default Grafipie