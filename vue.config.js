module.exports = {
  pages: {
    develop: {
      // page 的入口
      entry: 'src/pages/develop/main.js',
      // 模板来源
      template: 'public/html/develop.html',
      // 在 dist/index.html 的输出
      filename: 'develop.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '开发',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'develop']
    },
    preview: {
      // page 的入口
      entry: 'src/pages/preview/main.js',
      // 模板来源
      template: 'public/html/preview.html',
      // 在 dist/index.html 的输出
      filename: 'preview.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '预览',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'preview']
    }
  },
  devServer: {
    index: 'develop.html'
  }
}
