import React, { Component } from 'react';
import styled from 'styled-components';

import InputElement from './InputElement';
import fields from '../data/fields';

const StyledForm = styled.form`
	overflow-y: scroll;
	height: 100%
`;

const renderFields = set => set.map(props => {
	return <InputElement key={props.name} props={props} />
});

const renderFieldSets = Object.keys(fields).map(key => {
	return (
		<fieldset key={key}>
			<legend>{key}</legend>
			{renderFields(fields[key])}
		</fieldset>
	)
});

/**
 *
 *
 * @class InputForm
 * @extends {Component}
 */
class InputForm extends Component {
	render() {
		return <StyledForm>{renderFieldSets}</StyledForm>;
	}
}

export default InputForm;
