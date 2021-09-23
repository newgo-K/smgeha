import MenuButton from 'components/common/MenuButton';
import React, { useCallback, useState } from 'react';

function MenuButtonContainer({ ...props }: any) {
  const { title, subTitle } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <MenuButton
      anchorEl={anchorEl}
      handleClick={handleClick}
      handleClose={handleClose}
      title={title}
      subTitle={subTitle}
    />
  );
}

export default MenuButtonContainer;
