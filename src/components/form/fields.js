export default [
	{
		label: 'Home price',
		name: 'homePrice',
		min: 50000,
		max: 1000000,
		value: 200000,
		type: 'range'
	},
	{
		label: 'Mortgage annual interest',
		name: 'mortgageAnnualInterest',
		min: 0,
		max: 25,
		value: 5,
		type: 'range'
	},
	{
		label: 'Down payment as percentage of home price',
		name: 'downPaymentPercentage',
		min: 0,
		max: 100,
		value: 10,
		type: 'range'
	},
	{
		label: 'Amortization',
		name: 'amortization',
		min: 0,
		max: 40,
		value: 20,
		type: 'range'
    },
    {
		label: 'Stamp duty',
		name: 'stampDutyPercentage',
		min: 0,
		max: 20,
		value: 0,
		type: 'range'
    },
    {
		label: 'Other home purchase costs',
		name: 'homePurchaseCosts',
		min: 0,
		max: 10000,
		value: 3000,
		type: 'range'
	},
	{
		label: 'Annual home value appreciation',
		name: 'homeValueAppreciation',
		min: -5,
		max: 15,
		value: 2,
		type: 'range'
    },
    {
		label: 'Cost of selling home',
		name: 'homeSellingFeesPercentage',
		min: 0,
		max: 10,
		value: 5,
		type: 'range'
    },
    {
        label: 'Monthly rent',
		name: 'rent',
		min: 50,
		max: 1500,
		value: 400,
		type: 'range'
    },
    {
        label: 'Annual change in rent',
		name: 'rentChange',
		min: 0,
		max: 15,
		value: 2,
		type: 'range'
    },
    {
        label: 'Expected annual investment return',
		name: 'investmentReturn',
		min: 0,
		max: 20,
		value: 5,
		type: 'range'
    },
    {
        label: 'Inflation',
		name: 'inflation',
		min: -5,
		max: 10,
		value: 3,
		type: 'range'
    },
];
