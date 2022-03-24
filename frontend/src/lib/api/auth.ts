import client from './client';

/////////////////////////////////////
// 로그인
/////////////////////////////////////
export type reqLoginPacket = {
  userId: string;
  password: string;
};

export type resLoginPacket = {
  role: string;
  token: string;
};

export async function reqLogin({ userId, password }: reqLoginPacket) {
  const res = await client.post('/login', { userId, password });
  return res.data;
}

export async function reqLoginCheck() {
  const res = await client.get('/loginCheck');
  return res.data;
}
