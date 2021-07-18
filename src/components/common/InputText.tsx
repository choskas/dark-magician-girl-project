import React from 'react';
import { Input, Span, Label } from '../../styles/common/InputText';

interface InputTextProps {
	placeholder: string;
	value?: string;
	onChange: Function;
	width?: string;
}
const InputText = ({ placeholder, value, onChange, width }: InputTextProps) => (
	<Label style={{ width }}>
		<Input onChange={(e) => onChange(e, e.target.value)} type="text" placeholder=" " value={value} />
		<Span className="input__label">{placeholder}</Span>
	</Label>
);

export default InputText;
