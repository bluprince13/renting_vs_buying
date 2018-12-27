import React from 'react';
import * as math from 'mathjs';
import StyledPlot from '../StyledPlot';
import Footer from '../Footer';
import Annot from '../Annot';
import { format2, format3 } from '../../functions/helpers';

class PlotRentVsBuy extends React.Component {
	render() {
		const { input, buyScenarioOutputs, rentScenarioOutputs } = this.props
		const { netWorthBuyPV } = buyScenarioOutputs
		const { netWorthRentPV } = rentScenarioOutputs
		const differencePV = math.subtract(netWorthRentPV, netWorthBuyPV)

		const {
			totalTime,
			homePrice,
			homeValueAppreciation,
			homeSellingFeesPercentage,
			inflationRate,
			investmentReturnRate,
		} = input
		const { 
			loan
		} = buyScenarioOutputs

		return (
			<div>
				<StyledPlot
					data={[
						{
							x: totalTime,
							y: netWorthRentPV,
							type: 'scatter',
							mode: 'lines+points',
							marker: { color: 'blue' },
							name: 'Rent'
						},
						{
							x: totalTime,
							y: netWorthBuyPV,
							type: 'scatter',
							mode: 'lines+points',
							marker: { color: 'red' },
							name: 'Buy'
						},
						{
							x: totalTime,
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
					<p>
						Net worth is calculated by subtracting your liabilities from your assets. In the buy scenario, you own an asset, the home, worth <Annot>{format3(homePrice)}</ Annot> less the <Annot>{format2(homeSellingFeesPercentage)}%</ Annot> selling cost of the home value. You also have a liability, the mortgage, worth <Annot>{format3(loan)}</ Annot>. The home value increases at <Annot>{format2(homeValueAppreciation)}%</ Annot> each year. As you pay back your mortgage, your liability reduces gradually as well. Therefore, on the whole, your net worth increases each year.  Taking into account the inflation at <Annot>{format2(inflationRate)}%</ Annot> each year allows us to calculate the Net Present Value [NPV] shown in the plot above.
					</p>	
					<p>		
						In the rent scenario, you don't own your home, nor do you have any liabilities. So, the net worth should be just zero. However, the buy scenario has an opportunity cost which we need to account for. There is additional cash flowing out in the buy scenario which, in the rent scenario, may be invested in the stock market. You now have an asset, stocks, growing at an assumed compound rate of <Annot>{format2(investmentReturnRate)}%</ Annot> each year.
						
						{/* An amortized loan is a loan where the periodic payment consists of both principal and interest. Interest is the cost of 'renting' money. The <Annot>{format3(loan)}</ Annot> loan required to be paid over <Annot>{Number.parseInt(amortization)}</ Annot> years with a mortage interest rate of <Annot>{mortgageInterestRate}%</Annot> results in a fixed monthly payment of <Annot>{format3(loanPaymentMonthly)}</Annot>. The first month's payment consists of <Annot>{format3(interestEachMonth[1])}</Annot> in interest which is <Annot>{format2(interestEachMonth[1]*100/loanPaymentMonthly)}%</Annot> of the monthly payment. Over time as the debt reduces, the interest that you pay also falls. In nominal terms, i.e., not accounting for inflation, the total interest paid over <Annot>{Number.parseInt(amortization)}</Annot> years is <Annot>{format2(interestSum*100/loanPaymentSum)}%</Annot> of the <Annot>{format3(loanPaymentSum)}</Annot> total cost of the mortgage. However, accounting for inflation, the present value of the total cost of the mortgage is <Annot>{format3(loanPaymentPVSum)}</Annot>. The interest paid is <Annot>{format2(interestPVSum*100/loanPaymentPVSum)}% </Annot> of this since more interest is paid in the earlier years when money has more value. */}
					</p>				
				</Footer>
			</div>
		);
	}
}

export default PlotRentVsBuy;
