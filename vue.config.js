const webpack = require("webpack");
const fs = require("fs");
const path = require("path");

module.exports = {
  publicPath: "/only",
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        mapboxgl: "mapbox-gl"
      }),
      new webpack.EnvironmentPlugin(["MAPBOX_TOKEN"])
    ]
  },
  pluginOptions: {
    meta: {
      projectName: "only web",
      url: "https://daniellacos.se/only/",
      description:
        "for your consideration - the case for 'only web', written in vue.js",
      socialImage: "img/architecture.png"
    }
  },
  pwa: {
    assetsVersion: true,
    themeColor: "#42B983",
    msTileColor: "#ffffff",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    manifestOptions: {
      name: "modern vue native wrapper demo - only web",
      short_name: "only web",
      start_url: "https://daniellacos.se/only/"
    },
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/workers.js"
    }
  },
  devServer: {
    https: process.env.NODE_ENV === "development" && {
      key: fs.readFileSync(path.resolve(__dirname, ".ssl/local.key")),
      cert: fs.readFileSync(path.resolve(__dirname, ".ssl/local.crt"))
    },
    compress: true,
    host: "local.daniellacos.se",
    port: 8080,
    public: "https://local.daniellacos.se:8080/only/"
  }
};