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
