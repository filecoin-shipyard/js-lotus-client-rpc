const schema = require("./schema");
const rpcClient = require("./rpc-client");
module.exports = {
  schema,
  ...rpcClient,
};
