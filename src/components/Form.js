import React from 'react';
import styled from 'styled-components';

const FormStyles = styled.form`
    width: 100%;
    margin-top: 10px;
`;

export default function Form({ children, ...props }) {
    return (
        <FormStyles noValidate {...props}>{children}</FormStyles>
    )
}
