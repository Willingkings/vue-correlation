let proxyObj = {}

proxyObj["/"] = {
  // websocket
  ws: false,
  target: "http://127.0.0.1:8888",
  changeOrigin: true,
  secure: false,
  pathReWrite: {
    "^/": "",
  },
};

module.exports = {
    devServer: {
        host: "localhost",
        port: 8080,
        proxy: proxyObj
    }
}