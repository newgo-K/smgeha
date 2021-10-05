import client from './client';

/////////////////////////////////////
// 제품 업로드
/////////////////////////////////////
export type SelectTypesProps = {
  title: string;
  serial: string;
  manufacture: number;
  size: string;
  type: number;
  price: number;
};

export type ProductImgUploadPorps = {
  imgs: Array<string>;
};

export type ProductEditorProps = {
  imgs: Array<string>;
};

export type reqProductUploadPacket = {
  id: number;
};

export type resProductPacket = {
  msg: string;
};

export async function reqProductUpload({ id }: reqProductUploadPacket) {
  const res = await client.patch(`/product/${id}`);
  return res.data;
}
