import client from './client';
import { reqProductsCategorySelectPacket } from './products';

/////////////////////////////////////
// 제품 카테고리
/////////////////////////////////////
export type resProductCategoryPacket = {
  code: number;
  name: string;
};

export async function reqProductCategoryInit() {
  const res = await client.get('/productCategory');

  return res.data;
}

/////////////////////////////////////
// 제품 검색 서브 카테고리
/////////////////////////////////////
export type resProductSubCategoryPacket = {
  code: number;
  name: string;
  parent: number;
  depth: number;
};

export async function reqProductSubCategory({
  code,
}: reqProductsCategorySelectPacket) {
  const res = await client.get(`/productSubCategory/${code}`);

  return res.data;
}
