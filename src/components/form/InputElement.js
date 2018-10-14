import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';

const StyledInput = styled.div`
	display: flex;
	flex-direction: row
`

const StyledSlider = styled.div`
	flex: 2;
`

const StyledText = styled.div`
	flex: 1;
	margin: 1rem;
`

const InputElement = (props) => {
	const { label, name, min, max, type } = props.props
	return (
		<StyledInput>
			<StyledSlider>
				<label htmlFor={name} style={{display: 'block'}}>{label}</label>
				<Field
					name={name}
					component="input"
					min={min}
					max={max}
					type={type}
					parse={value => Number(value)}
				/>
			</StyledSlider>
			<StyledText>
				<Field
					name={name}
					component="input"
					type={'text'}
					parse={value => Number(value)}
				/>
			</StyledText>
		</StyledInput>
	);
};

export default InputElement