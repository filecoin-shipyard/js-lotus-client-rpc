import { exception, format } from '../utils';
import { HttpClient } from './http';
import { WsClient } from './ws';
import { generateRandomStr, RandomType } from 'comsvr-random';

export enum ProtocolType {
  HTTP = 1,
  WebSocket,
}

export interface ProtocolOptions {
  auth?: {
    token?: (() => string) | string;
    authHeader?: string;
  }; // 用户权限标识符，用于请求时鉴权使用。
}

export interface JsonRpcV2Request {
  jsonrpc: string;
  id: number | string;
  method: string;
  params: any[];
}

export interface JsonRpcV2Error {
  code: number;
  message: string;
}

export class Protocol {
  private readonly url: string;
  private readonly protocolType: ProtocolType;
  private readonly options: ProtocolOptions;
  private readonly headers: { [index: string]: string };
  private readonly client: HttpClient | WsClient;

  constructor(
    url: string,
    protocolType: ProtocolType,
    options: ProtocolOptions,
  ) {
    this.url = format.getTokenUrl(format.getHttpUrl(url), options);
    this.protocolType = protocolType;
    this.options = options;
    this.headers = format.getHeader(options);
    switch (protocolType) {
      case ProtocolType.HTTP:
        this.client = new HttpClient(url, options);
        break;
      case ProtocolType.WebSocket:
        this.client = new WsClient(url, options);
        break;
      default:
        throw exception.error(
          'Is not a valid protocolType, Please use ProtocolType.HTTP or ProtocolType.WebSocket.',
        );
    }
  }

  // FIXME: 根据实际情况做进一步调整
  send(method: string, params: any[]) {
    const jsonRpcRequest: JsonRpcV2Request = {
      jsonrpc: '2.0',
      id: `${`${Date.now()}`.substring(2, 11)}${generateRandomStr(
        RandomType.IntRandom,
        4,
      )}`,
      method,
      params,
    };

    return this.client.send(jsonRpcRequest);
  }
  // TODO: 增加订阅事件处理

  create(url?: string, protocolType?: ProtocolType, options?: ProtocolOptions) {
    return new Protocol(
      url || this.url,
      protocolType || this.protocolType,
      options || this.options,
    );
  }
}
