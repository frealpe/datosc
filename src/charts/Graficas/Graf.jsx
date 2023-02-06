import crossfilter from 'crossfilter2'
import * as dc from "dc";
import * as d3 from 'd3'

const MARGIN = { TOP: 10, BOTTOM: 50, LEFT: 70, RIGHT: 10 }
const WIDTH = 800 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;

export default class draw {
	constructor() {

		var chart = dc.barChart("#kasd");
		function print_filter(filter) {
			var f=eval(filter);
			if (typeof(f.length) != "undefined") {}else{}
			if (typeof(f.top) != "undefined") {f=f.top(Infinity);}else{}
			if (typeof(f.dimension) != "undefined") {f=f.dimension(function(d) { return "";}).top(Infinity);}else{}
			console.log(filter+"("+f.length+") = "+JSON.stringify(f).replace("[","[\n\t").replace(/}\,/g,"},\n\t").replace("]","\n]"));
		  }

		var data  = [ 
			{ name: "Apple", type: "fruit", count: 20 },
			{ name: "Orange", type: "fruit", count: 10 },
			{ name: "Grapes", type: "fruit", count: 50 },
			{ name: "Mango",  type: "fruit", count: 40 }
		  ];

			var ndx = crossfilter(data);	  
			var runDimension  = ndx.dimension(function(d) {
			console.log(d.name);
			return d.name;
			});
			 var typeGroup = runDimension.group();
			 print_filter(typeGroup);
		  
			chart
			  .width(768)
			  .height(480)
			  .dimension(runDimension)
			  .group(typeGroup) 
			  .x(d3.scaleBand().rangeRound([0, 1024]).padding(0.1))
			  .renderLabel(true)
			  .xUnits(dc.units.ordinal);
			  
			return chart.render();
			}			  
			render() {
			  return(
				  <div />
			  );
			
	}

	update() {

		console.log(data);
	/* 	const vis = this

		vis.data = (gender === "men") ? vis.menData : vis.womenData;
		vis.xLabel.text(`The world's tallest ${gender}`)

		const y = d3.scaleLinear()
			.domain([
				d3.min(vis.data, d => d.height) * 0.95, 
				d3.max(vis.data, d =>  d.height)
			])
			.range([HEIGHT, 0])

		const x = d3.scaleBand()
			.domain(vis.data.map(d => d.name))
			.range([0, WIDTH])
			.padding(0.4)

		const xAxisCall = d3.axisBottom(x)
		vis.xAxisGroup.transition().duration(500).call(xAxisCall)

		const yAxisCall = d3.axisLeft(y)
		vis.yAxisGroup.transition().duration(500).call(yAxisCall)

		// DATA JOIN
		const rects = vis.svg.selectAll("rect")
			.data(vis.data)

		// EXIT
		rects.exit()
			.transition().duration(500)
				.attr("height", 0)
				.attr("y", HEIGHT)
				.remove()

		// UPDATE
		rects.transition().duration(500)
			.attr("x", d => x(d.name))
			.attr("y", d => y(d.height))
			.attr("width", x.bandwidth)
			.attr("height", d => HEIGHT - y(d.height))

		// ENTER
		rects.enter().append("rect")
			.attr("x", d => x(d.name))
			.attr("width", x.bandwidth)
			.attr("fill", "grey")
			.attr("y", HEIGHT)
			.transition().duration(500)
				.attr("height", d => HEIGHT - y(d.height))
				.attr("y", d => y(d.height)) */
	}
}


