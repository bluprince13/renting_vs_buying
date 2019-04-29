import React, { Component } from "react";
import styled from "styled-components";

import InputElement from "./InputElement";
import fields from "../data/fields";

const StyledForm = styled.form`
	overflow-y: scroll;
	height: 100%;
`;

const StyledFieldSet = styled.fieldset`
	border: 2px solid green;
	border-radius: 8px;
	margin: 1rem;
	padding: 1rem;
`;

const renderFields = set =>
	set.map(props => {
		return <InputElement key={props.name} props={props} />;
	});

const renderFieldSets = Object.keys(fields).map(key => {
	return (
		<StyledFieldSet key={key}>
			<legend>{key}</legend>
			{renderFields(fields[key])}
		</StyledFieldSet>
	);
});

/**
 *
 *
 * @class InputForm
 * @extends {Component}
 */
class InputForm extends Component {
	render() {
		return <StyledForm className="form">{renderFieldSets}</StyledForm>;
	}
}

export default InputForm;
