import client from './client';

/////////////////////////////////////
// 제품 업로드
/////////////////////////////////////
export type SelectTypesProps = {
  title: string;
  serial: string;
  product: number;
  manufacture: number;
  size: string;
  type: number;
  price: string;
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

export async function reqWrite(file: any) {
  console.log('img', file);
  const res = await client.post('/write', file);

  return res.data;
}
