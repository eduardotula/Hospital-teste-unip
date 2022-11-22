'use strict';

/**
 * A set of functions called "actions" for `user-api`
 */

module.exports = {
  getByCpf: async (ctx, next) => {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  }
};
