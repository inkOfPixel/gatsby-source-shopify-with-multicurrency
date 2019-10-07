"use strict";

exports.__esModule = true;
exports.NODE_TO_ENDPOINT_MAPPING = exports.CONTENT = exports.SHOP = exports.PAGE = exports.SHOP_POLICY = exports.PRODUCT_METAFIELD = exports.PRODUCT_VARIANT = exports.PRODUCT_OPTION = exports.PRODUCT = exports.COMMENT = exports.COLLECTION = exports.BLOG = exports.ARTICLE = exports.TYPE_PREFIX = void 0;
// Node prefix
const TYPE_PREFIX = `Shopify`; // Node types

exports.TYPE_PREFIX = TYPE_PREFIX;
const ARTICLE = `Article`;
exports.ARTICLE = ARTICLE;
const BLOG = `Blog`;
exports.BLOG = BLOG;
const COLLECTION = `Collection`;
exports.COLLECTION = COLLECTION;
const COMMENT = `Comment`;
exports.COMMENT = COMMENT;
const PRODUCT = `Product`;
exports.PRODUCT = PRODUCT;
const PRODUCT_OPTION = `ProductOption`;
exports.PRODUCT_OPTION = PRODUCT_OPTION;
const PRODUCT_VARIANT = `ProductVariant`;
exports.PRODUCT_VARIANT = PRODUCT_VARIANT;
const PRODUCT_METAFIELD = `ProductMetafield`;
exports.PRODUCT_METAFIELD = PRODUCT_METAFIELD;
const SHOP_POLICY = `ShopPolicy`;
exports.SHOP_POLICY = SHOP_POLICY;
const PAGE = `Page`;
exports.PAGE = PAGE;
const SHOP = `shop`;
exports.SHOP = SHOP;
const CONTENT = `content`;
exports.CONTENT = CONTENT;
const NODE_TO_ENDPOINT_MAPPING = {
  [ARTICLE]: `articles`,
  [BLOG]: `blogs`,
  [COLLECTION]: `collections`,
  [PRODUCT]: `products`,
  [PAGE]: `pages`
};
exports.NODE_TO_ENDPOINT_MAPPING = NODE_TO_ENDPOINT_MAPPING;