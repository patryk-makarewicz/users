import styled from 'styled-components';
import { Table } from 'antd';

export const AntdTable: typeof Table = styled(Table)`
  width: 1240px;
  overflow-x: scroll;
`;

export const FooterBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

export const ModalText = styled.p`
  margin: 20px 0;
`;
