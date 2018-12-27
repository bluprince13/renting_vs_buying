import React from 'react';
import Plot from 'react-plotly.js';

class StyledPlot extends React.Component {
	render() {
		return (
            <Plot {...this.props} style={{height: "60vh"}}
                config={{
                    responsive: true
                }}
            />
		);
	}
}

export default StyledPlot;
