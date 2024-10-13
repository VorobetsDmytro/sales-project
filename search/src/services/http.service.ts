import axios, { AxiosResponse } from 'axios';
import { HttpException } from '../exceptions/http.exception';
import axiosRetry from 'axios-retry';

type methodType = 'get' | 'post' | 'put' | 'patch' | 'delete';

axiosRetry(axios, { retries: 3, retryDelay: (retryCount) => {
  return retryCount * 1000;
} });

export class HttpService {
  async sendRequest<ReqBody extends object, ResBody extends object>(
    url: string,
    method: methodType = 'get',
    body: ReqBody | null = null,
    headers = {},
  ) {
    let res: AxiosResponse<any, any> | null = null;
    if (method === 'get') {
      res = await axios[method](url, {
        headers,
        validateStatus: () => true,
      });
    } else {
      res = await axios[method](url, body || {}, {
        headers,
        validateStatus: () => true,
      });
    }
    if (res!.status >= 400) {
      throw new HttpException(res?.data?.message || 'Response error', res!.status);
    }
    return res!.data as ResBody;
  }
}
