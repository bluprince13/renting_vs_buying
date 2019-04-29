import React from "react";
import * as math from "mathjs";
import StyledPlot from "../StyledPlot";
import Footer from "../Footer";
import Annot from "../Annot";
import { format2, format3 } from "../../functions/helpers";

class PlotBuyCashFlow extends React.Component {
	render() {
		const { buyScenarioOutputs } = this.props;
		let {
			initialCosts,
			homeMaintenanceCostsEachYear,
			rentIncomeEachYear,
			loanPaymentEachYear
		} = buyScenarioOutputs;
		let { time, cashFlowIn, cashFlowOut, cashFlowNet } = buyScenarioOutputs;

		initialCosts = -initialCosts;
		homeMaintenanceCostsEachYear = math.multiply(
			-1,
			homeMaintenanceCostsEachYear
		);
		loanPaymentEachYear = math.multiply(-1, loanPaymentEachYear);
		cashFlowOut = math.multiply(-1, cashFlowOut);

		return (
			<div>
				<StyledPlot
					data={[
						{
							x: time,
							y: rentIncomeEachYear,
							name: "Rent income each year",
							type: "scatter",
							stackgroup: "zero"
						},
						{
							x: time,
							y: loanPaymentEachYear,
							name: "Loan payment",
							type: "scatter",
							stackgroup: "one"
						},
						{
							x: time,
							y: homeMaintenanceCostsEachYear,
							name: "Home maintenance costs",
							type: "scatter",
							stackgroup: "one"
						},
						{
							x: [0, 1],
							y: [initialCosts, 0],
							name: "Initial costs",
							type: "scatter",
							stackgroup: "one"
						},
						{
							x: time,
							y: cashFlowIn,
							name: "Cashflow In",
							type: "scatter"
						},
						{
							x: time,
							y: cashFlowOut,
							name: "Cashflow Out",
							type: "scatter"
						},
						{
							x: time,
							y: cashFlowNet,
							name: "Cashflow Net",
							type: "scatter",
							mode: "lines",
							line: {
								color: "red",
								width: 4
							}
						}
					]}
					layout={{
						title: "Buy scenario: Cashflow",
						xaxis: {
							title: "Time (years)",
							hoverformat: ".0f",
							showgrid: true,
							zeroline: true,
							showline: true
						},
						yaxis: {
							title: "Nominal value",
							tickformat: ".2s",
							hoverformat: ".2s",
							showgrid: true,
							zeroline: true,
							showline: true
						}
					}}
				/>
				<Footer>
					<p>
						Cash flow is important to consider when planning to buy
						a house. First you have the initial costs of {" "}
						<Annot>{format2(-initialCosts)}</Annot>. Following this,
						you have loan payments until the end of your mortgage
						term. Home maintenance costs are also accounted for, but
						note that in reality home maintenance costs will not be
						evenly distributed. You could also have some rental
						income each year.
					</p>
				</Footer>
			</div>
		);
	}
}

export default PlotBuyCashFlow;
