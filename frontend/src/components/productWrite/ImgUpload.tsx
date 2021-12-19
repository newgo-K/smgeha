import { css } from '@emotion/react';
import Button from 'components/common/Button';
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

  function Test({ index, onImageUpdate, onClick, text, imghover, icon }: any) {
    return (
      <>
        {imghover && (
          <HoverWrap>
            <Button iconOnly variant="text" onClick={onClick}>
              <Icon icon={icon} color={palette.black[0]} size="1.1rem" />
            </Button>
          </HoverWrap>
        )}
      </>
    );
  }

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
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              이미지 올리기
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>전체 삭제</button>
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
                    border: 1px solid black;
                    width: 170px;
                    height: 170px;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
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

const HoverWrap = styled.ul`
  position: absolute;
  display: flex;
  justify-content: space-between;

  li {
    cursor: pointer !important;
  }
`;

export default ImgUpload;
