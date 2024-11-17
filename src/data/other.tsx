// export const excludes_routes = [
//   /^(?:\/\w+)?\/account-information/,
//   /^(?:\/\w+)?\/admin-actions/,
//   /^(?:\/\w+)?\/products/,
//   /^(?:\/\w+)?\/product-view/,
//   /^(?:\/\w+)?\/orders/,
//   /^(?:\/\w+)?\/checkout-page/,
//   /^(?:\/\w+)?\/view-product\//,
//   /^(?:\/\w+)?\/user\//, // This will match any path starting with /user/
// ];
export const excludes_routes = [
  /\/account-information/,
  /\/admin-actions/,
  /\/products/,
  /\/product-view/,
  /\/shopping-cart/,
  /\/orders/,
  /\/checkout-page/,
  /\/view-product/, // This will match any path containing /view-product
  /\/user\//, // This will match any path starting with /user/
];
