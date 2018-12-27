import React from 'react';
import * as math from 'mathjs';
import StyledPlot from '../StyledPlot';
import Footer from '../Footer';

class PlotRentInvestment extends React.Component {
	render() {
		const { buyScenarioOutputs, rentScenarioOutputs } = this.props
		let { 
			time, 
			cashFlowNet,
		} = buyScenarioOutputs
		const { 
			rentEachYear,
			investmentEachYear,
		} = rentScenarioOutputs

		cashFlowNet = math.multiply(-1, cashFlowNet)

		return (
			<div>
				<StyledPlot
					data={[
						{
							x: time,
							y: cashFlowNet,
							name: 'Cashflow net in buy scenario',
							type: 'scatter',
						},
						{
							x: time,
							y: rentEachYear,
							name: 'Rent',
							type: 'scatter',
						},
						{
							x: time,
							y: investmentEachYear,
							name: 'Available to invest',
							type: 'scatter',
							mode: 'lines',
							line: {
								color: 'red',
								width: 4
							}
						}
					]}
					layout={{
						title: 'Rent scenario: Investment opportunity',
						xaxis: {
							title: 'Time (years)',
							hoverformat: '.0f',
							showgrid: true,
							zeroline: true,
							showline: true,
						},
						yaxis: {
							title: 'Nominal value',
							tickformat: '.2s',
							hoverformat: '.2s',
							showgrid: true,
							zeroline: true,
							rangemode: 'tozero',
						}
					}}
				/>
				<Footer>

				</Footer>
			</div>
		);
	}
}

export default PlotRentInvestment;
