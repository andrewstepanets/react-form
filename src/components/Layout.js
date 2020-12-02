import React from 'react';
import styled from 'styled-components';

const LayoutStyles = styled.div`
    max-width: 600px;
`;

export default function Layout({ children, ...props }) {
    return (
        <LayoutStyles>
            {children}
        </LayoutStyles>
    )
}
