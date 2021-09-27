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
  id: Number;
  title: String;
  num: String;
  make: String;
  liter: String;
  door: String;
  design: String;
  price: String;
};

export async function reqProducts() {
  const res = await client.get('/main');

  return res.data;
}
