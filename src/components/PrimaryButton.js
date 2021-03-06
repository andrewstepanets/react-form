import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  margin: 16px 0;
  width: 100%;
  padding: 10px 0;
  background: #8d33ff;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  border: 1px solid #8d33ff;
  border-radius: 5px;
  transition: all 0.4s ease;
  &:hover {
    background: white;
    color: #8d33ff;
  }
`;

/*eslint-disable */

export default function PrimaryButton({ children, props }) {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
}
