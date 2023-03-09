import styled, { css } from 'styled-components';
import { colors, fontSize, fontWeight } from '../../styles';

type ButtonProps = {
  secondary: boolean;
  $loading: boolean;
  editColor: boolean;
  deleteColor: boolean;
};

export const Button = styled.button<ButtonProps>`
  font-family: 'Archivo', sans-serif;
  text-decoration: none;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.5s;
  text-transform: uppercase;

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
          font-size: ${fontSize.s};
          padding: 4px 16px;
        `}

  ${({ editColor }) =>
    editColor &&
    css`
      background-color: ${colors.orange};
    `}

     ${({ deleteColor }) =>
    deleteColor &&
    css`
      background-color: ${colors.warning};
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
