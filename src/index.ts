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

export * from './protocols/ws';
