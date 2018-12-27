import React from 'react';
import StyledPlot from '../StyledPlot';
import Footer from '../Footer';

class PlotBuyInitialCosts extends React.Component {
	render() {
		const { buyScenarioOutputs } = this.props
		const { downPayment, stampDuty, homePurchaseCosts, initialCosts } = buyScenarioOutputs

		return (
			<div>
				<StyledPlot
					data={[
						{
							values: [downPayment, stampDuty, homePurchaseCosts],
							labels: [
							"Down payment",
							"Stamp duty",
							"Other home purchase costs",
							],
							hole: .4,
							type: "pie"
						},
					]}
					layout={
						{
							title: "Buy scenario: Initial costs",
							annotations: [
								{
									font: {
										size: 10
									},
									showarrow: false,
									text: `${initialCosts}`,
									x: 0.5,
									y: 0.5
								}
							]
						}
					}
				/>
				<Footer>
				</Footer>
			</div>
		);
	}
}

export default PlotBuyInitialCosts