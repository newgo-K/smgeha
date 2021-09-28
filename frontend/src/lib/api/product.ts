import client from './client';

/////////////////////////////////////
// 메인 메뉴 선택
/////////////////////////////////////
export type reqProductsMainMenuSelectPacket = {
  id: number;
};

export async function reqProductsMainMenuSelect({
  id,
}: reqProductsMainMenuSelectPacket) {
  const res = await client.patch(`/main/${id}`);

  return res.data;
}

/////////////////////////////////////
// 메인 제품
/////////////////////////////////////
export type resProductPacket = {
  id: number;
  productId: number;
  title: string;
  serial: string;
  manufactureText: string;
  sizeText: string;
  type: number;
  design: string;
  img: string;
};

export async function reqProducts() {
  const res = await client.get('/main');

  return res.data;
}

/////////////////////////////////////
// 사이드 메뉴 선택
/////////////////////////////////////
export type reqProductsSideMenuSelectPacket = {
  id: number;
  sideMenus: Array<Array<number>>;
};

export async function reqProductsSideMenuSelect({
  id,
  sideMenus,
}: reqProductsSideMenuSelectPacket) {
  const res = await client.post('/main', { id, sideMenus });
  debugger;

  return res.data;
}
