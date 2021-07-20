import React from 'react';
import { Input, Span, Label, InputIcon } from '../../styles/common/InputText';

interface InputTextProps {
	placeholder: string;
	value?: string;
	onChange: Function;
	width?: string;
	icon?: string;
}
const InputText = ({ placeholder, value, onChange, width, icon }: InputTextProps) => (
	<Label style={{ width }}>
		<Input onChange={(e) => onChange(e, e.target.value)} type="text" placeholder=" " value={value} />
		<Span className="input__label">{placeholder}</Span>
		<InputIcon src={icon} />
	</Label>
);

export default InputText;
