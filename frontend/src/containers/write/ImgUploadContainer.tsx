import ImgUpload from 'components/productWrite/ImgUpload';
import { RootState } from 'lib/modules';
import { productWriteSetForm } from 'lib/modules/write/actions';
import React, { useCallback, useEffect, useState } from 'react';
import { ImageListType } from 'react-images-uploading';
import { useDispatch, useSelector } from 'react-redux';

function ImgUploadContainer() {
  const dispatch = useDispatch();
  const { write } = useSelector(({ write }: RootState) => ({
    write: write.writeForm,
  }));
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);
  const maxNumber = 5;
  const [imghover, setImgHover] = useState<Array<boolean>>([]);

  const handleMouseEnter = (index: number) => {
    let arr = [...imghover];
    arr[index] = true;

    setImgHover([...arr]);
  };

  const handleMouseLeave = (index: number) => {
    let arr = [...imghover];
    arr[index] = false;

    setImgHover([...arr]);
  };

  useEffect(() => {
    if (write.images.length > 0 && 'string' === typeof write.images[0]) {
      const imgs = [...images];
      const files1 = [...files];

      write.images.forEach(async (name: string) => {
        const url = `/images/${name}`;
        const request = new XMLHttpRequest();

        request.open('GET', url, true);
        request.responseType = 'blob';

        await request.send();

        request.onload = async (e: any) => {
          const blob = e.target.response;
          const reader = new FileReader();

          await reader.readAsDataURL(blob);

          reader.onload = (e: any) => {
            const file = new File([blob], url, {
              type: blob.type,
              lastModified: Date.now(),
            });

            var img = {
              dataURL: e.target.result,
              file,
            };

            files1.push(file as never);
            imgs.push(img as never);

            setImages([...imgs]);
            setFiles([...files]);
          };
        };
      });
    }
  }, [dispatch, write.images, images, files]);

  useEffect(() => {
    dispatch(
      productWriteSetForm({
        key: 'images',
        value: files,
      }),
    );
  }, [dispatch, files]);

  const onChange = useCallback(
    (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
      let check = false;
      const fileForm = /(.*?)\/(jpg|jpeg|png)$/;
      const maxSize = 3 * 1024 * 1024;

      const files = imageList.map((img: any) => {
        const file = img.file;

        if (!file.type.match(fileForm)) {
          alert('jpg / jpeg / png 파일만 등록 가능합니다.');
          check = true;
        } else if (file.size >= maxSize) {
          alert('3MB 이하 파일만 등록 가능합니다.');
          check = true;
        }

        return file;
      });
      if (check) return;

      setImages(imageList as never[]);

      dispatch(
        productWriteSetForm({
          key: 'images',
          value: files,
        }),
      );
    },
    [dispatch],
  );

  return (
    <ImgUpload
      images={images}
      maxNumber={maxNumber}
      imghover={imghover}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
      onChange={onChange}
    />
  );
}

export default ImgUploadContainer;
