import { config } from 'process';
import client from './client';

/////////////////////////////////////
// 로그인
/////////////////////////////////////
export type reqLoginPacket = {
  userId: string;
  password: string;
};

export type resLoginPacket = {
  data: any;
};

export async function reqLogin({ userId, password }: reqLoginPacket) {
  const formData = new FormData();

  formData.append('userId', userId);
  formData.append('password', password);

  const res = await client.post('/login/action', formData);
  debugger;
  return res.data;
}
