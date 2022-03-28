import { ChainMethods, StateMethods, ModelServiceMethods } from "./schema";

export const chain: {
  methods: typeof ChainMethods,
};

export const state: {
  methods: typeof StateMethods,
};

export const modelService: {
  methods: typeof ModelServiceMethods,
};
