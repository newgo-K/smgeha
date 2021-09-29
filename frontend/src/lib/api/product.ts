import client from './client';

/////////////////////////////////////
// 제품 선택
/////////////////////////////////////
export type reqProductSelectPacket = {
  id: number;
};

export type resProductPacket = {
  id: number;
  productId: number;
  title: string;
  serial: string;
  manufactureText: string;
  sizeText: string;
  type: number;
  url: string;
  imgList: Array<string>;
};

export async function reqProductSelect({ id }: reqProductSelectPacket) {
  const res = await client.patch(`/product/${id}`);

  return res.data;
}
