import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import d3 from 'd3';

const format = d3.format(".5s");
const style = {
	textAlign: 'center'
}
const Cell = ({ value }) => <div>{format(value)}</div>

class TableBuyScenario extends React.Component {
	render() {
		const { buyScenarioOutputs } = this.props
		const { 
			totalTime,
	
			homeValueEachYear,
			debtEachYear,
	
			homeMaintenanceCostsEachYear,
			rentIncomeEachYear,
	
			homeSellingFeesEachYear,
	
			loanPaymentEachYear,
	
			cashFlowIn,
			cashFlowOut,
			cashFlowNet,
			cashFlowNetPosCumulative,
	
			netWorthBuyPos,
			netWorthBuyNeg,
			netWorthBuy,
			netWorthBuyPV,
		 } = buyScenarioOutputs

		const data = totalTime.map((year) => {
			return {
				year: year,

				homeValueEachYear: homeValueEachYear[year],
				debtEachYear: debtEachYear[year],

				homeMaintenanceCostsEachYear: homeMaintenanceCostsEachYear[year],
				rentIncomeEachYear: rentIncomeEachYear[year],

				homeSellingFeesEachYear: homeSellingFeesEachYear[year],
				loanPaymentEachYear: loanPaymentEachYear[year],

				cashFlowIn: cashFlowIn[year],
				cashFlowOut: cashFlowOut[year],
				cashFlowNet: cashFlowNet[year],
				cashFlowNetPosCumulative: cashFlowNetPosCumulative[year],

				netWorthBuyPos: netWorthBuyPos[year],
				netWorthBuyNeg: netWorthBuyNeg[year],
				netWorthBuy: netWorthBuy[year],
				netWorthBuyPV: netWorthBuyPV[year],
			}
		})

		return (
			<div>
				<h2>Buy scenario</h2>
				<ReactTable
					data={data}
					columns={[
						{
							Header: "Year",
							accessor: "year",
							style,
						},
						{
							Header: "homeValueEachYear",
							accessor: "homeValueEachYear",
							style,
							Cell
						},
						{
							Header: "debtEachYear",
							accessor: "debtEachYear",
							style,
							Cell
						},
						{
							Header: "homeMaintenanceCostsEachYear",
							accessor: "homeMaintenanceCostsEachYear",
							style,
							Cell
						},
						{
							Header: "rentIncomeEachYear",
							accessor: "rentIncomeEachYear",
							style,
							Cell
						},
						{
							Header: "homeSellingFeesEachYear",
							accessor: "homeSellingFeesEachYear",
							style,
							Cell
						},
						{
							Header: "loanPaymentEachYear",
							accessor: "loanPaymentEachYear",
							style,
							Cell
						},
						{
							Header: "cashFlowIn",
							accessor: "cashFlowIn",
							style,
							Cell
						},
						{
							Header: "cashFlowOut",
							accessor: "cashFlowOut",
							style,
							Cell
						},
						{
							Header: "cashFlowNet",
							accessor: "cashFlowNet",
							style,
							Cell
						},
						{
							Header: "cashFlowNetPosCumulative",
							accessor: "cashFlowNetPosCumulative",
							style,
							Cell
						},
						{
							Header: "netWorthBuyPos",
							accessor: "netWorthBuyPos",
							style,
							Cell
						},
						{
							Header: "netWorthBuyNeg",
							accessor: "netWorthBuyNeg",
							style,
							Cell
						},
						{
							Header: "netWorthBuy",
							accessor: "netWorthBuy",
							style,
							Cell
						},
						{
							Header: "netWorthBuyPV",
							accessor: "netWorthBuyPV",
							style,
							Cell
						},
					]}
					defaultPageSize={10}
					className="-striped -highlight"
				/>
			</div>
		);
	}
}

export default TableBuyScenario;
