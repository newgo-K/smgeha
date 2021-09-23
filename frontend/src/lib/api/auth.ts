import client from './client';

/////////////////////////////////////
// 로그인
/////////////////////////////////////
export type reqLoginPacket = {
  email: string;
  password: string;
};

export type resLoginPacket = {
  data: any;
};

export async function reqLogin({ email, password }: reqLoginPacket) {
  const res = await client.post('/api/auth/signin', { email, password });
  return res.data;
}

/////////////////////////////////////
// 회원가입
/////////////////////////////////////
export type reqRegPacket = {
  email: string;
  pinCode: string;
  password: string;
  nickname: string;
  mobile: string;
};

export type resRegPacket = {
  data: any;
};

export async function reqReg({
  email,
  pinCode,
  password,
  nickname,
  mobile,
}: reqRegPacket) {
  mobile = mobile.replaceAll('-', '');

  console.log('/api/auth/signup', {
    email,
    pinCode,
    password,
    nickname,
    mobile,
  });

  const res = await client.post('', {
    email,
    pinCode,
    password,
    nickname,
    mobile,
  });
  return res.data;
}

/////////////////////////////////////
// 인증번호 요청
// email
//
// 인증번호 체크
// email
// pinCode
//
// 비밀번호 변경
// email
// pinCode
// password
/////////////////////////////////////
export type reqPinCodePacket = {
  email: string;
};

export type resPinCodePacket = {
  data: any;
};

export async function reqPinCode({ email }: reqPinCodePacket) {
  const res = await client.post('/api/auth/pincode', {
    email,
  });
  return res.data;
}

/////////////////////////////////////
// 인증번호 체크
/////////////////////////////////////
export type reqCheckCodePacket = {
  email: string;
  pinCode: string;
};

export type resCheckCodePacket = {
  data: any;
};

export async function reqCheckCode({ email, pinCode }: reqCheckCodePacket) {
  const res = await client.post('/api/auth/checkcode', {
    email,
    pinCode,
  });
  return res.data;
}

/////////////////////////////////////
// 비밀번호 변경
/////////////////////////////////////
export type reqChangePasswordPacket = {
  email: string;
  pinCode: string;
  password: string;
};

export type resChangePasswordPacket = {
  data: any;
};

export async function reqChangePassword({
  email,
  pinCode,
  password,
}: reqChangePasswordPacket) {
  const res = await client.post('/api/auth/changepass', {
    email,
    pinCode,
    password,
  });

  return res.data;
}
