import client from './client';

/////////////////////////////////////
// 제품 업로드
/////////////////////////////////////
export type ReqWriteForm = {
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

export type SelectTypesProps = {
  title: string;
  serial: string;
  product: number;
  manufacture: number;
  size: string;
  type: number;
  price: string;
  img: Array<any>;
};

export type ImgsProps = {
  img: [];
};

export type ProductImgUploadPorps = {
  imgs: Array<string>;
};

export type ProductEditorProps = {
  imgs: Array<string>;
};

export type resProductPacket = {
  msg: string;
};

export type writeCategoryData = {
  productCategoryId: number;
  name: string;
  code: number;
};

export type resWriteCategoryPacket = {
  prodcutCategoryList: Array<writeCategoryData>;
  manufactureCategoryList: Array<writeCategoryData>;
  sizeCategoryList: Array<writeCategoryData>;
  typeCategoryList: Array<writeCategoryData>;
};

export async function reqCategory(productCategoryId: number) {
  const res = await client.post('/writeCategory', { productCategoryId });
  return res.data;
}

export async function reqWrite(files: any) {
  const formData = new FormData();

  formData.append('productCode', files.productCode);
  formData.append('manufactureCode', files.manufactureCode);
  formData.append('sizeCode', files.sizeCode);
  formData.append('typeCode', files.typeCode);

  formData.append('title', files.title);
  formData.append('url', files.url);
  formData.append('serial', files.serial);
  formData.append('manufacture', files.manufacture);
  formData.append('size', files.size);
  formData.append('price', files.price);

  files.images.map((file: any) => formData.append('images', file));

  const res = await client.post('/write', formData);

  return res;
}

export async function reqWriteSelect(id: any) {
  const res = await client.get(`/write/${id}`);
  return res.data;
}

export async function reqModify(files: any) {
  debugger;
  const formData = new FormData();

  // formData.append('id', files.id);
  formData.append('productCode', files.productCode);
  formData.append('manufactureCode', files.manufactureCode);
  formData.append('sizeCode', files.sizeCode);
  formData.append('typeCode', files.typeCode);

  formData.append('title', files.title);
  formData.append('url', files.url);
  formData.append('serial', files.serial);
  formData.append('manufacture', files.manufacture);
  formData.append('size', files.size);
  formData.append('price', files.price);

  files.images.map((file: any) => formData.append('images', file));

  debugger;

  const res = await client.patch(`/write/${files.id}`, formData);

  return res;
}
