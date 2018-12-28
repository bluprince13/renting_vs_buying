import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import d3 from 'd3';

const format = d3.format(".5s");
const style = {
	textAlign: 'center'
}
const Cell = ({ value }) => <div>{format(value)}</div>

class TableRentScenario extends React.Component {
	render() {
		const { buyScenarioOutputs, rentScenarioOutputs } = this.props
		const { cashFlowNet: buyScenarioCashFlowNet } = buyScenarioOutputs
		const {
			time,	
			rentEachYear,
			investmentEachYear,
			netWorthRent,
			netWorthRentPV 
		} = rentScenarioOutputs

		const data = time.map((year) => {
			return {
				year: year,
				buyScenarioCashFlowNet: buyScenarioCashFlowNet[year],
				rentEachYear: rentEachYear[year],
				investmentEachYear: investmentEachYear[year],
				netWorthRent: netWorthRent[year],
				netWorthRentPV: netWorthRentPV[year]
			}
		})

		return (
			<div>
				<h2>Rent scenario</h2>
				<ReactTable
					data={data}
					columns={[
						{
							Header: "Year",
							accessor: "year",
							style,
						},
						{
							Header: "buyScenarioCashFlowNet",
							accessor: "buyScenarioCashFlowNet",
							style,
							Cell
						},
						{
							Header: "rentEachYear",
							accessor: "rentEachYear",
							style,
							Cell
						},
						{
							Header: "investmentEachYear",
							accessor: "investmentEachYear",
							style,
							Cell
						},
						{
							Header: "netWorthRent",
							accessor: "netWorthRent",
							style,
							Cell
						},
						{
							Header: "netWorthRentPV",
							accessor: "netWorthRentPV",
							style,
							Cell
						}
					]}
					defaultPageSize={10}
					className="-striped -highlight"
				/>
			</div>
		);
	}
}

export default TableRentScenario;
