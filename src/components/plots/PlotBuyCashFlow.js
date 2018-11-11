import React from 'react';
import Plot from 'react-plotly.js';
import * as math from 'mathjs';
import Footer from '../Footer';

class PlotBuyCashFlow extends React.Component {
	render() {
		const { buyScenarioOutputs } = this.props
		const { rentIncomeEachYear } = buyScenarioOutputs
		let { 
			initialCosts,
			homeMaintenanceCostsEachYear,
			loanPaymentEachYear
		} = buyScenarioOutputs
		let { time, cashFlowIn, cashFlowOut, cashFlowNet } = buyScenarioOutputs

		initialCosts = math.multiply(-1, initialCosts)
		homeMaintenanceCostsEachYear = math.multiply(-1, homeMaintenanceCostsEachYear)
		loanPaymentEachYear = math.multiply(-1, loanPaymentEachYear)
		cashFlowOut = math.multiply(-1, cashFlowOut)

		return (
			<div>
				<Plot
					data={[
						{
							x: time,
							y: rentIncomeEachYear,
							name: 'Rent income each year',
							type: 'scatter',
							stackgroup: 'zero'
						},
						{
							x: time,
							y: loanPaymentEachYear,
							name: 'Loan payment',
							type: 'scatter',
							stackgroup: 'one'
						},
						{
							x: time,
							y: homeMaintenanceCostsEachYear,
							name: 'Home maintenance costs',
							type: 'scatter',
							stackgroup: 'one'
						},
						{
							x: [0, 1],
							y: [initialCosts, 0],
							name: 'Initial costs',
							type: 'scatter',
							stackgroup: 'one'
						},
						{
							x: time,
							y: cashFlowIn,
							name: 'Cashflow In',
							type: 'scatter',
						},
						{
							x: time,
							y: cashFlowOut,
							name: 'Cashflow Out',
							type: 'scatter',
						},
						{
							x: time,
							y: cashFlowNet,
							name: 'Cashflow Net',
							type: 'scatter',
							mode: 'lines',
							line: {
								color: 'red',
								width: 4
							}
						}
					]}
					layout={{
						title: 'Buy scenario: Cashflow',
						xaxis: {
							title: 'Time (months)',
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
							showline: true,
						}
					}}
				/>
				<Footer>
				</Footer>
			</div>
		);
	}
}

export default PlotBuyCashFlow;
