;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-0077e808'],
	{
		'5d55': function(e, t, n) {
			'use strict'
			n('b47c')
		},
		'9bad': function(e, t, n) {
			'use strict'
			n.r(t)
			var a = function() {
					var e = this,
						t = e.$createElement,
						n = e._self._c || t
					return n('div', { attrs: { id: 'app-demo-socket-ipc' } }, [
						e._m(0),
						n(
							'div',
							{ staticClass: 'one-block-2' },
							[
								n(
									'a-list',
									{ attrs: { bordered: '' } },
									[
										n(
											'a-input-search',
											{
												on: { search: e.helloHandle },
												model: {
													value: e.content,
													callback: function(t) {
														e.content = t
													},
													expression: 'content',
												},
											},
											[n('a-button', { attrs: { slot: 'enterButton' }, slot: 'enterButton' }, [e._v(' send ')])],
											1,
										),
									],
									1,
								),
							],
							1,
						),
						e._m(1),
						n(
							'div',
							{ staticClass: 'one-block-2' },
							[
								n(
									'a-list',
									{ attrs: { bordered: '' } },
									[
										n(
											'a-input-search',
											{
												on: { search: e.executeJSHandle },
												model: {
													value: e.content2,
													callback: function(t) {
														e.content2 = t
													},
													expression: 'content2',
												},
											},
											[n('a-button', { attrs: { slot: 'enterButton' }, slot: 'enterButton' }, [e._v(' send ')])],
											1,
										),
									],
									1,
								),
							],
							1,
						),
						e._m(2),
						n('div', { staticClass: 'one-block-2' }, [n('a-space', [n('a-button', { on: { click: e.socketMsgStart } }, [e._v('开始')]), n('a-button', { on: { click: e.socketMsgStop } }, [e._v('结束')]), e._v(' 结果：' + e._s(e.socketMessageString) + ' ')], 1)], 1),
					])
				},
				o = [
					function() {
						var e = this,
							t = e.$createElement,
							n = e._self._c || t
						return n('div', { staticClass: 'one-block-1' }, [n('span', [e._v(' 1. 渲染进程与主进程IPC通信 ')])])
					},
					function() {
						var e = this,
							t = e.$createElement,
							n = e._self._c || t
						return n('div', { staticClass: 'one-block-1' }, [n('span', [e._v(' 2. 主进程API执行网页函数 ')])])
					},
					function() {
						var e = this,
							t = e.$createElement,
							n = e._self._c || t
						return n('div', { staticClass: 'one-block-1' }, [n('span', [e._v(' 3. 长消息： 服务端持续向前端页面发消息 ')])])
					},
				],
				s = n('a358'),
				c = {
					data: function() {
						return { content: 'hello', content2: 'hello world', reply: '', socketMessageString: '' }
					},
					mounted: function() {
						this.init()
					},
					methods: {
						init: function() {
							var e = this
							e.$ipc.on('example.socketMessageStart', function(t, n) {
								console.log('[ipcRenderer] [socketMsgStart] result:', n), (e.socketMessageString = n)
							}),
								e.$ipc.on('example.socketMessageStop', function(t, n) {
									console.log('[ipcRenderer] [socketMsgStop] result:', n), (e.socketMessageString = n)
								})
						},
						helloHandle: function(e) {
							var t = this
							this.$ipcCallMain('example.hello', e).then(function(e) {
								t.$message.info(e)
							})
						},
						executeJSHandle: function(e) {
							Object(s['a'])('executeJS', { str: e })
								.then(function(e) {
									0 == e.code && console.log(e.data)
								})
								.catch(function(e) {
									console.log('err:', e)
								})
						},
						socketMsgStart: function() {
							this.$ipc.send('example.socketMessageStart', '时间')
						},
						socketMsgStop: function() {
							this.$ipc.send('example.socketMessageStop', '')
						},
					},
				},
				i = c,
				l = (n('5d55'), n('2877')),
				r = Object(l['a'])(i, a, o, !1, null, '27c4a622', null)
			t['default'] = r.exports
		},
		a358: function(e, t, n) {
			'use strict'
			n.d(t, 'a', function() {
				return s
			})
			var a = n('b775'),
				o = {
					openDir: '/api/v1/example/openLocalDir',
					uploadFile: '/api/v1/example/uploadFile',
					executeJS: '/api/v1/example/executeJS',
					setShortcut: '/api/v1/example/setShortcut',
					autoLaunchEnable: '/api/v1/example/autoLaunchEnable',
					autoLaunchDisable: '/api/v1/example/autoLaunchDisable',
					autoLaunchIsEnabled: '/api/v1/example/autoLaunchIsEnabled',
					openSoftware: '/api/v1/example/openSoftware',
					selectFileDir: '/api/v1/example/selectFileDir',
					messageShow: '/api/v1/example/messageShow',
					messageShowConfirm: '/api/v1/example/messageShowConfirm',
					dbOperation: '/api/v1/example/dbOperation',
					testElectronApi: '/api/v1/example/testElectronApi',
				}
			function s(e, t) {
				return Object(a['b'])({ url: o[e], method: 'post', data: t })
			}
		},
		b47c: function(e, t, n) {},
	},
])
//# sourceMappingURL=chunk-0077e808.45699d1f.js.map
