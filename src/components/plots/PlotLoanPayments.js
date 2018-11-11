import React from 'react';
import Plot from 'react-plotly.js';
import Footer from '../Footer';

class PlotLoanPayments extends React.Component {
	render() {
		const { buyScenarioOutputs } = this.props
		const { timeMonths, interestEachMonth, principalEachMonth, loanPaymentEachMonth,  debtEachMonth } = buyScenarioOutputs

		return (
			<div>
				<Plot
					data={[
						{
							x: timeMonths,
							y: interestEachMonth,
							name: 'Interest',
							fill: 'tozeroy',
							type: 'scatter',
							stackgroup: 'one'
						},
						{
							x: timeMonths,
							y: principalEachMonth,
							name: 'Principal',
							fill: 'tonexty',
							type: 'scatter',
							stackgroup: 'one'
						},
						{
							x: timeMonths,
							y: loanPaymentEachMonth,
							name: 'Loan payment',
							type: 'scatter',
						},
						{
							x: timeMonths,
							y: debtEachMonth,
							yaxis: 'y2',
							name: 'debt',
							type: 'scatter',
						}
					]}
					layout={{
						title: 'Buy scenario: Paying off the mortgage',
						xaxis: {
							title: 'Time (months)',
							hoverformat: '.0f',
							showgrid: true,
						},
						yaxis: {
							title: 'Loan component',
							tickformat: '.2s',
							hoverformat: '.2s',
							showgrid: true,
							rangemode: 'tozero',
						},
						yaxis2: {
							title: 'Debt',
							tickformat: '.2s',
							hoverformat: '.2s',
							showgrid: false,
							overlaying: 'y',
							side: 'right',
							rangemode: 'tozero'
						}
					}}
				/>
				<Footer>
				</Footer>
			</div>
		);
	}
}

export default PlotLoanPayments;
