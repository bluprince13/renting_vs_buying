import React, { Component } from 'react';

import InputElement from './InputElement';
import fields from '../data/fields';

const renderFields = fields.map(props => {
	return <InputElement key={props.name} props={props} />
});

class InputForm extends Component {
	render() {
		return <form>{renderFields}</form>;
	}
}

export default InputForm;
