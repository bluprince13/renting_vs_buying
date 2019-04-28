import React from 'react';
import Plot from 'react-plotly.js';

class StyledPlot extends React.Component {
	render() {
		return (
            <Plot {...this.props} style={{height: "65vh"}}
                config={{
                    responsive: true,
                    showLink: false,
                    displayModeBar: true
                }}
            />
		);
	}
}

export default StyledPlot;
