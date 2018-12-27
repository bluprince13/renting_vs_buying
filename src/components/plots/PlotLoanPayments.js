import React from 'react';
import StyledPlot from '../StyledPlot';
import Annot from '../Annot';
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
						An amortized loan is a loan where the periodic payment consists of both principal and interest. Interest is the cost of 'renting' money. The <Annot>{format3(loan)}</ Annot> loan required to be paid over <Annot>{Number.parseInt(amortization)}</ Annot> years with a mortage interest rate of <Annot>{mortgageInterestRate}%</Annot> results in a fixed monthly payment of <Annot>{format3(loanPaymentMonthly)}</Annot>. The first month's payment consists of <Annot>{format3(interestEachMonth[1])}</Annot> in interest which is <Annot>{format2(interestEachMonth[1]*100/loanPaymentMonthly)}%</Annot> of the monthly payment. Over time as the debt reduces, the interest that you pay also falls. In nominal terms, i.e., not accounting for inflation, the total interest paid over <Annot>{Number.parseInt(amortization)}</Annot> years is <Annot>{format2(interestSum*100/loanPaymentSum)}%</Annot> of the <Annot>{format3(loanPaymentSum)}</Annot> total cost of the mortgage. However, accounting for inflation, the present value of the total cost of the mortgage is <Annot>{format3(loanPaymentPVSum)}</Annot>. The interest paid is <Annot>{format2(interestPVSum*100/loanPaymentPVSum)}% </Annot> of this since more interest is paid in the earlier years when money has more value.
					</p>
				</Footer>
			</div>
		);
	}
}

export default PlotLoanPayments;
