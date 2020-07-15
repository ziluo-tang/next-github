const withLessExcludeAntd = require('./next-less.config.js')
const path = require('path')

if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

module.exports = withLessExcludeAntd({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: {
      dark: true, // 开启暗色主题
      compact: true,
    },
  },
})
