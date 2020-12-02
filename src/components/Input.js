import React, { forwardRef } from 'react';
import styled from 'styled-components';

const InputStyles = styled.input`
    width: 100%;
    margin-top: 10px;
`;

export const Input = forwardRef((props, ref) => {
    return <InputStyles {...props} inputRef={ref} />
})

export default Input;