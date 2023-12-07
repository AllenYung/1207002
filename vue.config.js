const { defineConfig } = require('vite')

module.exports = defineConfig({
  // 其他設定...
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/1207mywedside/' : '/',
  }