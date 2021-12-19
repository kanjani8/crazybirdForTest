const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    entry: {
        main: "./src/client/js/main.js",
        videoPlayer: "./src/client/js/videoPlayer.js",
        chooseQuestionType: "./src/client/js/chooseQuestionType.js",
        chooseTestType: "./src/client/js/chooseTestType.js",
        checkPW: "./src/client/js/checkPW.js",
        showMap: "./src/client/js/showMap.js",
        showCalendar: "./src/client/js/showCalendar.js"
      },
    mode: "development", // developnemt or production(개발완료/default)
    watch: true,
    plugins: [new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
    ],
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "assets"),
        library: "common",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [["@babel/preset-env", { targets: "defaults"}]],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.css$/,
                use: [
                  { loader: MiniCssExtractPlugin.loader },
                  { loader: 'css-loader', options: { importLoaders: 1 } }
                ]
              }
        ],
    },
};