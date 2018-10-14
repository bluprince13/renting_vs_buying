export default [
	{
		label: 'Home price',
		name: 'homePrice',
		min: 50000,
		max: 1000000,
		value: 200000,
		type: 'range',
		info: 'The home price excluding any costs incurred in purchasing it.'
	},
	{
		label: 'Mortgage annual interest',
		name: 'mortgageAnnualInterest',
		min: 0,
		max: 25,
		value: 5,
		type: 'range',
		info: 'The annual interest rate for the mortgage over your term, as quoted by your lender.',
		unit: '%'
	},
	{
		label: 'Down payment',
		name: 'downPaymentPercentage',
		min: 0,
		max: 100,
		value: 10,
		type: 'range',
		info: 'The amount of money, as a percentage of home price, you will put towards the purchase of your home upfront that will not be covered by your mortgage.',
		unit: '%'
	},
	{
		label: 'Amortization',
		name: 'amortization',
		min: 0,
		max: 40,
		value: 20,
		type: 'range',
		info: 'The total length of time you will take to pay off your mortgage.',
		unit: 'years'
	},
	{
		label: 'Stamp duty',
		name: 'stampDutyPercentage',
		min: 0,
		max: 20,
		value: 0,
		type: 'range',
		info: '',
		unit: '%'
	},
	{
		label: 'Other home purchase costs',
		name: 'homePurchaseCosts',
		min: 0,
		max: 10000,
		value: 3000,
		type: 'range',
		info: '',
		unit: ''
	},
	{
		label: 'Annual home value appreciation',
		name: 'homeValueAppreciation',
		min: -5,
		max: 15,
		value: 2,
		type: 'range',
		info: '',
		unit: '%'
	},
	{
		label: 'Cost of selling home',
		name: 'homeSellingFeesPercentage',
		min: 0,
		max: 10,
		value: 5,
		type: 'range',
		info: '',
		unit: '%'
	},
	{
		label: 'Monthly rent',
		name: 'rent',
		min: 50,
		max: 1500,
		value: 400,
		type: 'range',
		info: '',
		unit: ''
	},
	{
		label: 'Annual change in rent',
		name: 'rentChange',
		min: 0,
		max: 15,
		value: 2,
		type: 'range',
		info: '',
		unit: '%'
	},
	{
		label: 'Expected annual investment return',
		name: 'investmentReturn',
		min: 0,
		max: 20,
		value: 5,
		type: 'range',
		info: '',
		unit: '%'
	},
	{
		label: 'Inflation',
		name: 'inflation',
		min: -5,
		max: 10,
		value: 3,
		type: 'range',
		info: '',
		unit: '%'
	}
];
