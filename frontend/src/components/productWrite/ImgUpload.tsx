import { css } from '@emotion/react';
import Button, { ButtonProps } from 'components/common/Button';
import Icon from 'lib/icon/Icon';
import palette from 'lib/styles/palette';
import React from 'react';
import ReactImageUploading from 'react-images-uploading';
import styled from '@emotion/styled';

function ImgUpload({ ...props }: any) {
  const {
    images,
    onChange,
    maxNumber,
    handleMouseEnter,
    handleMouseLeave,
    imghover,
  } = props;

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
            <div
              css={css`
                display: flex;
                justify-content: flex-end;
              `}
            >
              <ButtonStyles variant="text" onClick={onImageUpload}>
                <Icon icon="imgAdd" color={palette.grey[4]} />
                <TextStyles>이미지 올리기</TextStyles>
              </ButtonStyles>

              <ButtonStyles variant="text" onClick={onImageRemoveAll}>
                <Icon icon="delete" color={palette.grey[4]} />
                <TextStyles>전체 삭제</TextStyles>
              </ButtonStyles>
            </div>
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              {imageList.map((image, index) => (
                <div
                  key={index}
                  className="image-item"
                  css={css`
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid ${palette.grey[3]};
                    border-radius: 5px;
                    width: 170px;
                    height: 170px;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    margin: 6px;
                    :hover {
                      img {
                        opacity: 0.4;
                      }
                    }
                  `}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <img
                    css={css`
                      max-width: 170px;
                      max-height: 170px;
                      margin: 0 auto;
                      object-fit: contain;

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
                </div>
              ))}
            </div>
          </div>
        )}
      </ReactImageUploading>
    </div>
  );
}

const ButtonStyles = (props: ButtonProps) => (
  <Button
    css={css`
      font-size: 15px !important;
      color: ${palette.grey[4]} !important;
      cursor: pointer;
    `}
    {...props}
  />
);

const TextStyles = styled.span`
  margin-left: 5px;
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
