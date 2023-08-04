import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  width: 209px;
  height: 87px;
  animation: fadeIn 0.5s;
`;
