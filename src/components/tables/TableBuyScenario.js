import React from "react";
import Table from "./Table";

const columnNames = [
	"year",
	"homeValueEachYear",
	"debtEachYear",
	"homeMaintenanceCostsEachYear",
	"rentIncomeEachYear",
	"homeSellingFeesEachYear",
	"loanPaymentEachYear",
	"cashFlowIn",
	"cashFlowOut",
	"cashFlowNet",
	"cashFlowNetPosCumulative",
	"netWorthBuyPos",
	"netWorthBuyNeg",
	"netWorthBuy",
	"netWorthBuyPV"
];
const title = "Buy scenario";
class TableBuyScenario extends React.Component {
	render() {
		const { buyScenarioOutputs } = this.props;
		const { totalTime } = buyScenarioOutputs;

		const data = totalTime.map(year => {
			const values = columnNames
				.slice(1)
				.reduce((accumulator, columnName) => {
					accumulator[columnName] =
						buyScenarioOutputs[columnName][year];
					return accumulator;
				}, {});

			return {
				year,
				...values
			};
		});

		return <Table title={title} data={data} columnNames={columnNames} />;
	}
}

export default TableBuyScenario;
