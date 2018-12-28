import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import d3 from 'd3';

const format = d3.format(".5s");
const style = {
	textAlign: 'center'
}
const Cell = ({ value }) => <div>{format(value)}</div>

class TableLoanPayments extends React.Component {
	render() {
		const { buyScenarioOutputs } = this.props
		const { amortizationTimeMonths, interestEachMonth, principalEachMonth, loanPaymentEachMonth, debtEachMonth } = buyScenarioOutputs

		const data = amortizationTimeMonths.map((month) => {
			return {
				month: month,
				interestEachMonth: interestEachMonth[month],
				principalEachMonth: principalEachMonth[month],
				loanPaymentEachMonth: loanPaymentEachMonth[month],
				debtEachMonth: debtEachMonth[month]
			}
		})

		return (
			<div>
				<h2>Buy scenario: Loan payments table</h2>
				<ReactTable
					data={data}
					columns={[
						{
							Header: "Month",
							accessor: "month",
							style
						},
						{
							Header: "Loan payment",
							accessor: "loanPaymentEachMonth",
							style,
							Cell
						},
						{
							Header: "Principal",
							accessor: "principalEachMonth",
							style,
							Cell
						},
						{
							Header: "Interest",
							accessor: "interestEachMonth",
							style,
							Cell
						},
						{
							Header: "Debt",
							accessor: "debtEachMonth",
							style,
							Cell
						}
					]}
					defaultPageSize={10}
					className="-striped -highlight"
				/>
			</div>
		);
	}
}

export default TableLoanPayments;
