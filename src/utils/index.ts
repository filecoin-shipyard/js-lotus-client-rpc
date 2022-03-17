import * as chalk from 'chalk';
import { ProtocolOptions } from '../index';

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

export const authorization = {
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
};
