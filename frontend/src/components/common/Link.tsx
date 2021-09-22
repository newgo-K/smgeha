import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

type LinkProps = {
  /** 내용 */
  children: React.ReactNode;
  /** 링크 컬러 */
  color?: string;
  /** 링크 주소 */
  to: string;
};

function Link({ children, color, to }: LinkProps) {
  return (
    <ReactRouterLink css={[{ color }]} to={to}>
      {children}
    </ReactRouterLink>
  );
}

export default Link;
