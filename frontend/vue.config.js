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

		const oneOfsMap = config.module.rule('scss').oneOfs.store
		oneOfsMap.forEach((item) => {
			item
				.use('sass-resources-loader')
				.loader('sass-resources-loader')
				.options({
					// 全局变量资源路径
					resources: './src/styles/index.scss',
				})
				.end()
		})
	},
}
