const { dialog } = require('electron')

exports.minimize = function() {
	global.MAIN_WINDOW.minimize()
}

exports.maximize = () => {
	global.MAIN_WINDOW.maximize()
}

exports.unmaximize = () => {
	global.MAIN_WINDOW.unmaximize()
}

exports.close = () => {
  let ret = dialog.showMessageBoxSync({
		type: 'none',
		message: '请问是否关闭o-terminal?',
    buttons: ['是', '否'],
	})
  console.log(ret)
}
