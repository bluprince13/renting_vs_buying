import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { format } from "d3-format";
import { CSVLink } from "react-csv";
import styled from "styled-components";

import Footer from "../Footer";

const StyledButton = styled.button`
	-webkit-transition-duration: 0.4s;
	transition-duration: 0.4s;

	display: block;
	margin: auto;

	width: 25%;
	height: 5rem;

	background-color: white;
	color: black;
	border: 0.2rem solid #4caf50;

	border-radius: 0.5rem;

	&:hover {
		background-color: #4caf50;
		color: white;
	}

	&:focus {
		outline: none;
	}
`;

const format3 = number => {
	if (Number.isInteger(number)) {
		return number;
	}
	return format(".3s")(number);
};
const style = {
	textAlign: "center"
};
const Cell = ({ value }) => <div>{format3(value)}</div>;

const getColumns = columnNames =>
	columnNames.map(columnName => ({
		Header: columnName,
		accessor: columnName,
		style,
		Cell
	}));

class Table extends React.Component {
	constructor(props) {
		super(props);
		this.download = this.download.bind(this);
		this.state = {
			dataToDownload: []
		};
	}

	download(event) {
		const { columnNames } = this.props;
		const columns = getColumns(columnNames);

		const currentRecords = this.reactTable.getResolvedState().sortedData;
		var data_to_download = [];
		for (var index = 0; index < currentRecords.length; index++) {
			let record_to_download = {};
			for (var colIndex = 0; colIndex < columns.length; colIndex++) {
				record_to_download[columns[colIndex].Header] =
					currentRecords[index][columns[colIndex].accessor];
			}
			data_to_download.push(record_to_download);
		}
		this.setState({ dataToDownload: data_to_download }, () => {
			this.csvLink.link.click();
		});
	}

	render() {
		const { columnNames, data, title } = this.props;
		const columns = getColumns(columnNames);

		return (
			<div>
				<div style={{ height: "65vh" }}>
					<h2>{title}</h2>
					<ReactTable
						ref={r => (this.reactTable = r)}
						data={data}
						columns={columns}
						defaultPageSize={10}
						className="-striped -highlight"
					/>
				</div>
				<Footer
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						overflowY: "auto"
					}}
				>
					<StyledButton onClick={this.download}>
						Download CSV
					</StyledButton>
					<div>
						<CSVLink
							data={this.state.dataToDownload}
							filename="data.csv"
							className="hidden"
							ref={r => (this.csvLink = r)}
							target="_blank"
						/>
					</div>
				</Footer>
			</div>
		);
	}
}

export default Table;
