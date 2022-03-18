import { ProtocolOptions } from '../index';
import * as Ws from 'ws';
import { format } from '../utils';

export class HttpClient {
  private url: string;
  private options: ProtocolOptions;
  private client!: Ws | WebSocket;

  constructor(url: string, options: ProtocolOptions) {
    // TODO: 支持 ios 的 url 正则验证
    this.url = format.getTokenUrl(url, options);
    this.options = options;
  }
}
