class LotusRPC {
  constructor(provider, { schema }) {
    this.provider = provider;
    this.schema = schema;
    return new Proxy(this, {
      get: (obj, prop) => {
        if (prop in obj) {
          return obj[prop];
        } else if (prop === Symbol.iterator) {
          return undefined;
        } else if (prop === Symbol.toStringTag) {
          return undefined;
        } else if (prop === "$$typeof") {
          return undefined;
        } else if (prop === "then") {
          return undefined;
        } else {
          let method = prop.charAt(0).toUpperCase() + prop.slice(1);
          const schemaMethod = schema.methods[method];
          if (schemaMethod) {
            if (
              schemaMethod.namespace &&
              method.startsWith(schemaMethod.namespace)
            ) {
              // Namespaces other than "Filecoin" are permitted such that name of the
              // `schemaMethod` provided in the schema is `NamespaceMethod` for the respective
              // `Namespace.Method` method. Further, the `schemaMethod` needs to provide
              // the `namespace` string set to `Namespace`. This allows calling
              // provider.namespaceMethod() or provider.NamespaceMethod().
              method = `${schemaMethod.namespace}.${method.slice(
                schemaMethod.namespace.length,
              )}`;
            } else {
              method = `Filecoin.${method}`;
            }

            if (schemaMethod.subscription) {
              return this.callSchemaMethodSub.bind(this, method);
            } else {
              return this.callSchemaMethod.bind(this, method);
            }
          } else {
            // FIXME: throw? maybe? i think so.
            console.warn(`Unknown method ${method}`);
          }
        }
      },
    });
  }

  async callSchemaMethod(method, ...params) {
    return this.provider.send(method, params);
  }

  callSchemaMethodSub(method, ...params) {
    return this.provider.sendSubscription(method, params);
  }

  async importFile(body) {
    return this.provider.importFile(body);
  }

  async destroy() {
    await this.provider.destroy();
  }
}

module.exports = { LotusRPC };
