export default {
	"General":
		[
			{
				label: 'Projection period',
				name: 'numYears',
				min: 1,
				max: 75,
				step: 1,
				defaultValue: 30,
				type: 'range',
				info: 'Number of years you want to project to.',
				unit: 'years'
			},
			{
				label: 'Inflation rate',
				name: 'inflationRate',
				min: -5,
				max: 10,
				step: 0.1,
				defaultValue: 2,
				type: 'range',
				info: 'Inflation is a measure of how much prices of goods and services have gone up over time',
				unit: '%'
			},
			{
				label: 'Annual rent appreciation',
				name: 'rentAppreciation',
				min: 0,
				max: 5,
				step: 0.1,
				defaultValue: 2,
				type: 'range',
				info: 'The same rate will be applied to rental costs in the rent scenario and any rental income in the buy scenario.',
				unit: '%'
			},
		],

	"Buy scenario":
		[
			{
				label: 'Home price',
				name: 'homePrice',
				min: 50000,
				max: 1000000,
				step: 1000,
				defaultValue: 125000,
				type: 'range',
				info: 'The home price excluding any costs incurred in purchasing it.'
			},
			{
				label: 'Mortgage interest rate',
				name: 'mortgageInterestRate',
				min: 0,
				max: 25,
				step: 0.1,
				defaultValue: 2,
				type: 'range',
				info: 'The annual interest rate for the mortgage over your term, as quoted by your lender.',
				unit: '%'
			},
			{
				label: 'Down payment',
				name: 'downPaymentPercentage',
				min: 0,
				max: 100,
				step: 1,
				defaultValue: 20,
				type: 'range',
				info: 'The amount of money, as a percentage of home price, you will put towards the purchase of your home upfront that will not be covered by your mortgage.',
				unit: '%'
			},
			{
				label: 'Mortgage term',
				name: 'amortization',
				min: 0,
				max: 40,
				step: 1,
				defaultValue: 25,
				type: 'range',
				info: 'The total length of time you will take to pay off your mortgage.',
				unit: 'years'
			},
			{
				label: 'Stamp duty',
				name: 'stampDutyPercentage',
				min: 0,
				max: 10,
				step: 0.1,
				defaultValue: 0,
				type: 'range',
				info: 'Tax owed to the government.',
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
				info: "There are a number of additional costs when you purchase a house. This includes the surveyor's fee, legal/conveyancing fees etc.",
				unit: ''
			},
			{
				label: 'Initial monthly rental income',
				name: 'rentIncomeFirstMonth',
				min: 0,
				max: 5000,
				step: 100,
				defaultValue: 0,
				type: 'range',
				info: 'A net positive cash flow, if any, will be accounted for in the net worth. However, the cash asset is assumed not to earn any interest',
				unit: ''
			},
			{
				label: 'Annual home value appreciation',
				name: 'homeValueAppreciation',
				min: -5,
				max: 10,
				step: 0.1,
				defaultValue: 2,
				type: 'range',
				info: 'House prices generally tend to increase in the long term.',
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
				info: 'A general rule of thumb is to set aside 1% of your home price to cover maintenance and repairs.',
				unit: '%'
			},
			{
				label: 'Cost of selling home',
				name: 'homeSellingFeesPercentage',
				min: 0,
				max: 10,
				step: 0.1,
				defaultValue: 2,
				type: 'range',
				info: 'If and when you decide to sell your home, there will be estate agent fees to pay.',
				unit: '%'
			},
		],

	"Rent scenario": 
		[
			{
				label: 'Initial monthly rent',
				name: 'rentFirstMonth',
				min: 50,
				max: 1500,
				step: 10,
				defaultValue: 320,
				type: 'range',
				info: '',
				unit: ''
			},
			{
				label: 'Annual investment return',
				name: 'investmentReturnRate',
				min: 0,
				max: 20,
				step: 0.1,
				defaultValue: 5,
				type: 'range',
				info: '',
				unit: '%'
			},
		]
};
