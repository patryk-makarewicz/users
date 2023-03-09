import styled, { css } from 'styled-components';

import { breakpoint, zIndex } from '../../styles/variables';

type InnerWrapperProps = {
  $justifyEnd?: boolean;
};

export const InnerWrapper = styled.nav<InnerWrapperProps>`
  display: flex;
  align-items: center;
  ${({ $justifyEnd }) =>
    $justifyEnd
      ? css`
          justify-content: flex-end;
        `
      : css`
          justify-content: space-between;
        `}
  width: 100%;
  padding: 0 10px;
  margin: auto;
  height: 100%;

  @media screen and (min-width: ${breakpoint.s}) {
    ${({ $justifyEnd }) =>
      $justifyEnd
        ? css`
            justify-content: flex-end;
          `
        : css`
            justify-content: flex-start;
          `}
  }
`;

export const Header = styled.header`
  max-width: 1440px;
  height: 60px;
  margin: auto;
  border-bottom: 2px solid var(--border-color);
  background-color: var(--background-secondary-color);
  position: sticky;
  top: 0px;
  z-index: ${zIndex.header};
`;

export const Logo = styled.img`
  width: 96px;
  height: 40px;
  margin-top: 4px;
`;
