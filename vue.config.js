module.exports = {
  configureWebpack: {
    // other webpack options to merge in ...
  },
  // devServer option don't belong into `configureWebpack`
  devServer: {
    port: 8080,
    public: '0.0.0.0:8080',
    disableHostCheck: true
  }
};