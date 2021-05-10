const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

const pages = {}

const chromeName = ['popup', 'background', 'options', 'content']

chromeName.forEach(name => {
  pages[name] = {
    entry: `src/pages/${name}/main.js`,
    template: 'public/index.html',
    filename: `${name}.html`
  }
})

module.exports = {
  pages,
  configureWebpack: {
    plugins: [CopyWebpackPlugin([{
      from: path.resolve('manifest.json'),
      to: `${path.resolve('dist')}/manifest.json`
    }])]
  }
}
