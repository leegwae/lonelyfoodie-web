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
	padding: '0px 10px',
	lineHeight: '40px',
	fontSize: '20px',
	borderRadius: '4px',
	width: '100%',
});

export default Input;
