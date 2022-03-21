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
  name: string;
  serial: string;
  manufacture: string;
  size: string;
  subTypes: string;
  price: number;
  url: string;
  subImages: Array<string>;
};

export async function reqProductSelect({ id }: reqProductSelectPacket) {
  const res = await client.get(`/product/${id}`);

  return res.data;
}

/////////////////////////////////////
// 제품 삭제
/////////////////////////////////////
export type reqProductDeletePacket = {
  id: number;
};

export async function reqProductDelete({ id }: reqProductDeletePacket) {
  const res = await client.delete(`/product/${id}`);
  return res.data;
}
