import React from 'react';
import styled from 'styled-components';

const LayoutStyles = styled.div`
  max-width: 480px;
  margin: 0 auto 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout({ children, ...props }) {
  return <LayoutStyles {...props}>{children}</LayoutStyles>;
}
