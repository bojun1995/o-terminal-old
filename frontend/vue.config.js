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
			sass: {
				additionalData: `@import "./src/styles/index.scss";`,
			},
		},
	},
}
