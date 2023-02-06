import draw from '../Graficas/Graf';
import React, { useRef, useState, useEffect } from 'react';


const ViewP = ({data}) => {
  
  const chartArea = useRef(null)
	const [chart, setChart] = useState(null)
	useEffect(() => {
		if (!chart) {
			setChart(new draw(chartArea.current))
		}

	},[chart,data])

	return (
		<div className="chart-area" ref={chartArea}></div>
	)           

}

export default ViewP
