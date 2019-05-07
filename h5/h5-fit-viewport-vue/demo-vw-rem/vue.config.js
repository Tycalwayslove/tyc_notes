const path = require("path");
const process = require("process");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "/",
  outputDir: resolve("/m"),
  assetsDir: "static",
  devServer: {
    open: true,
    proxy: null,
    disableHostCheck: true
  },
  productionSourceMap: false, // 生产环境禁用

  chainWebpack: config => {
    const oneOfsMap = config.module.rule("scss").oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          // Provide path to the file with resources
          resources: [
            "./src/assets/css/variable.scss",
            "./src/assets/css/utils.scss"
          ]
        })
        .end();
    });
    config.resolve.alias
      .set("@store", resolve("src/store"))
      .set("@components", resolve("src/components"))
      .set("@mixins", resolve("src/mixins"))
      .set("@api", resolve("src/api"))
      .set("@directives", resolve("src/directives"))
      .set("@pages", resolve("src/pages"));
  }
};
