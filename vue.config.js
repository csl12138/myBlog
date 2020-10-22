const path = require("path");

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "cmp": "@/components",
                "styles": "@/assets/styles",
                "views": "@/views"
            }
        },
        devtool: "source-map"
    },
    pluginOptions: {
        'style-resources-loader': {
          preProcessor: 'scss',
          patterns: [
              path.resolve(__dirname, "src/assets/styles/common/*.scss")
          ]
        }
    }
}
