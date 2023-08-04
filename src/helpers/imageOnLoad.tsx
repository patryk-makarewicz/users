import * as Styled from './imageOnLoad.styles';

import LogoDark from '@/assets/logo_dark.png';

export const ImageOnLoad = () => (
  <Styled.Container>
    <Styled.Image src={LogoDark.src} alt="makaDev Patryk Makarewicz" title="makaDev software studio" />
  </Styled.Container>
);
