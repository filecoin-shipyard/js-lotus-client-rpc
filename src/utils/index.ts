import * as chalk from 'chalk';
import { ProtocolOptions } from '../protocols';

export enum Environment {
  Node = 1,
  Browser,
  UnKnow,
}

export const exception = {
  error(message: string) {
    throw new Error(`[filMeta-client-rpc.js] Error ${message}`);
  },
};

export const println = {
  info(...messages: any[]) {
    console.log(chalk.bold.green(...messages));
  },

  warn(...messages: any[]) {
    console.log(chalk.bold.yellow(...messages));
  },

  error(...messages: any[]) {
    console.log(chalk.bold.red(...messages));
  },
};

export const format = {
  getHttpUrl(url: string) {
    url = url.replace(/^wss:/, 'https:').replace(/^ws:/, 'http:');

    if (!/^http(s)?:\/\//.test(url)) {
      throw exception.error('Is not a http or https url.');
    }

    return url;
  },

  getWsUrl(url: string) {
    url = url.replace(/^https:/, 'wss:').replace(/^http:/, 'ws:');

    if (!/^ws(s)?:\/\//.test(url)) {
      throw exception.error('Is not a ws or wss url.');
    }

    return url;
  },

  getTokenUrl(url: string, options: ProtocolOptions): string {
    const { auth: { token } = {} } = options;

    if (typeof token === 'string') {
      return `${url}?token=${token}`;
    } else if (typeof token === 'function') {
      const tokenResult = token();
      if (typeof tokenResult === 'string') {
        return `${url}?token=${tokenResult}`;
      }
    }

    return url;
  },

  getHeader(options: ProtocolOptions): { [index: string]: string } {
    const { auth: { authHeader, token } = {} } = options;

    const headerMap = new Map<string, string>([
      ['Content-Type', 'text/plain;charset=UTF-8'],
      ['Accept', '*/*'],
    ]);

    if (typeof token === 'string') {
      headerMap.set('Authorization', `Bearer ${token}`);
    } else if (typeof token === 'function') {
      const tokenResult = token();
      if (typeof tokenResult === 'string') {
        headerMap.set('Authorization', `Bearer ${token}`);
      }
    }

    if (typeof authHeader === 'string') {
      headerMap.set('Authorization', authHeader);
    }
    return Object.fromEntries(headerMap.entries());
  },
};
