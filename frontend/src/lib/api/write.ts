import { config } from 'process';
import client from './client';

/////////////////////////////////////
// 제품 업로드
/////////////////////////////////////
export type ReqWriteForm = {
  title: string;
  serial: string;
  product: number;
  manufacture: number;
  size: string;
  type: number;
  price: string;
  images: Array<string>;
};

export type SelectTypesProps = {
  title: string;
  serial: string;
  product: number;
  manufacture: number;
  size: string;
  type: number;
  price: string;
  img: Array<any>;
};

export type ImgsProps = {
  img: [];
};

export type ProductImgUploadPorps = {
  imgs: Array<string>;
};

export type ProductEditorProps = {
  imgs: Array<string>;
};

export type resProductPacket = {
  msg: string;
};

export async function reqWrite(files: any) {
  const formData = new FormData();
  try {
    formData.append('title', files.title);
    formData.append('serial', files.serial);
    formData.append('product', files.product);
    formData.append('manufacture', files.manufacture);
    formData.append('size', files.size);
    formData.append('type', files.type);
    formData.append('price', files.price);
    files.images.map((file: any) => formData.append('images', file));

    const res = await client.post('/write', formData);
  } catch (e: any) {
    console.log(e);
  }
  return 'ok';
}
