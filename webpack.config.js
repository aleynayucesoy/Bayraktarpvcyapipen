const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPresetEnv = require('postcss-preset-env');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const HandlebarsPlugin = require("handlebars-webpack-plugin");

module.exports = {    
    entry: ['./src/js/app.js', './src/sass/app.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            url: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                        // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            } 
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/bundle.css'
        }),
        new CopyWebpackPlugin({
        patterns: [
                { from: "./src/img", to: "img" },
                { from: "./src/fonts", to: "fonts" },
            ],
        }), 
        new HandlebarsPlugin({
            entry: path.join(process.cwd(), "src", "pages", "*.hbs"),
            output: path.join(process.cwd(), "dist", "[name].html"),
            data: path.join(__dirname, "src/data/db.json"),
            partials: [
                path.join(process.cwd(), "src", "partials", "*.hbs")
            ],
        })
    ]
};