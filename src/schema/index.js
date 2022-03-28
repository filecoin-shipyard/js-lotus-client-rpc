const { ChainMethods, StateMethods, ModelServiceMethods } = require("./schema");

const chain = {
  methods: ChainMethods,
};

const state = {
  methods: StateMethods,
};

const modelService = {
  methods: ModelServiceMethods,
};

module.exports = {
  chain,
  state,
  modelService
};
