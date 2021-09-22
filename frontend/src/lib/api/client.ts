import axios, { AxiosInstance } from 'axios';

const client: AxiosInstance = axios.create();

export type resCommonPacket = {
  message: string;
  status: string;
};

export default client;
