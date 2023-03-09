import * as Styled from './pageLayout.styles';

type PageLayoutProps = {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: PageLayoutProps) => {
  return <Styled.PageLayout>{children}</Styled.PageLayout>;
};
