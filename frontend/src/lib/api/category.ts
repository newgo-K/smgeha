import client from './client';

/////////////////////////////////////
// 제품 카테고리
/////////////////////////////////////
export type resProductCategoryPacket = {
  code: number;
  name: string;
};

export async function reqProductCategory() {
  const res = await client.get('/productCategory');

  return res.data;
}
