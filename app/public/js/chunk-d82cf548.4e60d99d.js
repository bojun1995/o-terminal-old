;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-d82cf548'],
	{
		'2b9f': function(e, t, n) {},
		'2bde': function(e, t, n) {
			'use strict'
			n('2b9f')
		},
		9772: function(e, t, n) {
			'use strict'
			n.r(t)
			var s = function() {
					var e = this,
						t = e.$createElement,
						n = e._self._c || t
					return n('div', { attrs: { id: 'app-demo-screen' } }, [
						e._m(0),
						n(
							'div',
							{ staticClass: 'one-block-2' },
							[
								n(
									'a-space',
									[
										n(
											'a-button',
											{
												on: {
													click: function(t) {
														return e.getTheme()
													},
												},
											},
											[e._v('获取模式')],
										),
									],
									1,
								),
								n('span', [e._v(' 结果：' + e._s(e.currentThemeMode) + ' ')]),
							],
							1,
						),
						n('div', { staticClass: 'one-block-1' }, [e._v(' 2. 设置主题模式（请自行实现前端UI效果） ')]),
						n(
							'div',
							{ staticClass: 'one-block-2' },
							[
								n(
									'a-radio-group',
									{
										on: { change: e.setTheme },
										model: {
											value: e.currentThemeMode,
											callback: function(t) {
												e.currentThemeMode = t
											},
											expression: 'currentThemeMode',
										},
									},
									[n('a-radio', { attrs: { value: e.themeList[0] } }, [e._v(' ' + e._s(e.themeList[0]) + ' ')]), n('a-radio', { attrs: { value: e.themeList[1] } }, [e._v(' ' + e._s(e.themeList[1]) + ' ')]), n('a-radio', { attrs: { value: e.themeList[2] } }, [e._v(' ' + e._s(e.themeList[2]) + ' ')])],
									1,
								),
							],
							1,
						),
					])
				},
				o = [
					function() {
						var e = this,
							t = e.$createElement,
							n = e._self._c || t
						return n('div', { staticClass: 'one-block-1' }, [n('span', [e._v(' 1. 系统主题模式 ')])])
					},
				],
				i = {
					data: function() {
						return { currentThemeMode: '', themeList: ['system', 'light', 'dark'] }
					},
					mounted: function() {
						this.init()
					},
					methods: {
						init: function() {
							var e = this
							this.$ipc.on('example.setTheme', function(t, n) {
								console.log('result:', n), (e.currentThemeMode = n)
							}),
								this.$ipc.on('example.getTheme', function(t, n) {
									console.log('result:', n), (e.currentThemeMode = n)
								})
						},
						setTheme: function(e) {
							;(this.currentThemeMode = e.target.value), console.log('setTheme currentThemeMode:', this.currentThemeMode), this.$ipc.send('example.setTheme', this.currentThemeMode)
						},
						getTheme: function() {
							this.$ipc.send('example.getTheme', '')
						},
					},
				},
				c = i,
				r = (n('2bde'), n('2877')),
				a = Object(r['a'])(c, s, o, !1, null, '09fd3530', null)
			t['default'] = a.exports
		},
	},
])
//# sourceMappingURL=chunk-d82cf548.4e60d99d.js.map
