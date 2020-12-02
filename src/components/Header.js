import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.h1`
    font-family: "Playfair Display";
    text-align: center;
    font-size: 5rem;
    font-weight: 700;
    color: #6495ed;
    text-shadow: 1px 1px #0000ff;
    margin: 0;
`;


export default function Header(){


    return (
        <HeaderStyles>
            React Form
        </HeaderStyles>
    )
}
