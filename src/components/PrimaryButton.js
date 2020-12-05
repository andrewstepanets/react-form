import React from 'react';
import styled from 'styled-components'

const ButtonStyled = styled.button`
    width: 100%;
    padding: 20px 0;
    background: #8D33FF;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    border: 1px solid #8D33FF;
    border-radius: 5px;
    transition: all 0.4s ease;
    &:hover {
        background: white;
        color: #8D33FF;
    }
`;

export default function PrimaryButton({ children, props }) {
    return (
        <ButtonStyled {...props}>{children}</ButtonStyled>
    )
}