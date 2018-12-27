import React from 'react';
import StyledPlot from '../StyledPlot';
import Footer from '../Footer';

import d3 from 'd3';
const format2 = d3.format(".2s");
const format3 = d3.format(".3s");

class PlotLoanPayments extends React.Component {
	render() {
		const { input, buyScenarioOutputs } = this.props
		const {
			amortization,
			mortgageInterestRate
		} = input
		const { 
			timeMonths, 
			loan, 
			interestEachMonth, 
			interestSum,
			principalEachMonth, 
			loanPaymentMonthly,
			loanPaymentEachMonth, 
			loanPaymentSum,
			debtEachMonth ,
			interestPVSum,
			loanPaymentPVSum
		} = buyScenarioOutputs

		return (
			<div>
				<StyledPlot
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
							name: 'Debt',
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
					<p>
						{`An amortized loan is a loan where the periodic payment consists of both principal and interest. Interest is the cost of 'renting' money. The ${format3(loan)} loan required to be paid over ${Number.parseInt(amortization)} years with a mortage interest rate of ${mortgageInterestRate}% results in a fixed monthly payment of ${format3(loanPaymentMonthly)}. The first month's payment consists of ${format3(interestEachMonth[1])} in interest which is ${format2(interestEachMonth[1]*100/loanPaymentMonthly)}% of the monthly payment. Over time as the debt reduces, the interest that you pay also falls. In nominal terms, i.e., not accounting for inflation, the total interest paid over ${Number.parseInt(amortization)} years is ${format2(interestSum*100/loanPaymentSum)}% of the total cost of the mortgage which is ${format3(loanPaymentSum)}. However, since more interest is paid upfront, accounting for inflation means that the interest paid is ${format2(interestPVSum*100/loanPaymentPVSum)}% of the present value of the total cost of the mortgage which is ${format3(loanPaymentPVSum)}.`}
					</p>
				</Footer>
			</div>
		);
	}
}

export default PlotLoanPayments;
