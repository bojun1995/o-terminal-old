;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-c3a37878'],
	{
		1786: function(e, a, t) {},
		'4d78': function(e, a, t) {
			'use strict'
			t('1786')
		},
		a358: function(e, a, t) {
			'use strict'
			t.d(a, 'a', function() {
				return o
			})
			var n = t('b775'),
				c = {
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
				return Object(n['b'])({ url: c[e], method: 'post', data: a })
			}
		},
		cfe2: function(e, a, t) {
			'use strict'
			t.r(a)
			var n = function() {
					var e = this,
						a = e.$createElement,
						t = e._self._c || a
					return t('div', { attrs: { id: 'app-demo-system-launch' } }, [
						t(
							'div',
							{ staticClass: 'one-block-2' },
							[
								t(
									'a-list',
									{ staticClass: 'set-auto', attrs: { itemLayout: 'horizontal' } },
									[
										t(
											'a-list-item',
											{
												staticStyle: { 'text-align': 'left' },
												scopedSlots: e._u([
													{
														key: 'actions',
														fn: function() {
															return [
																t('a-switch', {
																	attrs: { checkedChildren: '开', unCheckedChildren: '关' },
																	on: {
																		change: function(a) {
																			return e.autoLaunchChange(e.autoLaunchChecked)
																		},
																	},
																	model: {
																		value: e.autoLaunchChecked,
																		callback: function(a) {
																			e.autoLaunchChecked = a
																		},
																		expression: 'autoLaunchChecked',
																	},
																}),
															]
														},
														proxy: !0,
													},
												]),
											},
											[
												t('a-list-item-meta', {
													scopedSlots: e._u([
														{
															key: 'title',
															fn: function() {
																return [t('a', [e._v('启动')])]
															},
															proxy: !0,
														},
														{
															key: 'description',
															fn: function() {
																return [t('span', [e._v(' 开机自动启动 ')])]
															},
															proxy: !0,
														},
													]),
												}),
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
				c = [],
				o = t('a358'),
				u = {
					data: function() {
						return { autoLaunchChecked: !1 }
					},
					mounted: function() {
						this.autoLaunchInit()
					},
					methods: {
						autoLaunchInit: function() {
							var e = this
							Object(o['a'])('autoLaunchIsEnabled', {})
								.then(function(a) {
									if (0 !== a.code) return !1
									e.autoLaunchChecked = a.data.isEnabled
								})
								.catch(function(e) {
									console.log('err:', e)
								})
						},
						autoLaunchChange: function(e) {
							var a = this,
								t = { checkStatus: e }
							e
								? Object(o['a'])('autoLaunchEnable', t)
										.then(function(e) {
											if (0 !== e.code) return !1
											a.autoLaunchChecked = e.data.isEnabled
										})
										.catch(function(e) {
											console.log('err:', e)
										})
								: Object(o['a'])('autoLaunchDisable', t)
										.then(function(e) {
											if (0 !== e.code) return !1
											a.autoLaunchChecked = e.data.isEnabled
										})
										.catch(function(e) {
											console.log('err:', e)
										})
						},
					},
				},
				i = u,
				l = (t('4d78'), t('2877')),
				s = Object(l['a'])(i, n, c, !1, null, '3659912d', null)
			a['default'] = s.exports
		},
	},
])
//# sourceMappingURL=chunk-c3a37878.42d55cc1.js.map
