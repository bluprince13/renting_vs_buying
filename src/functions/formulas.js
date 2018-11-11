import * as math from 'mathjs';

export function getRange(start, end) {
	return Array(end - start + 1)
		.fill()
		.map((_, idx) => start + idx);
}

export function getPercentage(reference, percentage) {
	return (percentage / 100) * reference;
}

export function getPercentageEachYear(referenceArray, percentage) {
	return referenceArray.map(input => {
		return input * percentage / 100
	})
}

export function getSimpleInterest(principal, rate, numberOfPeriods) {
	return ((principal * rate) / 100) * numberOfPeriods;
}

export function getCompoundInterest(principal, rate, numberOfCompoundingPeriods) {
	return principal * (1 + rate / 100) ** numberOfCompoundingPeriods - principal;
}

export function getPresentValue(futureValue, rate, numberOfCompoundingPeriods) {
	return futureValue / (1 + rate / 100) ** numberOfCompoundingPeriods;
}

export function getFutureValue(presentValue, rate, numberOfCompoundingPeriods) {
	return presentValue * (1 + rate / 100) ** numberOfCompoundingPeriods;
}

export function getValueEachYear(presentValue, rate, numberOfCompoundingPeriods) {
	const time = getRange(0, numberOfCompoundingPeriods);
	const valueEachYear = time.map(year => {
		return getFutureValue(presentValue, rate, year);
	});
	return valueEachYear
}

export function getPresentValueEachPeriod(valueEachPeriod, inflationRateEachPeriod) {
	const presentValueEachYear = valueEachPeriod.map((futureValue, numberOfCompoundingPeriods) => {
		return getPresentValue(futureValue, inflationRateEachPeriod, numberOfCompoundingPeriods);
	});
	return presentValueEachYear
}

export function getCumulative(inputArray) {
	const cumulative = inputArray.reduce(
		(accumulator, currentValue) => {
			const previousSum = accumulator.slice(-1)[0] || 0;
			const newSum = previousSum + currentValue;
			return [...accumulator, newSum];
		},
		[]
	);
	return cumulative
}

// Reference: https://www.thebalance.com/loan-payment-calculations-315564
export function getDiscountFactor(mortgageInterestRate, numYears) {
	const numMonths = numYears * 12;
	const interestMonthly = mortgageInterestRate / 12;
	return ((1 + interestMonthly / 100) ** numMonths - 1) /
		((interestMonthly / 100) * (1 + interestMonthly / 100) ** numMonths);
}

// Reference: https://www.thebalance.com/loan-payment-calculations-315564
export function getLoanPaymentMonthly(loan, mortgageInterestRate, numYears) {
	const discountFactor = getDiscountFactor(mortgageInterestRate, numYears)
	return loan / discountFactor;
}

// Reference: https://www.thebalance.com/loan-payment-calculations-315564
export function calcLoanPaymentFactorsEachMonth(loan, mortgageInterestRate, numYears) {
	const loanPaymentMonthly = getLoanPaymentMonthly(loan, mortgageInterestRate, numYears)
	
	const numMonths = numYears * 12;
	let loanPaymentEachMonth = getValueArray(loanPaymentMonthly, numMonths)

	const interestMonthly = mortgageInterestRate / 12
	let interestEachMonth = [0]
	let principalEachMonth = [0]

	const debtEachMonth = loanPaymentEachMonth.reduce(
		(accumulator, loanPaymentThisMonth) => {
			const debtLastMonth = accumulator.slice(-1)[0];
			const interestThisMonth = getSimpleInterest(
				debtLastMonth,
				interestMonthly,
				1
			);
			const principalThisMonth =
				loanPaymentThisMonth - interestThisMonth;

			interestEachMonth.push(interestThisMonth);
			principalEachMonth.push(principalThisMonth);
				
			const debtNextMonth = debtLastMonth - principalThisMonth;
			return [...accumulator, debtNextMonth];
		},
		[loan]
	);

	const loanPaymentSum = math.sum(loanPaymentEachMonth);
	const interestSum = math.sum(interestEachMonth);
	const principalSum = math.sum(principalEachMonth);

	loanPaymentEachMonth.unshift(0)
	return { 
		debtEachMonth, 
		loanPaymentMonthly, 
		loanPaymentEachMonth, 
		loanPaymentSum,
		interestEachMonth, 
		interestSum,
		principalEachMonth,
		principalSum
	}
}

export function getDebtEachYear(loan, mortgageInterestRate, numYears) {
	const { debtEachMonth } = calcLoanPaymentFactorsEachMonth(loan, mortgageInterestRate, numYears)
	const time = getRange(0, numYears);
	const debtEachYear = time.map(year => {
		const month = 12 * year;
		return debtEachMonth[month];
	});
	return debtEachYear
}

export function getValueArray(value, length) {
	const ValueArray = Array(length).fill(value);
	return ValueArray
}

export function setInitialZero(inputArray) {
		let outputArray = inputArray
		outputArray.pop()
		outputArray.unshift(0)
	return outputArray
}

