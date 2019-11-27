const fs = require('fs')
const path = require('path')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
    // baseUrl: '/app',
    outputDir: 'dist',
    assetsDir: 'static',
    transpileDependencies: [
        /* string or regex */
    ],
    productionSourceMap: false,
    parallel: require('os').cpus().length > 1,
    pwa: {},

    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/idata/*': {
                target: 'http://bigdata-t.duiopen.com',
                changeOrigin: true
            },
            '/rest/*': {
                target: 'http://bigdata-t.duiopen.com',
                changeOrigin: true
            }
        },
        before: app => {}
    },

    pluginOptions: {
        // ...
    }
}
