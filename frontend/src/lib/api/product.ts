/////////////////////////////////////
// 메인 제품

import client from './client';

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
