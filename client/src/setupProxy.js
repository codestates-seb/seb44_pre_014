const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://teamdev.shop',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
