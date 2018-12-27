import React from 'react';
import * as math from 'mathjs';
import StyledPlot from '../StyledPlot';
import Footer from '../Footer';

class PlotRentVsBuy extends React.Component {
	render() {
		const { time, buyScenarioOutputs, rentScenarioOutputs } = this.props
		const { netWorthBuyPV } = buyScenarioOutputs
		const { netWorthRentPV } = rentScenarioOutputs
		const differencePV = math.subtract(netWorthRentPV, netWorthBuyPV)

		return (
			<div>
				<StyledPlot
					data={[
						{
							x: time,
							y: netWorthRentPV,
							type: 'scatter',
							mode: 'lines+points',
							marker: { color: 'blue' },
							name: 'Rent'
						},
						{
							x: time,
							y: netWorthBuyPV,
							type: 'scatter',
							mode: 'lines+points',
							marker: { color: 'red' },
							name: 'Buy'
						},
						{
							x: time,
							y: differencePV,
							type: 'scatter',
							mode: 'lines+points',
							marker: { color: 'green' },
							name: 'Rent - Buy'
						}
					]}
					layout={{
						title: 'Net worth projection: Renting vs. buying',
						xaxis: {
							title: 'Time (years)',
							hoverformat: '.0f',
							showgrid: true,
							zeroline: true,
							showline: true,
						},
						yaxis: {
							title: 'Net worth present value',
							tickformat: '.2s',
							hoverformat: '.2s',
							showgrid: true,
							zeroline: true,
							showline: true,
							rangemode: 'tozero',
						},
						autosize: true
					}}
				/>
				<Footer>
				</Footer>
			</div>
		);
	}
}

export default PlotRentVsBuy;
