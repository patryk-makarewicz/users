import React from 'react';

import { Spinner } from '@components/spinner';

import * as Styled from './button.styles';

type ButtonProps = {
  secondary?: boolean;
  children: React.ReactNode;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
};

export const Button = ({
  children,
  onClick,
  secondary = false,
  type = 'button',
  loading = false
}: ButtonProps) => (
  <Styled.Button type={type} onClick={onClick} secondary={secondary} $loading={loading}>
    {loading ? <Spinner width="23px" height="23px" /> : children}
  </Styled.Button>
);
