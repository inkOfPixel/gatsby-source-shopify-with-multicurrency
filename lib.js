"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.queryAll = exports.queryOnce = exports.printGraphQLError = void 0;

var _prettyjson = _interopRequireDefault(require("prettyjson"));

var _chalk = _interopRequireDefault(require("chalk"));

var _fp = require("lodash/fp");

const printGraphQLError = e => {
  const prettyjsonOptions = {
    keysColor: `red`,
    dashColor: `red`
  };

  if (e.response && e.response.errors) {
    if (e.message.startsWith(`access denied`)) {
      console.error(_chalk.default`\n{yellow Check your token has this read authorization,
      or omit fetching this object using the "includeCollections" options in gatsby-source-shopify plugin options}`);
    }

    console.error(_prettyjson.default.render(e.response.errors, prettyjsonOptions));
  }

  if (e.request) console.error(_prettyjson.default.render(e.request, prettyjsonOptions));
};
/**
 * Request a query from a client.
 */


exports.printGraphQLError = printGraphQLError;

const queryOnce = async (client, query, first = 250, after) => await client.request(query, {
  first,
  after
});
/**
 * Get all paginated data from a query. Will execute multiple requests as
 * needed.
 */


exports.queryOnce = queryOnce;

const queryAll = async (client, path, query, first = 250, after = null, aggregatedResponse = null) => {
  const data = await queryOnce(client, query, first, after);
  const edges = (0, _fp.getOr)([], [...path, `edges`], data);
  const nodes = edges.map(edge => edge.node);
  aggregatedResponse = aggregatedResponse ? aggregatedResponse.concat(nodes) : nodes;

  if ((0, _fp.get)([...path, `pageInfo`, `hasNextPage`], data)) {
    return queryAll(client, path, query, first, (0, _fp.last)(edges).cursor, aggregatedResponse);
  }

  return aggregatedResponse;
};

exports.queryAll = queryAll;