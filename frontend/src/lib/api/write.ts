import client from './client';
/////////////////////////////////////
// 제품 업로드
/////////////////////////////////////
export type reqWriteFormPacket = {
  id: number;
  productCode: number;
  manufactureCode: number;
  sizeCode: number;
  typeCode: number;
  title: string;
  url: string;
  serial: string;
  product: number;
  manufacture: string;
  size: string;
  price: number;
  images: Array<string>;
};

export type resWriteFormPacket = reqWriteFormPacket & {};

function initForm(form: any) {
  const formData = new FormData();

  formData.append('productCode', form.productCode);
  formData.append('manufactureCode', form.manufactureCode);
  formData.append('sizeCode', form.sizeCode);
  formData.append('typeCode', form.typeCode);

  formData.append('title', form.title);
  formData.append('url', form.url);
  formData.append('serial', form.serial);
  formData.append('manufacture', form.manufacture);
  formData.append('size', form.size);
  formData.append('price', form.price);

  form.images.map((img: any) => formData.append('images', img));

  return formData;
}

export async function reqWrite(form: reqWriteFormPacket) {
  const data = initForm(form);

  const res = await client.post('/write', data);

  return res.data;
}

/////////////////////////////////////
// 제품 분류 카테고리
/////////////////////////////////////
export type reqWriteCategoryPacket = {
  code: number;
};

export type writeCategoryState = {
  productCategoryId: number;
  name: string;
  code: number;
};

export type resWriteCategoryPacket = {
  prodcutCategoryList: Array<writeCategoryState>;
  manufactureCategoryList: Array<writeCategoryState>;
  sizeCategoryList: Array<writeCategoryState>;
  typeCategoryList: Array<writeCategoryState>;
};

export async function reqCategory({ code }: reqWriteCategoryPacket) {
  const res = await client.post('/writeCategory', { code });

  return res.data;
}

/////////////////////////////////////
// 등록된 제품 수정 정보 불러오기
/////////////////////////////////////
export type reqWriteSelectPacket = {
  id: number;
};

export type resWriteSelectPacket = reqWriteFormPacket & {};

export async function reqWriteSelect({ id }: reqWriteSelectPacket) {
  const res = await client.get(`/write/${id}`);

  return res.data;
}

/////////////////////////////////////
// 등록된 제품 수정 정보 불러오기
/////////////////////////////////////
export type reqWriteModifyPacket = reqWriteFormPacket & {};

export async function reqModify(form: reqWriteModifyPacket) {
  const data = initForm(form);

  const res = await client.patch(`/write/${form.id}`, data);

  return res.data;
}
