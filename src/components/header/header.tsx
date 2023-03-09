import LogoDark from '../../assets/logo_dark.png';

import * as Styled from './header.styles';

export const Header = () => {
  return (
    <>
      <Styled.Header>
        <Styled.InnerWrapper>
          <h1>
            <Styled.Logo
              src={LogoDark.src}
              alt="makaDev Patryk Makarewicz"
              title="makaDev software studio"
            />
          </h1>
        </Styled.InnerWrapper>
      </Styled.Header>
    </>
  );
};
