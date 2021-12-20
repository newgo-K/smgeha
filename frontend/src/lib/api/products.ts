import client from './client';

/////////////////////////////////////
// 메인 메뉴 선택
/////////////////////////////////////
export type reqProductsMainMenuSelectPacket = {
  code: number;
};

export async function reqProductsMainMenuSelect({
  code,
}: reqProductsMainMenuSelectPacket) {
  const res = await client.get(`/main/${code}`);

  return res.data;
}

/////////////////////////////////////
// 메인 제품
/////////////////////////////////////
export type resProductPacket = {
  id: number;
  name: string;
  serial: string;
  image: string;
  size: string;
  manufacture: string;
  price: number;
  url: string;
  subTypes: string;
};

export async function reqProducts() {
  const res = await client.get('/main');

  return res.data;
}

/////////////////////////////////////
// 서브 카테고리에 관련된 제품 검색
/////////////////////////////////////
export type reqProductSubCategorySearchPacket = {
  mainCode: number;
  subCodes: Array<number>;
};

export async function reqProductSubCategorySearch({
  mainCode,
  subCodes,
}: reqProductSubCategorySearchPacket) {
  const res = await client.post('/main', { mainCode, subCodes });

  return res.data;
}
