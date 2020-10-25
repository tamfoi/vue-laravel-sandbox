module.exports = {
  outputDir: '../../htdocs',
  devServer: {
    port: '18080',
    proxy: {
      "/api": {
        target: "http://host.docker.internal:10080",
      },
    },
  },
  configureWebpack: {
    devServer: {
      watchOptions: {
        poll: true
      }
    }
  }
};
