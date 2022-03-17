import { JsonRpcV2Error, JsonRpcV2Request, ProtocolOptions } from '../index';
import { authorization, exception } from '../utils';
import { isBrowser, isNode } from 'comsvr-ast';
import * as Ws from 'ws';

export class WsClient {
  private url: string;
  private options: ProtocolOptions;
  private client!: Ws | WebSocket;
  private pool!: Map<
    string | number,
    [(result: any) => void, (err: JsonRpcV2Error) => void]
  >;

  constructor(url: string, options: ProtocolOptions) {
    // TODO: 支持 ios 的 url 正则验证
    this.url = authorization.getTokenUrl(url, options);
    this.options = options;
    this.pool = new Map<
      string | number,
      [(result: any) => void, (err: JsonRpcV2Error) => void]
    >();
    this.open();
  }

  // **- 内部操作接口 -**
  private open() {
    if (isNode()) {
      this.client = new Ws(this.url);
    } else if (
      isBrowser() &&
      window.WebSocket &&
      Object.prototype.toString.call(window.WebSocket.prototype) ===
        '[object WebSocket]'
    ) {
      this.client = new WebSocket(this.url);
    } else {
      throw exception.error(
        'Environment exception: detected that the current environment is neither Node.js nor websocket-enabled browser. If you are using a browser, your current browser may not support native WebSockets and window.',
      );
    }
    this.disConnect();
  }

  // *保留*
  private close() {
    const { close } = this;
    switch (this.client.readyState) {
      case this.client.CONNECTING:
        setTimeout(() => {
          close();
        }, 1000);
        break;
      case this.client.OPEN:
        this.client.close();
        break;
    }
  }

  // **- 内部监听接口 -**
  private disConnect() {
    const { open } = this;
    this.client.onclose = function closeEvent() {
      open();
    };
  }

  // **- 外部接口 -**
  send(rpcRequest: JsonRpcV2Request) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this = this;
    return new Promise((resolve, reject) => {
      _this.client.send(JSON.stringify(rpcRequest));
      _this.pool.set(rpcRequest.id, [
        (result: any) => {
          resolve(result);
        },
        (error: JsonRpcV2Error) => {
          reject(error);
        },
      ]);
    });
  }
}
