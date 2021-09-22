import PageTitle from 'components/common/PageTitle';
import CommonTemplate from 'components/common/template/CommonTemplate';
import React from 'react';

import MobileMainMenu from './MobileMainMenu';
import Button from 'components/common/Button';
import Icon from 'lib/icon/Icon';
import ProductDetails from './ProductDetails';

export default function Main() {
  const [menu, setMenu] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: React.MouseEvent) => {
    setMenu(open);
  };

  const leftContent = () => (
    <Button variant="text" iconOnly>
      <Icon icon={'leftArrow'} />
    </Button>
  );

  const rightContent = () => (
    <MobileMainMenu toggleDrawer={toggleDrawer} state={menu} />
  );

  return (
    <CommonTemplate>
      <div>
        <PageTitle
          leftContent={leftContent}
          title="상세내용"
          rightContent={rightContent}
        />

        <ProductDetails />
      </div>
    </CommonTemplate>
  );
}
