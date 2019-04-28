import React from "react";
import Table from "./Table";

const columnNames = [
	"year",
	"buyScenarioCashFlowNet",
	"rentEachYear",
	"investmentEachYear",
	"netWorthRent",
	"netWorthRentPV"
];
const title = "Rent scenario";

class TableRentScenario extends React.Component {
	render() {
		const { buyScenarioOutputs, rentScenarioOutputs } = this.props;
		const { cashFlowNet: buyScenarioCashFlowNet } = buyScenarioOutputs;
		const { time } = rentScenarioOutputs;

		const data = time.map(year => {
			const values = columnNames
				.slice(2)
				.reduce((accumulator, columnName) => {
					accumulator[columnName] =
						rentScenarioOutputs[columnName][year];
					return accumulator;
				}, {});

			return {
				year,
				buyScenarioCashFlowNet: buyScenarioCashFlowNet[year],
				...values
			};
		});

		return <Table title={title} data={data} columnNames={columnNames} />;
	}
}

export default TableRentScenario;
