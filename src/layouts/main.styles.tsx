import styled, { css } from 'styled-components';

type ContainerProps = {
  loadingPage: boolean;
};

export const Container = styled.div<ContainerProps>`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ${({ loadingPage }) =>
    loadingPage
      ? css`
          max-width: 100vw;
          max-height: 100vh;
          visibility: hidden;
          overflow: hidden;
        `
      : css`
          visibility: visible;
          animation: fadeIn 0.5s;
        `}
`;
