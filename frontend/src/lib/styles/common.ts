//////////////////////////////////////
// 반응형 분기점

import { useMediaQuery } from 'react-responsive';

// desktop: 1024px ~
// tablet: 768px ~ 1023px
// mobile: 360px ~ 767px

// ${mediaQuery('xs')} ()
//////////////////////////////////////
export const mediaQuery = (type?: string): string => {
  if (type === 'xs') {
    return '@media (max-width: 767px)';
  } else if (type === 'md') {
    return '@media (min-width: 768px) and (max-width: 1439px))';
  } else {
    return '@media (min-width: 1440px)';
  }
};

export const formWidth = (type?: string): string => {
  if (type === 'desktop') {
    return '400px';
  } else {
    return '340px';
  }
};

const Mobile = ({ children }: any) => {
  const isMobile = useMediaQuery({
    maxWidth: 767,
  });

  return isMobile ? children : null;
};

const Desktop = ({ children }: any) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return isDesktop ? children : null;
};

export { Mobile, Desktop };
