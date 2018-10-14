import React from 'react';
import Plot from 'react-plotly.js';
import { connect } from 'react-redux';

function range(start, end) {
	return Array(end - start + 1)
		.fill()
		.map((_, idx) => start + idx);
}

function simpleInterest(principal, rate, time) {
	return ((principal * rate) / 100) * time;
}

function compoundInterest(principal, rate, time) {
	return principal * (1 + rate / 100) ** time - principal;
}

function presentValue(futureValue, inflationRate, time) {
	return futureValue / (1 + inflationRate / 100) ** time;
}

class Projection extends React.Component {
	render() {
		if (typeof this.props.InputForm === 'undefined') {
			return null;
		}

		const {
			homePrice,
			mortgageAnnualInterest,
			downPaymentPercentage,
			homeValueAppreciation,
			amortization,
			stampDutyPercentage,
      homePurchaseCosts,
      homeSellingFeesPercentage,
			rent,
			rentChange,
			investmentReturn,
			inflation
		} = this.props.InputForm.values;

		const numYears = amortization;
		const time = range(0, numYears - 1);
		console.log('Time', time);

		const numMonths = numYears * 12;
		const monthlyInterest = mortgageAnnualInterest / 12;
		const discountFactor =
			((1 + monthlyInterest / 100) ** numMonths - 1) /
			((monthlyInterest / 100) * (1 + monthlyInterest / 100) ** numMonths);

		const downPayment = (downPaymentPercentage / 100) * homePrice;
		console.log('downPayment', downPayment);
		const stampDuty = (stampDutyPercentage / 100) * homePrice;
		console.log('stampDuty', stampDuty);

		const loan = homePrice - downPayment;
		console.log('loan', loan);
		const loanPayment = loan / discountFactor;
		console.log('loanPayment', loanPayment);

		const loanPayments = Array(numMonths).fill(loanPayment);

		const debtMonthly = loanPayments.reduce(
			(previousValue, loanPaymentThisMonth) => {
				const debtLastMonth = previousValue.slice(-1)[0];
				const interestThisMonth = simpleInterest(
					debtLastMonth,
					monthlyInterest,
					1
				);
				const principalPaidOffThisMonth =
					loanPaymentThisMonth - interestThisMonth;
				const debtNextMonth = debtLastMonth - principalPaidOffThisMonth;
				return [...previousValue, debtNextMonth];
			},
			[loan]
		);
		console.log('debtMonthly', debtMonthly);

		const debtYearly = time.map(year => {
			const month = 12 * year;
			return debtMonthly[month];
		});
		console.log('debtYearly', debtYearly);

		const homeValue = time.map(year => {
			return homePrice * (1 + (year * homeValueAppreciation) / 100);
		});
    console.log('homeValue', homeValue);
    
    const homeSellingFees = homeValue.map(value => value * homeSellingFeesPercentage/100)
    console.log('homeSellingFees', homeSellingFees);

		const netWorthBuy = time.map(year => {
			return homeValue[year] - debtYearly[year] - homeSellingFees[year];
		});
		console.log('netWorthBuy', netWorthBuy);

		const netWorthBuyPV = netWorthBuy.map((futureValue, year) => {
			return presentValue(futureValue, inflation, year);
		});
		console.log('netWorthBuyPV', netWorthBuyPV);

		const initialInvestment = downPayment + stampDuty + homePurchaseCosts;
		console.log('initialInvestment', initialInvestment);

		const rentFirstYear = rent * 12;
		const rentYearly = time.map(year => {
			return rentFirstYear + compoundInterest(rentFirstYear, rentChange, year);
		});
		console.log('rentYearly', rentYearly);

		const investmentYearly = time.map(year => {
			return Math.max(0, loanPayment * 12 - rentYearly[year]);
		});
		console.log('investmentYearly', investmentYearly);

		const netWorthRent = investmentYearly.reduce(
			(previousValue, investmentThisYear) => {
				const capitalThisYear = previousValue.slice(-1)[0];
				const returnsThisYear = simpleInterest(
					capitalThisYear,
					investmentReturn,
					1
				);
				const capitalNextYear =
					capitalThisYear + returnsThisYear + investmentThisYear;
				return [...previousValue, capitalNextYear];
			},
			[initialInvestment]
		);
    console.log('netWorthRent ', netWorthRent);
    
    const netWorthRentPV = netWorthRent.map((futureValue, year) => {
			return presentValue(futureValue, inflation, year);
		});
		console.log('netWorthRentPV', netWorthRentPV);

    const differencePV = time.map(year => {
			return netWorthRentPV[year] - netWorthBuyPV[year];
		});
		console.log('netWorthRentPV', netWorthRentPV);

		return (
			<Plot
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
					title: 'Net worth projection',
					xaxis: {
            title: 'Time (years)',
            hoverformat: '.0f',
            showgrid: true,
            zeroline: true,
					},
					yaxis: {
            title: 'Net worth (Present Value)',
            hoverformat: '.0f',
            showgrid: true,
            zeroline: true,
					}
				}}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		InputForm: state.form.InputForm
	};
};

export default connect(mapStateToProps)(Projection);
