const express = require("express");

const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

const apiProxy = createProxyMiddleware({
  target: "http://20.244.56.144/train/",
  changeOrigin: true,
  pathRewrite: {

    "^/api": "",
  },
});

app.use("/api", apiProxy);

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});