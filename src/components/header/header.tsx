import * as Styled from './header.styles';
import { useTranslation } from 'next-i18next';

import LogoDark from '@/assets/logo_dark.png';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <Styled.Header>
        <Styled.InnerWrapper>
          <h1>
            <Styled.Logo src={LogoDark.src} alt="makaDev Patryk Makarewicz" title="makaDev software studio" />
          </h1>
          <Styled.Divider />
          <Styled.Text>{t('header.title')}</Styled.Text>
        </Styled.InnerWrapper>
      </Styled.Header>
    </>
  );
};
