;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-f6d2456a'],
	{
		'0017': function(e, t, a) {
			'use strict'
			a('46e2')
		},
		'46e2': function(e, t, a) {},
		6865: function(e, t, a) {
			'use strict'
			a.r(t)
			var o = function() {
					var e = this,
						t = e.$createElement,
						a = e._self._c || t
					return a('div', { attrs: { id: 'app-demo-shortcut' } }, [
						e._m(0),
						a(
							'div',
							{ staticClass: 'one-block-2' },
							[
								a(
									'a-row',
									{ attrs: { gutter: [16, 16] } },
									[
										a(
											'a-col',
											{ attrs: { span: 24 } },
											[
												e._v(' 【窗口最小化】 '),
												a(
													'a-form',
													{ attrs: { form: e.form }, on: { submit: e.handleSubmit } },
													[
														a(
															'a-form-item',
															[
																a('hot-key-input', {
																	staticStyle: { width: '100%' },
																	attrs: { hotkey: e.hotKeyObj.keys, verify: e.handleHotkeyVerify, max: 1, type: 'lowser', reset: !0, shake: !1, range: null, placeholder: '快捷键' },
																	on: {
																		'update:hotkey': function(t) {
																			return e.$set(e.hotKeyObj, 'keys', t)
																		},
																	},
																}),
															],
															1,
														),
														a('a-form-item', { staticStyle: { 'text-align': 'center' }, attrs: { wrapperCol: { span: 24 } } }, [a('a-button', { attrs: { htmlType: 'submit', type: 'primary' } }, [e._v('保存')])], 1),
													],
													1,
												),
											],
											1,
										),
									],
									1,
								),
							],
							1,
						),
					])
				},
				n = [
					function() {
						var e = this,
							t = e.$createElement,
							a = e._self._c || t
						return a('div', { staticClass: 'one-block-1' }, [a('span', [e._v(' 1. 快捷键 ')])])
					},
				],
				i = (a('d3b7'), a('ddb0'), a('a358')),
				r = {
					components: {},
					data: function() {
						return { form: this.$form.createForm(this), cmd: '', hotKeyObj: { tab: 'save', keys: ['Ctrl+k'] } }
					},
					methods: {
						handleHotkeyVerify: function(e) {
							return console.log('组合键：', e), !0
						},
						handleSubmit: function(e) {
							var t = this
							e.preventDefault(), console.log('submit 验证：', this.hotKeyObj)
							var a = this.hotKeyObj.keys[0],
								o = { id: 'mini_window', name: '窗口最小化', cmd: a }
							Object(i['a'])('setShortcut', o)
								.then(function(e) {
									if (0 !== e.code) return !1
									t.$message.info('设置成功，请按【设置的快捷键】查看效果')
								})
								.catch(function(e) {
									console.log('err:', e)
								}),
								this.form.validateFields(function(e, t) {
									e || console.log('Received values of form: ', t)
								})
						},
					},
				},
				s = r,
				l = (a('0017'), a('2877')),
				c = Object(l['a'])(s, o, n, !1, null, 'd8968e5a', null)
			t['default'] = c.exports
		},
		a358: function(e, t, a) {
			'use strict'
			a.d(t, 'a', function() {
				return i
			})
			var o = a('b775'),
				n = {
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
			function i(e, t) {
				return Object(o['b'])({ url: n[e], method: 'post', data: t })
			}
		},
	},
])
//# sourceMappingURL=chunk-f6d2456a.daa7989b.js.map
