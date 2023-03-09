import { useTranslation } from 'react-i18next';

import LogoDark from '../../assets/logo_dark.png';

import * as Styled from './footer.styles';

export const Footer = () => {
  const { t } = useTranslation();
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Styled.Footer>
      <Styled.Wrapper>
        <Styled.LogoWrapper>
          <Styled.Logo
            src={LogoDark.src}
            alt="makaDev Patryk Makarewicz"
            title="makaDev software studio"
          />
        </Styled.LogoWrapper>
        <Styled.Divider />
        <Styled.Text>{t('footer.copyright', { year: year })}</Styled.Text>
      </Styled.Wrapper>
    </Styled.Footer>
  );
};
