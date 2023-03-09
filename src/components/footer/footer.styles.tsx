import styled from 'styled-components';

import { breakpoint, fontSize, zIndex } from '../../styles/variables';

export const LogoWrapper = styled.div`
  margin-bottom: 5px;

  @media screen and (min-width: ${breakpoint.l}) {
    margin-bottom: 0;
  }
`;

export const Divider = styled.div`
  height: 20px;
  width: 1px;
  margin: 0 17px 0 20px;
  display: none;
  background-color: var(--border-color);

  @media screen and (min-width: ${breakpoint.l}) {
    display: block;
  }
`;

export const Footer = styled.footer`
  max-width: 1440px;
  height: auto;
  margin: auto;
  border-top: 2px solid var(--border-color);
  background-color: var(--background-secondary-color);
  position: relative;
  top: 0;
  z-index: ${zIndex.footer};

  @media screen and (min-width: ${breakpoint.l}) {
    height: 60px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  margin: auto;
  height: 100%;

  @media screen and (min-width: ${breakpoint.l}) {
    flex-direction: row;
    padding: 0 10px;
  }
`;

export const Text = styled.p`
  color: var(--text-color);
  font-size: ${fontSize.s};
  margin: 0;
  text-align: center;
`;

export const Logo = styled.img`
  width: 96px;
  height: 40px;
  margin-top: 4px;
`;
