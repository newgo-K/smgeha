import { css } from '@emotion/react';
import Button, { ButtonProps } from 'components/common/Button';
import Icon from 'lib/icon/Icon';
import palette from 'lib/styles/palette';
import React from 'react';
import ReactImageUploading, { ImageListType } from 'react-images-uploading';
import styled from '@emotion/styled';

type ImgUploadProps = {
  images: Array<any>;
  maxNumber: number;
  imghover: Array<boolean>;
  handleMouseEnter: (index: number) => void;
  handleMouseLeave: (index: number) => void;
  onChange: (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined,
  ) => void;
};

function ImgUpload({
  images,
  maxNumber,
  imghover,
  handleMouseEnter,
  handleMouseLeave,
  onChange,
}: ImgUploadProps) {
  return (
    <div className="App">
      <ReactImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <ImgButtonStyles>
              <ButtonStyles variant="text" onClick={onImageUpload}>
                <Icon icon="imgAdd" color={palette.grey[4]} />
                <TextStyles>이미지 올리기</TextStyles>
              </ButtonStyles>

              <ButtonStyles variant="text" onClick={onImageRemoveAll}>
                <Icon icon="delete" color={palette.grey[4]} />
                <TextStyles>전체 삭제</TextStyles>
              </ButtonStyles>
            </ImgButtonStyles>
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              {imageList.map((image, index) => (
                <ImgStyles
                  key={index}
                  className="image-item"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <img
                    css={css`
                      object-fit: contain;
                      max-width: 170px;
                      max-height: 170px;
                      margin: 0 auto;

                      :hover {
                        opacity: 1;
                        filter: alpha(opacity=100);
                      }
                    `}
                    src={image.dataURL}
                    alt=""
                  />
                  {imghover[index] && (
                    <HoverWrap>
                      <li>
                        <Button
                          iconOnly
                          variant="text"
                          onClick={() => onImageUpdate(index)}
                        >
                          <Icon
                            icon="update"
                            color={palette.black[0]}
                            size="1.5rem"
                          />
                        </Button>
                      </li>

                      <li>
                        <Button
                          iconOnly
                          variant="text"
                          onClick={() => onImageRemove(index)}
                        >
                          <Icon
                            icon="delete"
                            color={palette.black[0]}
                            size="1.5rem"
                          />
                        </Button>
                      </li>
                    </HoverWrap>
                  )}
                </ImgStyles>
              ))}
            </div>
          </div>
        )}
      </ReactImageUploading>
    </div>
  );
}

const ImgStyles = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 170px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: 0.375rem;
  border: 1px solid ${palette.grey[3]};
  border-radius: 0.3125rem;
  :hover {
    img {
      opacity: 0.4;
    }
  }
`;

const ImgButtonStyles = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ButtonStyles = (props: ButtonProps) => (
  <Button
    css={css`
      font-size: 0.9375rem !important;
      color: ${palette.grey[4]} !important;
      cursor: pointer;
    `}
    {...props}
  />
);

const TextStyles = styled.span`
  margin-left: 0.3125rem;
`;

const HoverWrap = styled.ul`
  position: absolute;
  display: flex;
  justify-content: space-between;

  li {
    cursor: pointer !important;
  }
`;

export default ImgUpload;
