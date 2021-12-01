import React, {
	useState,
	useImperativeHandle,
	forwardRef,
	InputHTMLAttributes,
} from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<string, InputProps>((props, ref) => {
	const [value, setValue] = useState<string>('');
	useImperativeHandle(ref, () => value, [value]);

	return (
		<StyledInput
			{...props}
			type="text"
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	);
});
Input.displayName = 'Input';

const StyledInput = styled('input')({
	border: 'none',
	padding: '10px 10px',
	lineHeight: '40px',
	fontSize: '20px',
	borderRadius: '10px',
	width: '100%',
	boxShadow: 'rgba(0, 0, 0, 0.4) 0px 30px 90px',
});

export default Input;
