'use strict'

const path = require('path')
const dayjs = require('dayjs')
const storage = require('./lib/storage')

const config = {
	developmentMode: {
		default: 'vue',
		mode: {
			vue: {
				hostname: 'localhost',
				port: 8080,
			},
			react: {
				hostname: 'localhost',
				port: 3000,
			},
			ejs: {
				hostname: 'localhost',
				port: 7068, // The same as the egg port
			},
		},
	},
	log: {
		file: {
			fileName: path.normalize(storage.getStorageDir() + 'logs/electron-' + dayjs().format('YYYY-MM-DD') + '.log'),
			level: 'silly', // error, warn, info, verbose, debug, silly
			format: '[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}] {text}',
			maxSize: '1048576', // 1048576 (1mb) by default.
		},
	},
	windowsOption: {
		height: 800,
		width: 1250,
		minHeight: 800,
		minWidth: 1250,
		useContentSize: false,
		// frame: true, CTRL+SHIFT+I
		frame: false,
		hasShadow: true,
		transparent: true,
		webPreferences: {
			//webSecurity: false,
			contextIsolation: false, // 设置此项为false后，才可在渲染进程中使用electron api
			nodeIntegration: true,
			preload: path.join(__dirname, '../preload.js'),
		},
    icon: path.join(__dirname, './assets/img/logo.png')
		// titleBarStyle: 'hidden'
	},
	egg: {
		title: 'o-terminal', // 进程的title属性标识（默认你的应用名称-英文）
		env: 'prod',
		port: 7068,
		hostname: 'localhost',
		workers: 1,
	},
	autoUpdate: {
		windows: false, // windows可以开启；macOs 需要签名验证
		macOS: false,
		linux: false,
		options: {
			provider: 'generic', // or github, s3, bintray
			url: 'http://kodo.qiniu.com/', // resource dir, end with '/'
		},
	},
	awakeProtocol: {
		protocol: 'o-terminal', // 自定义协议名（默认你的应用名称-英文）
		args: [],
	},
	crashReport: {
		submitURL: '',
		productName: '',
		rateLimit: false,
		uploadToServer: false,
		ignoreSystemCrashHandler: true,
		compress: false,
	},
	remoteUrl: {
		enable: false,
		url: 'https://www.github.com/', // Any web url
	},
	tray: {
		title: 'o-terminal', // 托盘显示标题
		icon: '/asset/images/tray_logo.png', // 托盘图标
	},
}

exports.get = function(flag = '', env = 'prod') {
	if (flag === 'egg') {
		const eggConfig = storage.getEggConfig()
		if (env === 'prod' && eggConfig.port) {
			config.egg.port = eggConfig.port
		}
		return config.egg
	}

	if (flag in config) {
		return config[flag]
	}

	return {}
}

exports = module.exports
