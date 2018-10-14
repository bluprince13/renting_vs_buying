import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import InputElement from './form/InputElement';
import fields from './form/fields';

const renderFields = fields.map((props) => {
	return <InputElement key={props.name} props={props} />
});

const initialValues = fields.reduce((obj, item) => {
	obj[item.name] = item.value;
	return obj;
}, {});

class InputForm extends Component {
  componentDidMount() {
    this.props.initialize(initialValues);;
  }

	render() {
		return <form>{renderFields}</form>;
	}
}

InputForm = reduxForm({
	form: 'InputForm'
})(InputForm);

export default InputForm;
