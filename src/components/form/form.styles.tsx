import styled, { css } from 'styled-components';
import { colors, fontSize } from '../../styles';

type FormProps = {
  $error?: boolean;
};

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  margin: 24px 0;
`;

export const Container = styled.div`
  position: relative;
`;

export const ErrorMessage = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: ${fontSize.s};
  color: ${colors.warning};
`;

export const Label = styled.label`
  font-size: ${fontSize.s};
`;

const baseFieldsStyles = css`
  margin: 0 0 25px 0;
  width: 100%;
  font-size: ${fontSize.s};
  border: 1px solid ${colors.gray2};
  border-radius: 4px;

  &:focus {
    outline-style: inherit;
    border: 1px solid ${colors.green};
  }
`;

export const Input = styled.input<FormProps>`
  ${baseFieldsStyles}
  height: 32px;
  padding: 0 15px;
  ${({ $error = false }) =>
    $error &&
    css`
      border: 1px solid ${colors.warning};
    `}
`;

export const Paragraph = styled.p`
  text-align: center;
`;

export const FormBox = styled.div`
  position: relative;
  max-width: 500px;
  margin: 40px auto 60px auto;
`;
