import React, { forwardRef } from 'react';
import styled from 'styled-components';

const InputStyles = styled.input`
    width: 100%;
    display: block;
    margin: 20px 0px;
    border: 1px solid lightblue;
`;

export const Input = forwardRef((props, ref) => {
    return <InputStyles inputRef={ref} {...props} />
})

export default Input;
