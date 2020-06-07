const path = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

const port = process.env.PORT || 8000;

app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://dataservice.accuweather.com',
    changeOrigin: true,
    pathRewrite: function (path, req) {
      return path.replace('/api', '');
    },
  })
);

app.use(express.static(path.join(__dirname, '/../build')));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname + '/../build/index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});
