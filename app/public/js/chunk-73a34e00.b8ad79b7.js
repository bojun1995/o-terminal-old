;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-73a34e00'],
	{
		'9e2e': function(e, a, t) {
			'use strict'
			t('e4d0')
		},
		a358: function(e, a, t) {
			'use strict'
			t.d(a, 'a', function() {
				return o
			})
			var n = t('b775'),
				i = {
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
			function o(e, a) {
				return Object(n['b'])({ url: i[e], method: 'post', data: a })
			}
		},
		b11e: function(e, a, t) {
			'use strict'
			t.r(a)
			var n = function() {
					var e = this,
						a = e.$createElement,
						t = e._self._c || a
					return t('div', { attrs: { id: 'app-demo-test-api' } }, [
						e._m(0),
						t(
							'div',
							{ staticClass: 'one-block-2' },
							[
								t(
									'a-button',
									{
										on: {
											click: function(a) {
												return e.exec(1)
											},
										},
									},
									[e._v(' 点击 ')],
								),
							],
							1,
						),
					])
				},
				i = [
					function() {
						var e = this,
							a = e.$createElement,
							t = e._self._c || a
						return t('div', { staticClass: 'one-block-1' }, [t('span', [e._v(' 1. 测试一些操作系统api ')])])
					},
				],
				o = t('a358'),
				c = {
					data: function() {
						return { type: 1 }
					},
					methods: {
						exec: function(e) {
							var a = { id: e }
							Object(o['a'])('testElectronApi', a)
								.then(function(e) {
									if (0 !== e.code) return !1
								})
								.catch(function(e) {
									console.log('err:', e)
								})
						},
					},
				},
				p = c,
				l = (t('9e2e'), t('2877')),
				u = Object(l['a'])(p, n, i, !1, null, '3e0a3322', null)
			a['default'] = u.exports
		},
		e4d0: function(e, a, t) {},
	},
])
//# sourceMappingURL=chunk-73a34e00.b8ad79b7.js.map
