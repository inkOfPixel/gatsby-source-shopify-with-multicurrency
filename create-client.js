"use strict";

exports.__esModule = true;
exports.createClient = void 0;

var _graphqlRequest = require("graphql-request");

const createClient = (shopName, accessToken) => new _graphqlRequest.GraphQLClient(`https://${shopName}.myshopify.com/api/graphql`, {
  headers: {
    "X-Shopify-Storefront-Access-Token": accessToken
  }
});

exports.createClient = createClient;