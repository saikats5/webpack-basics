module.exports = {
	entry: ["./utils","./app.js"],
	output: {
		filename: "bundle.js"
	},
	watch: true,
	module: {
			rules: [
				{
					enforce: 'pre',
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'jshint-loader'
				},
				{
					test: /\.(es6|js|jsx)$/,
					use: [
							{
			            		loader: 'babel-loader',
			           			options: {
			              		presets: ['es2015'],
			            	},
			          	},
			        ]
				}
			]
	
/*		loaders: [
			{
				test:  /\.(es6|js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: ['es2015']
				}
			}
		]*/
	},
	resolve: {
		extensions: [' ', '.js', '.es6']
	}
}