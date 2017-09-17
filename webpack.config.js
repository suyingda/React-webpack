const path = require('path');

module.exports = {
    entry: "./app/main.js",
    output: {
        path: path.resolve(__dirname, "dist"), // string
        filename: "all.js", // string
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015','react']
                    }
                }
            },
            {
                test:/\.less$/,
                 use:[{
                     loader:"style-loader" 
                 },{
                     loader:"css-loader"
                 },{
                     loader:"less-loader"
                 }]
            }
        ]
        
    },
   /*  alias: {
        'react/lib/ReactMount': 'react-dom/lib/ReactMount'
    }, */
    watch:true
}