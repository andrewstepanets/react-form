import React from 'react';
import Container from '@material-ui/core/Container';

export default function MainContainer({ children, ...props }) {
    return <Container container="main" maxWidth="xs">{children}</Container>
}
