import axios, { AxiosResponse } from 'axios';
import { REACT_BASE_URL } from './index';

export const getTransports = (): Promise<AxiosResponse<Promise<any[]>>> => {
  return axios.get(`${REACT_BASE_URL}/products`).then((response: any) => response);
};
