import client from './client';

/////////////////////////////////////
// 헤더메뉴 제품 선택
/////////////////////////////////////
export interface reqHeaderMenuSelectPacket {
  id: number;
}

export async function reqHeaderMenuSelect({ id }: reqHeaderMenuSelectPacket) {
  const res = await client.patch(`/main/${id}`);
  debugger;
  return res.data;
}
