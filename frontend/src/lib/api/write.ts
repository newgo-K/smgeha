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

export async function reqWrite({ ...props }: SelectTypesProps) {
  console.log('업로드', { ...props });
  // const res = await client.patch(`/product/${id}`);
  // return res.data;
}
