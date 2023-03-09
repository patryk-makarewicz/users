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
  cursor: pointer;
  transition: all 0.5s;
  text-transform: uppercase;
  padding: 4px 16px;
  font-weight: ${fontWeight.semiBold};
  font-size: ${fontSize.s};

  ${({ secondary }) =>
    secondary
      ? css`
          background-color: ${colors.white};
          color: ${colors.primary};
          border: 1px solid ${colors.primary};
        `
      : css`
          background-color: ${colors.primary};
          color: ${colors.white};
          border: 1px solid ${colors.primary};
        `}

  ${({ editColor }) =>
    editColor &&
    css`
      background-color: ${colors.orange};
      border: 1px solid ${colors.orange};
    `}

     ${({ deleteColor }) =>
    deleteColor &&
    css`
      background-color: ${colors.warning};
      border: 1px solid ${colors.warning};
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