export function getBuyScenarioOutputs(props) {
	const {
		homePrice,
		homeValueAppreciation,
		amortization,
		downPaymentPercentage,
		stampDutyPercentage,
		homePurchaseCosts,
		mortgageInterestRate,
		rentIncomeFirstMonth,
		rentAppreciation,
		homeMaintenancePercentage,
		homeSellingFeesPercentage,
		inflationRate,
	} = props

	const numYears = amortization;
	const time = getRange(0, numYears);
	const numMonths = numYears * 12
	const timeMonths = getRange(0, numMonths);

	// initial costs
	const downPayment = getPercentage(homePrice, downPaymentPercentage);
	const loan = homePrice - downPayment
	const stampDuty = getPercentage(homePrice, stampDutyPercentage);
	const initialCosts = downPayment + stampDuty + homePurchaseCosts
	const initialCostsArrayCumulative = getValueArray(initialCosts, numYears + 1)

	// value of house and debt
	const homeValueEachYear = getValueEachYear(homePrice, homeValueAppreciation, numYears);
	const debtEachYear = getDebtEachYear(loan, mortgageInterestRate, numYears)

	// in and out each year
	const homeMaintenanceCostsEachYear = setInitialZero(
		getPercentageEachYear(homeValueEachYear, homeMaintenancePercentage)
	)
	const homeMaintenanceCostsEachYearCumulative = getCumulative(homeMaintenanceCostsEachYear)
	const rentIncomeEachYear = setInitialZero(
		getValueEachYear(12 * rentIncomeFirstMonth, rentAppreciation, numYears)
	)
	const rentIncomeEachYearCumulative = getCumulative(rentIncomeEachYear)

	// selling fees
	const homeSellingFeesEachYear = getPercentageEachYear(homeValueEachYear, homeSellingFeesPercentage)

	// netWorth
	const netWorthBuyPos = math.add(homeValueEachYear, rentIncomeEachYearCumulative)
	const netWorthBuyNeg = math.add(initialCostsArrayCumulative, debtEachYear, homeSellingFeesEachYear, homeMaintenanceCostsEachYearCumulative)
	const netWorthBuy = math.subtract(netWorthBuyPos, netWorthBuyNeg)
	const netWorthBuyPV = getPresentValueEachPeriod(netWorthBuy, inflationRate);

	// cashFlow
	const loanPaymentMonthly = getLoanPaymentMonthly(loan, mortgageInterestRate, numYears) 
	const loanPaymentYearly = loanPaymentMonthly * 12
	let loanPaymentEachYear = Array(numYears + 1).fill(loanPaymentYearly);
	loanPaymentEachYear = setInitialZero(loanPaymentEachYear);
	
	// additional detail of interest
	const cashFlowIn = rentIncomeEachYear
	let cashFlowOut = math.add(homeMaintenanceCostsEachYear, loanPaymentEachYear)
	cashFlowOut[0] = cashFlowOut[0] + initialCosts
	const cashFlowNet = math.subtract(cashFlowIn, cashFlowOut)

	const loanPaymentFactorsEachMonth = calcLoanPaymentFactorsEachMonth(loan, mortgageInterestRate, numYears)
	const { interestEachMonth, loanPaymentEachMonth } = loanPaymentFactorsEachMonth
	const interestEachMonthPV = getPresentValueEachPeriod(interestEachMonth, inflationRate/12);
	const loanPaymentEachMonthPV = getPresentValueEachPeriod(loanPaymentEachMonth, inflationRate/12);
	const interestPVSum = math.sum(interestEachMonthPV)
	const loanPaymentPVSum = math.sum(loanPaymentEachMonthPV)

	return { 
		numYears,
		time, 
		timeMonths,
		homeValueEachYear, 
		downPayment, 
		loan,
		stampDuty, 
		homePurchaseCosts, 
		initialCosts, 
		debtEachYear,
		homeMaintenanceCostsEachYearCumulative,
		homeSellingFeesEachYear, 
		netWorthBuyPV, 
		cashFlowIn,
		rentIncomeEachYear,
		cashFlowOut,
		homeMaintenanceCostsEachYear,
		loanPaymentEachYear,
		cashFlowNet,
		...loanPaymentFactorsEachMonth,
		interestEachMonthPV,
		interestPVSum,
		loanPaymentPVSum
	}
}

export function getRentScenarioOutputs(props) {
	const {
		amortization,
		rentFirstMonth,
		rentAppreciation,
		investmentReturn,
		inflationRate,
		buyScenarioCashFlowNet
	} = props

	const numYears = amortization;
	const rentEachYear = getValueEachYear(rentFirstMonth * 12, rentAppreciation, numYears)
	
	const time = getRange(0, numYears);
	const investmentEachYear = time.map(year => {
		return Math.max(0, - buyScenarioCashFlowNet[year] - rentEachYear[year]);
	});

	// Renting networth should start at 0

	const netWorthRent = investmentEachYear.reduce(
		(accumulator, investmentThisYear) => {
			const capitalThisYear = accumulator.slice(-1)[0] || 0;
			const returnsThisYear = getSimpleInterest(
				capitalThisYear,
				investmentReturn,
				1
			);
			const capitalNextYear = capitalThisYear + returnsThisYear + investmentThisYear;
			return [...accumulator, capitalNextYear];
		},
		[]
	);

	const netWorthRentPV = getPresentValueEachPeriod(netWorthRent, inflationRate)
	return { rentEachYear, investmentEachYear, netWorthRentPV }
}