import { JsonRpcV2Request, ProtocolOptions } from './index';
import nodeFetch, { Response } from 'node-fetch';
import { exception, format } from '../utils';
import { isBrowser, isNode } from 'comsvr-ast';

export class HttpClient {
  private url: string;
  private options: ProtocolOptions;
  private headers: { [index: string]: string };

  constructor(url: string, options: ProtocolOptions) {
    this.url = format.getTokenUrl(format.getHttpUrl(url), options);
    this.options = options;
    this.headers = format.getHeader(options);
  }

  // **- 外部接口 -**
  send(rpcRequest: JsonRpcV2Request) {
    return new Promise(async (resolve, reject) => {
      const request = {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(rpcRequest),
      };

      let response: Response | globalThis.Response;

      if (isNode()) {
        response = await nodeFetch(this.url, request);
      } else if (isBrowser() && typeof globalThis.fetch === 'function') {
        response = await globalThis.fetch(this.url, request);
      } else {
        throw exception.error(
          'Environment exception: detected that the current environment is neither Node.js nor fetch-enabled browser. If you are using a browser, your current browser may not support fetch and window.',
        );
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const { error, result } = await response.json();
      if (error) {
        return reject(error);
      } else {
        return resolve(result);
      }
    });
  }

  // TODO: 增加订阅事件处理
}
