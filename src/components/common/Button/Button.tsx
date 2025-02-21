import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

type ButtonSize = 'primary' | 'medium' | 'mobileSmail' | 'mobileLarge';
type ButtonColor = 'primary' | 'mediumBlack' | 'mediumWhite';

interface ButtonType {
  children: React.ReactNode;
  size: ButtonSize;
  color: ButtonColor;
}

const StyledButton = styled.button<ButtonType>`
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: black;
  cursor: pointer;
  width: 188px;
  height: 48px;
  color: white;
  padding: 8px;

  //  버튼 사이즈
  ${({ size }) =>
    size === 'medium' &&
    css`
      width: 191px;
      height: 56px;
    `}
  ${({ size }) =>
    size === 'mobileSmail' &&
    css`
      width: 140px;
      height: 40px;
    `}
  ${({ size }) =>
    size === 'mobileLarge' &&
    css`
      width: 343px;
      height: 56px;
    `} 
    // 버튼 크기
  ${({ color }) =>
    color === 'mediumBlack' &&
    css`
      background-color: transparent;
      border: 1px solid black;
      color: black;
    `}
  ${({ color }) =>
    color === 'mediumWhite' &&
    css`
      background-color: transparent;
      border: 1px solid white;
    `}
`;

function Button({ children, size = 'primary', color = 'primary' }: ButtonType) {
  return (
    <StyledButton size={size} color={color}>
      {children}
    </StyledButton>
  );
}
export default Button;
