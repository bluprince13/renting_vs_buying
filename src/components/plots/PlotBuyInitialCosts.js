import React from 'react';
import StyledPlot from '../StyledPlot';
import Footer from '../Footer';
import Annot from '../Annot';
import { format2, format3 } from '../../functions/helpers';

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
					<p>
						The initial costs of <Annot>{format2(initialCosts)}</ Annot> in the buy scenario make for the initial investment in the rent scenario.
					</p>
				</Footer>
			</div>
		);
	}
}

export default PlotBuyInitialCosts