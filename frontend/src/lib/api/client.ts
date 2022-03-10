import axios, { AxiosInstance } from 'axios';

const client: AxiosInstance = axios.create();

const user = JSON.parse(localStorage.getItem('user')!);

if (user !== null) {
  client.defaults.headers.common['X-AUTH-TOKEN'] = user.token;
}

export default client;
