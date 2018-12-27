import React, { Component } from 'react';
import styled from 'styled-components';

import InputElement from './InputElement';
import fields from '../data/fields';

const StyledForm = styled.form`
	overflow-y: scroll;
	height: 100%
`;

const renderFields = fields.map(props => {
	return <InputElement key={props.name} props={props} />
});

/**
 *
 *
 * @class InputForm
 * @extends {Component}
 */
class InputForm extends Component {
	render() {
		return <StyledForm>{renderFields}</StyledForm>;
	}
}

export default InputForm;
