const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages:{
    index: {
      entry: 'src/main.js',
      title: process.env.VUE_APP_TITLE,
    }
  },
  transpileDependencies: true,
  lintOnSave: false,
  // publicPath: process.env.NODE_ENV === 'production'? '/360Techx/' : '/'
})
