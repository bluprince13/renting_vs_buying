import React from "react";
import Table from "./Table";

const columnNames = ["year", "homeValueEachYear", "debtEachYear", "homeMaintenanceCostsEachYear", "rentIncomeEachYear", "homeSellingFeesEachYear", "loanPaymentEachYear", "cashFlowIn", "cashFlowOut", "cashFlowNet", "cashFlowNetPosCumulative", "netWorthBuyPos", "netWorthBuyNeg", "netWorthBuy", "netWorthBuyPV"]
const title = "Buy scenario"
class TableBuyScenario extends React.Component {
	render() {
		const { buyScenarioOutputs } = this.props;
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
			netWorthBuyPV
		} = buyScenarioOutputs;

		const data = totalTime.map(year => {
			return {
				year: year,

				homeValueEachYear: homeValueEachYear[year],
				debtEachYear: debtEachYear[year],

				homeMaintenanceCostsEachYear:
					homeMaintenanceCostsEachYear[year],
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
				netWorthBuyPV: netWorthBuyPV[year]
			};
		});

		return (
			<Table
				data={data}
				title={title}
				columnNames={columnNames}
			/>
		);
	}
}

export default TableBuyScenario;
