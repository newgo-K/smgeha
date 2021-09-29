import Button from 'components/common/Button';
import PageTitle from 'components/common/PageTitle';
import CommonTemplate from 'components/common/template/CommonTemplate';
import ProductView from 'components/product/ProductView';
import MobileMainMenu from 'components/view_details/MobileMainMenu';
import Icon from 'lib/icon/Icon';
import { RootState } from 'lib/modules';
import { productSelectAsync } from 'lib/modules/product/actions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

function ProductViewContainer() {
  const dispacth = useDispatch();
  const { data } = useSelector(({ product }: RootState) => ({
    data: product.view.success,
  }));

  const { id }: any = useParams();

  useEffect(() => {
    dispacth(productSelectAsync.request({ id }));
  }, [dispacth, id]);

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

        <ProductView {...data} />
      </div>
    </CommonTemplate>
  );
}

export default ProductViewContainer;
