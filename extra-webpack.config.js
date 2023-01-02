const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  // Importações de modulos compartilhados
  config.externals = ["@gfa/gfa-infra"];

  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
