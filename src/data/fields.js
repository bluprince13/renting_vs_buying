export default [
	{
		label: 'Home price',
		name: 'homePrice',
		min: 50000,
		max: 1000000,
		step: 1000,
		defaultValue: 200000,
		type: 'range',
		info: 'The home price excluding any costs incurred in purchasing it.'
	},
	{
		label: 'Mortgage interest rate',
		name: 'mortgageInterestRate',
		min: 0,
		max: 25,
		step: 0.1,
		defaultValue: 5,
		type: 'range',
		info: 'The annual interest rate for the mortgage over your term, as quoted by your lender.',
		unit: '%'
	},
	{
		label: 'Down payment',
		name: 'downPaymentPercentage',
		min: 0,
		max: 100,
		step: 0.1,
		defaultValue: 10,
		type: 'range',
		info: 'The amount of money, as a percentage of home price, you will put towards the purchase of your home upfront that will not be covered by your mortgage.',
		unit: '%'
	},
	{
		label: 'Amortization',
		name: 'amortization',
		min: 0,
		max: 40,
		step: 1,
		defaultValue: 20,
		type: 'range',
		info: 'The total length of time you will take to pay off your mortgage.',
		unit: 'years'
	},
	{
		label: 'Stamp duty',
		name: 'stampDutyPercentage',
		min: 0,
		max: 20,
		step: 0.1,
		defaultValue: 0,
		type: 'range',
		info: '',
		unit: '%'
	},
	{
		label: 'Other home purchase costs',
		name: 'homePurchaseCosts',
		min: 0,
		max: 10000,
		step: 100,
		defaultValue: 3000,
		type: 'range',
		info: '',
		unit: ''
	},
	{
		label: 'Initial monthly rental income',
		name: 'rentIncomeFirstMonth',
		min: 0,
		max: 5000,
		step: 50,
		defaultValue: 0,
		type: 'range',
		info: 'This will be assumed to increase annually at the specified rate of increase',
		unit: ''
	},
	{
		label: 'Annual home value appreciation',
		name: 'homeValueAppreciation',
		min: -5,
		max: 15,
		step: 0.1,
		defaultValue: 2,
		type: 'range',
		info: '',
		unit: '%'
	},
	{
		label: 'Home maintenance cost',
		name: 'homeMaintenancePercentage',
		min: 0,
		max: 5,
		step: 0.1,
		defaultValue: 1,
		type: 'range',
		info: '',
		unit: '%'
	},
	{
		label: 'Cost of selling home',
		name: 'homeSellingFeesPercentage',
		min: 0,
		max: 10,
		step: 0.1,
		defaultValue: 5,
		type: 'range',
		info: '',
		unit: '%'
	},
	{
		label: 'Initial monthly rent',
		name: 'rentFirstMonth',
		min: 50,
		max: 1500,
		step: 10,
		defaultValue: 400,
		type: 'range',
		info: '',
		unit: ''
	},
	{
		label: 'Annual appreciation in rent',
		name: 'rentAppreciation',
		min: 0,
		max: 15,
		step: 0.1,
		defaultValue: 2,
		type: 'range',
		info: '',
		unit: '%'
	},
	{
		label: 'Expected annual investment return',
		name: 'investmentReturn',
		min: 0,
		max: 20,
		step: 0.1,
		defaultValue: 5,
		type: 'range',
		info: '',
		unit: '%'
	},
	{
		label: 'Inflation rate',
		name: 'inflationRate',
		min: -5,
		max: 10,
		step: 0.1,
		defaultValue: 3,
		type: 'range',
		info: '',
		unit: '%'
	}
];
