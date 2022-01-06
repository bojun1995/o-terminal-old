module.exports = {
	runtimeCompiler: true,
	configureWebpack: (config) => {
		config['performance'] = {
			maxEntrypointSize: 10000000,
			maxAssetSize: 30000000,
		}
	},
	chainWebpack: (config) => {
		config.plugin('html').tap((args) => {
			args[0].title = 'o-terminal' // 设置title
			return args
		})
	},
	css: {
		loaderOptions: {
			// sass: {
			// 	additionalData: `@import "./src/styles/index.scss";`,
			// },
		},
	},
}

function resolveResource(name) {
	return path.resolve(__dirname, '../src/assets/sass/' + name)
}

function generateSassResourceLoader() {
	let loaders = [
		cssLoader,
		{
			loader: 'sass-loader',
			options: {
				indentedSyntax: true,
			},
		},
		{
			loader: 'sass-resources-loader',
			options: {
				resources: resolveResource('var.sass'),
			},
		},
	]
	if (options.extract) {
		return ExtractTextPlugin.extract({
			use: loaders,
			fallback: 'vue-style-loader',
		})
	} else {
		return ['vue-style-loader'].concat(loaders)
	}
}
