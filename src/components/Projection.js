import React from 'react';
import Plot from 'react-plotly.js';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as math from 'mathjs';

import {
	getRange,
	getBuyScenarioOutputs,
	getRentScenarioOutputs,
  } from '../functions/formulas'

const StyledPlot = styled(Plot)`
	margin: auto;
	width: 100%;
	height: 90%;
`;

class Projection extends React.Component {
	render() {
		const numYears = this.props.input.amortization
		const time = getRange(0, numYears);
		const { netWorthBuyPV, cashFlowNet: buyScenarioCashFlowNet } = getBuyScenarioOutputs(this.props.input)
		const { netWorthRentPV } = getRentScenarioOutputs({...this.props.input, buyScenarioCashFlowNet})
		const differencePV = math.subtract(netWorthRentPV, netWorthBuyPV)

		return (
			<StyledPlot
				data={[
					{
						x: time,
						y: netWorthRentPV,
						type: 'scatter',
						mode: 'lines+points',
						marker: { color: 'blue' },
						name: 'Rent'
					},
					{
						x: time,
						y: netWorthBuyPV,
						type: 'scatter',
						mode: 'lines+points',
						marker: { color: 'red' },
						name: 'Buy'
					},
					{
						x: time,
						y: differencePV,
						type: 'scatter',
						mode: 'lines+points',
						marker: { color: 'green' },
						name: 'Rent - Buy'
					}
				]}
				layout={{
					title: 'Net worth projection',
					xaxis: {
						title: 'Time (years)',
						hoverformat: '.0f',
						showgrid: true,
						zeroline: true,
						showline: true,
					},
					yaxis: {
						title: 'Net worth present value',
						hoverformat: '.0f',
						showgrid: true,
						zeroline: true,
						showline: true,
					}
				}}
			/>
		);
	}
}

function mapStateToProps({ input }) {
	return { input };
}

export default connect(mapStateToProps)(Projection);
