import styled from 'styled-components';

import { padding } from '.';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${padding.l} 0;
`;

export const Box = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;
