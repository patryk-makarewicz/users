import styled from 'styled-components';

import { fontWeight, padding } from '.';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${padding.l} 0;
`;

export const Box = styled.div`
  width: 100%;
  max-width: 1240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const Text = styled.p`
  font-weight: ${fontWeight.semiBold};
`;
