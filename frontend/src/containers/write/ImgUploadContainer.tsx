import ImgUpload from 'components/productWrite/ImgUpload';
import {
  productWriteSetData,
  productWriteUploadAsync,
} from 'lib/modules/write/actions';
import React, { useCallback, useState } from 'react';
import { ImageListType } from 'react-images-uploading';
import { useDispatch, useSelector } from 'react-redux';

function ImgUploadContainer() {
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const maxNumber = 4;
  const [imghover, setImgHover] = useState<Array<boolean>>([]);

  const handleMouseEnter = (index: any) => {
    let a = imghover;
    a[index] = true;

    setImgHover([...a]);
  };

  const handleMouseLeave = (index: any) => {
    let a = imghover;
    a[index] = false;

    setImgHover([...a]);
  };

  const onChange = useCallback(
    (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
      // data for submit
      console.log(imageList);
      setImages(imageList as never[]);

      dispatch(
        productWriteSetData({
          form: 'imgForm',
          key: 'img',
          value: imageList,
        }),
      );

      const abc = imageList.map((img: any) => img.file);

      const formData = new FormData();

      const a = abc[0];
      const b = abc[1];

      formData.append('file', a);
      formData.append('file', b);

      console.log(formData);
      dispatch(productWriteUploadAsync.request(formData as any));
    },
    [dispatch],
  );

  const props = {
    images,
    onChange,
    maxNumber,
    handleMouseEnter,
    handleMouseLeave,
    imghover,
  };

  return <ImgUpload {...props} />;
}

export default ImgUploadContainer;
