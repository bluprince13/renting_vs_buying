import React from "react";
import Table from "./Table";

const columnNames = [
	"month",
	"interestEachMonth",
	"principalEachMonth",
	"loanPaymentEachMonth",
	"debtEachMonth"
];
const title = "Buy scenario: Loan payments table";

class TableLoanPayments extends React.Component {
	render() {
		const { buyScenarioOutputs } = this.props;
		const { amortizationTimeMonths } = buyScenarioOutputs;

		const data = amortizationTimeMonths.map(month => {
			const values = columnNames
				.slice(1)
				.reduce((accumulator, columnName) => {
					accumulator[columnName] =
						buyScenarioOutputs[columnName][month];
					return accumulator;
				}, {});

			return {
				month,
				...values
			};
		});

		return <Table title={title} data={data} columnNames={columnNames} />;
	}
}

export default TableLoanPayments;
