const path = require("path");

function resolve(dir) {
    return path.join(__dirname, "../View", dir);
}

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: ["babel-polyfill", "../View/app.js"],
    context: path.resolve(__dirname),
    output: {
        devtoolLineToLine: false,
        filename: "app/app.js",
        chunkFilename: "app/[name].app.js",
        path: path.resolve(__dirname, "../public"),
        publicPath: "/",
    },
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            vue$: "vue/dist/vue.runtime.min.js",
            "@": resolve("/"),
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader",
                // include: [resolve("js")],
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: ["@babel/plugin-syntax-dynamic-import"],
                    },
                },
                exclude: /(node_modules|View\/js\/utils\/jssip\.js)/,
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        // Requires sass-loader@^7.0.0
                        options: {
                            implementation: require("sass"),
                            sassOptions: {
                                fiber: require("fibers"),
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"],
            },
        ],
    },
};
