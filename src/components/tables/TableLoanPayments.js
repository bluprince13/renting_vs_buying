import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import d3 from 'd3';
import Footer from '../Footer';

const format = d3.format(".3s");

class TableLoanPayments extends React.Component {
	render() {
		const { buyScenarioOutputs } = this.props
		const { timeMonths, interestEachMonth, principalEachMonth, loanPaymentEachMonth, debtEachMonth } = buyScenarioOutputs

		const data = timeMonths.map((month) => {
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
							style: {
								textAlign: 'center'
							},
						},
						{
							Header: "Loan payment",
							accessor: "loanPaymentEachMonth",
							style: {
								textAlign: 'center'
							},
							Cell: ({ value }) => <div>{format(value)}</div>
						},
						{
							Header: "Principal",
							accessor: "principalEachMonth",
							style: {
								textAlign: 'center'
							},
							Cell: ({ value }) => <div>{format(value)}</div>
						},
						{
							Header: "Interest",
							accessor: "interestEachMonth",
							style: {
								textAlign: 'center'
							},
							Cell: ({ value }) => <div>{format(value)}</div>
						},
						{
							Header: "Debt",
							accessor: "debtEachMonth",
							style: {
								textAlign: 'center'
							},
							Cell: ({ value }) => <div>{format(value)}</div>
						}
					]}
					defaultPageSize={10}
					className="-striped -highlight"
				/>
				<Footer>
				</Footer>
			</div>
		);
	}
}

export default TableLoanPayments;
