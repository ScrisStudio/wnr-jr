const path = require('path')
module.exports = {
    publicPath: './',
    outputDir: 'docs',
    productionSourceMap: false,
    configureWebpack: (config) => {
        node: {
            __filename: true
            __dirname: true
        }
    }
}