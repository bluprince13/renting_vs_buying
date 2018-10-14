import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';

const StyledInput = styled.div`
	display: flex;
	flex-flow: row;
`;

const StyledSlider = styled.div`
	flex: 2;
`;

const StyledText = styled.div`
	flex: 1.5;
	margin: 1rem;
`;

const ToolTipText = styled.span`
	visibility: hidden;
	width: 12rem;
	background-color: black;
	color: #fff;
	text-align: center;
	padding: 0.5rem 1rem;
	border-radius: 0.6rem;

	position: absolute;
	z-index: 1;
	top: 50%;
	left: 50%;
	transform: translate(+10%, -50%);

	&:after {
		content: ' ';
		position: absolute;
		top: 50%;
		right: 100%; /* To the left of the tooltip */
		margin-top: -0.5rem;
		border-width: 0.5rem;
		border-style: solid;
		border-color: transparent black transparent transparent;
	}
`;

const Info = styled.div`
	margin-left: 0.5rem;
	display: inline-block;
	position: relative

	&:hover {
		${ToolTipText} {
			visibility: visible;
		}
	}
`;

const InputElement = props => {
	const { label, name, min, max, type, info, unit } = props.props;
	return (
		<StyledInput>
			<StyledSlider>
				<div>
					<label htmlFor={name}>{label}</label>
					{info ? (
						<Info>
							<i className="fas fa-info-circle" />
							<ToolTipText>{info}</ToolTipText>
						</Info>
					) : (
						''
					)}
				</div>
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
					size={8}
					parse={value => Number(value)}
				/>
				<label style={{marginLeft: '0.5rem'}}>{unit}</label>
			</StyledText>
		</StyledInput>
	);
};

export default InputElement;
