import Alert from 'components/common/Alert';
import ImgUpload from 'components/productWrite/ImgUpload';
import {
  productWriteSetForm,
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
      let check = false;
      const fileForm = /(.*?)\/(jpg|jpeg|png)$/;
      const maxSize = 1 * 1024 * 1024;

      const files = imageList.map((img: any) => {
        const file = img.file;

        if (!file.type.match(fileForm)) {
          alert('jpg / jpeg / png 파일만 등록 가능합니다.');
          check = true;
        } else if (file.size >= maxSize) {
          alert('1MB 이하 파일만 등록 가능합니다.');
          check = true;
        }

        return file;
      });
      debugger;
      if (check) return;

      const formData = new FormData();

      files.map((file: any) => formData.append('imgs', file));

      setImages(imageList as never[]);

      dispatch(
        productWriteSetForm({
          key: 'imgs',
          value: formData,
        }),
      );

      // dispatch(productWriteUploadAsync.request(formData as any));
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
