var webpack = require('webpack');
var path = require('path');

module.exports = {
	 devtool: "inline-source-map",
	 //页面入口文件配置
 	 entry: [
	  	 "webpack-dev-server/client?http://127.0.0.1:8080/",
	  	 "webpack/hot/only-dev-server",
	  	 "./app"
	  ],
	  //入口文件输出配置
	  output: {
		  path: path.join(__dirname, "public"),
		  filename: "bundle.js"
	 },
	 resolve: {
		  modulesDirectories: ["node_modules", "app"],
		  extensions: ["", ".js"]
	 },
	 module: {
	  //加载器配置
	  loaders: [
		   {
			    test: /\.jsx?$/,
			    exclude: /node_modules/,
			    loaders: ["react-hot", "babel?presets[]=react,presets[]=es2015"]
		   },
		   {
			    test: /\.css?$/,
			    exclude: /node_modules/,
			    loaders: ["style", "css"]
		   }
	 	 ]
	 },
	 //插件项
	 plugins: [
		  new webpack.HotModuleReplacementPlugin(),
		  new webpack.NoErrorsPlugin()
	 ]

}