import styled, { css } from 'styled-components';
import { colors, fontSize, fontWeight } from '../../styles';

type ButtonProps = {
  secondary: boolean;
  $loading: boolean;
};

export const Button = styled.button<ButtonProps>`
  font-family: 'Archivo', sans-serif;
  text-decoration: none;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  transition: all 0.5s;

  ${({ secondary }) =>
    secondary
      ? css`
          background-color: inherit;
          color: var(--text-color);
          font-weight: ${fontWeight.regular};
          font-size: ${fontSize.s};
          padding: 4px 8px;
        `
      : css`
          background-color: ${colors.primary};
          color: ${colors.white};
          font-weight: ${fontWeight.semiBold};
          font-size: ${fontSize.m};
          padding: 8px 16px;
        `}

  ${({ $loading }) =>
    $loading &&
    css`
      background-color: ${colors.white};
      padding: 4px 30px;
      border: 1px solid ${colors.primary};
    `}

  &:hover {
    opacity: 0.8;
  }
`;
