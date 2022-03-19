import { ImageList } from '@material-ui/core';
import ImgUpload from 'components/productWrite/ImgUpload';
import { RootState } from 'lib/modules';
import { productWriteSetForm } from 'lib/modules/write/actions';
import React, { useCallback, useEffect, useState } from 'react';
import { ImageListType } from 'react-images-uploading';
import { useDispatch, useSelector } from 'react-redux';

function ImgUploadContainer() {
  const dispatch = useDispatch();
  const { select } = useSelector(({ write }: RootState) => ({
    select: write.select.success,
  }));
  const [images, setImages] = useState([]);
  const maxNumber = 5;
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

  useEffect(() => {
    if (select) {
      const file = `/images/${select.images[0]}`;

      var request = new XMLHttpRequest();
      request.open('GET', file, true);
      request.responseType = 'blob';
      request.onload = async function (e: any) {
        var dataURL = await blobToDataURL(e.target.response);
      };
      request.send();

      // setImages();
    }
  }, [select]);

  function blobToFile(theBlob: Blob, fileName: string) {
    var b: any = theBlob;
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    b.lastModifiedDate = new Date();
    b.name = fileName;

    //Cast to a File() type
    return theBlob;
    // return new File([theBlob], fileName);
  }

  function blobToDataURL(blob: any) {
    var a = new FileReader();
    a.onload = function (e: any) {
      var file = blobToFile(blob, `${select.images[0]}`);
      // var file = new File([blob], `${select.images[0]}`);
      var a = {
        dataURL: e.target.result,
        file,
      };

      let imgs = [...images];
      imgs.push(a as never);
      setImages(imgs);
      debugger;
      const files = new Array<any>();
      files.push(file);

      dispatch(
        productWriteSetForm({
          key: 'images',
          value: files,
        }),
      );

      return a;
    };
    a.readAsDataURL(blob);
  }

  const onChange = useCallback(
    (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
      let check = false;
      const fileForm = /(.*?)\/(jpg|jpeg|png)$/;
      const maxSize = 2 * 1024 * 1024;
      const files = imageList.map((img: any) => {
        const file = img.file;
        debugger;
        if (!file.type.match(fileForm)) {
          alert('jpg / jpeg / png 파일만 등록 가능합니다.');
          check = true;
        } else if (file.size >= maxSize) {
          alert('1MB 이하 파일만 등록 가능합니다.');
          check = true;
        }

        return file;
      });
      if (check) return;

      // const formData = new FormData();

      // files.map((file: any) => formData.append('images', file));

      setImages(imageList as never[]);

      debugger;

      dispatch(
        productWriteSetForm({
          key: 'images',
          value: files,
        }),
      );
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
