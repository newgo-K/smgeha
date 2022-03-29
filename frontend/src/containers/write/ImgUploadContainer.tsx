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

  // 등록된 이미지 불러오기
  useEffect(() => {
    if (write.images.length > 0 && 'string' === typeof write.images[0]) {
      const tempImgs = [...images];
      const tempFiles = [...files];

      write.images.forEach((name: string) => {
        // 이미지 제목으로 blob 읽어오기
        const url = `/images/${name}`;
        const request = new XMLHttpRequest();

        request.open('GET', url, true);
        request.responseType = 'blob';

        request.send();

        request.onload = async (e: any) => {
          const blob = e.target.response;
          const reader = new FileReader();

          reader.readAsDataURL(blob);

          reader.onload = (e: any) => {
            // slick 사용을 위해 file api 등록
            const file = new File([blob], url, {
              type: blob.type,
              lastModified: Date.now(),
            });

            var img = {
              dataURL: e.target.result,
              file,
            };

            tempImgs.push(img as never);
            tempFiles.push(file as never);

            setImages([...tempImgs]);
            setFiles([...tempFiles]);
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

      // slick 이미지 리스트 등록
      setImages(imageList as never[]);

      // 폼에 이미지 등록
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
