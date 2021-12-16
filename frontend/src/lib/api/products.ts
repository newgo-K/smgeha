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

  return res.data;
}
