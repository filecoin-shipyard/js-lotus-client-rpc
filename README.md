# @bit-rainforest/lotus-client-rpc.js

![standard-readme compliant](https://img.shields.io/badge/js--lotus--client--rpc-fork-yellow.svg?style=flat-square)
![standard-readme compliant](https://img.shields.io/badge/typescript-v4.5.2-green.svg?style=flat-square)


FilMeta 2.0 RPC api js client

## Table of Contents

- [Install](#install)
  - [CNPM](#cnpm)
  - [NPM](#npm)
  - [YARN](#yarn)
  - [PNPM](#pnpm)
- [Usage](#usage)
  - [Introduce](#introduce)
  - [Export](#export)
  - [LotusRPC](#lotusrpc)
- [Example](#example)
  - [Javascript](#javascript)
  - [Typescript](#typescript)
- [Maintainers](#maintainers)

## Install

### CNPM

```
cnpm i @bit-rainforest/lotus-client-rpc.js --save
```

### NPM

```
npm i @bit-rainforest/lotus-client-rpc.js --save
```

### YARN

```
yarn add @bit-rainforest/lotus-client-rpc.js
```

### PNPM

```
pnpm add @bit-rainforest/lotus-client-rpc.js
```

## Usage

### Introduce

本库为调用 `filMeta RPC` 的接口库，本库必须配合 `filmeta-client-protocols.js` 库使用。

在使用本库前需使用 `filmeta-client-rpc.js` 库初始化 `HTTP` 或 `WebSocket` 协议。



### Export

+ LotusRPC: 接口基类，通过此类进行接口初始化。

  | Param      | Type                                  | Description                        | Sample                                                       |
  | ---------- | ------------------------------------- | ---------------------------------- | ------------------------------------------------------------ |
  | `provider` | `filmeta-client-rpc.js` 的 `Protocol` | `协议`                             | `new Protocol("ws://127.0.0.1:1234/rpc/v0", ProtocolType.WebSocket,{})` |
  | `options`  | `any`                                 | ` 初始化选项，目前选项只有 schema` | `{schema: schema.chain}`                                     |

  

+ schema: 模式枚举类型，通过此类来确定具体调用哪个 `schema`，用来传入 `options`。

+ 其余的暴露内容都为数据类型声明。



### LotusRPC

#### 初始化

```typescript
import { Protocol, ProtocolType, JsonRpcV2Error } from "@bit-rainforest/filmeta-client-protocols.js";
import { LotusRPC, schema,  } from "../src";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IiIsImVtYWlsIjoiIiwicGVybWlzc2lvbnMiOlsicmVhZCIsIndyaXRlIiwiY2x1c3RlciIsInNpZ24iLCJhZG1pbiJdLCJleHBpcmVkX2F0IjoiMDAwMS0wMS0wMVQwMDowMDowMFoifQ.1GojU4WIhgQamPmwGA7szeHcJWlWYP5PE8BV-KdnW1Y"

const protocol = new Protocol("ws://127.0.0.1:1234/rpc/v0", ProtocolType.WebSocket,{auth: {token}})

const chainRpc = new LotusRPC(protocol,{schema: schema.chain})
```

初始化传参可参考上面的 [`[ Usage - Export - LotusRPC ]`](#export)。

在初始化的时候，需要根据不同的 `schema` 来初始化不同的 `RPC Client` ，并使用初始化后的 `Client` 来调用相关接口。



#### 发送请求并接受响应

```typescript
chainRpc.chainHead().then(
  (res: any)=>{
    console.log(res)
  },
  (err: JsonRpcV2Error)=>{
    console.log(err)
  },
)
```

直接使用相应 `schema` 初始化的 `Client` 来调用相关的接口，参数则直接传入调用的接口中即可。



#### 发送订阅事件及取消订阅

订阅事件调用后会自动订阅，返回值与协议的订阅返回值相同。



#### 关闭长链接

```typescript
chainRpc.destroy()
```

如你使用的协议是长链接，则可以使用 `destroy` 来进行关闭长链接。



## Example

### Javascript

```javascript
const { Protocol, ProtocolType } = require("@bit-rainforest/filmeta-client-protocols.js") ;
const { LotusRPC, schema }  = require("@bit-rainforest/filmeta-client-rpc.js");

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IiIsImVtYWlsIjoiIiwicGVybWlzc2lvbnMiOlsicmVhZCIsIndyaXRlIiwiY2x1c3RlciIsInNpZ24iLCJhZG1pbiJdLCJleHBpcmVkX2F0IjoiMDAwMS0wMS0wMVQwMDowMDowMFoifQ.1GojU4WIhgQamPmwGA7szeHcJWlWYP5PE8BV-KdnW1Y"

const protocol = new Protocol("ws://127.0.0.1:1234/rpc/v0", ProtocolType.WebSocket,{auth: {token}})

const chainRpc = new LotusRPC(protocol,{schema: schema.chain})

chainRpc.chainHead().then(
  (res)=>{
    console.log(res)
  },
  (err)=>{
    console.log(err)
  },
)
```

### Typescript

```typescript
import { Protocol, ProtocolType, JsonRpcV2Error } from "@bit-rainforest/filmeta-client-protocols.js";
import { LotusRPC, schema,  } from "@bit-rainforest/filmeta-client-rpc.js";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IiIsImVtYWlsIjoiIiwicGVybWlzc2lvbnMiOlsicmVhZCIsIndyaXRlIiwiY2x1c3RlciIsInNpZ24iLCJhZG1pbiJdLCJleHBpcmVkX2F0IjoiMDAwMS0wMS0wMVQwMDowMDowMFoifQ.1GojU4WIhgQamPmwGA7szeHcJWlWYP5PE8BV-KdnW1Y"

const protocol = new Protocol("ws://127.0.0.1:1234/rpc/v0", ProtocolType.WebSocket,{auth: {token}})

const chainRpc = new LotusRPC(protocol,{schema: schema.chain})

chainRpc.chainHead().then(
  (res: any)=>{
    console.log(res)
  },
  (err: JsonRpcV2Error)=>{
    console.log(err)
  },
)
```

## Maintainers

[@eliassama](https://github.com/eliassama)
