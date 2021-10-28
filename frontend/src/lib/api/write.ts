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
  imgs: Array<string>;
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

export async function reqWrite(file1: any) {
  debugger;
  const file = file1.imgs;
  const res = await client.post('/write', file);

  return res.data;
}
