;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-5ebbe05a'],
	{
		1083: function(t, n, e) {
			'use strict'
			e('c20f')
		},
		7595: function(t, n, e) {
			'use strict'
			e.r(n)
			var c = function() {
					var t = this,
						n = t.$createElement,
						e = t._self._c || n
					return e('div', { attrs: { id: 'app-demo-screen' } }, [
						t._m(0),
						e(
							'div',
							{ staticClass: 'one-block-2' },
							[
								e(
									'a-space',
									[
										e(
											'a-button',
											{
												on: {
													click: function(n) {
														return t.getScreen(0)
													},
												},
											},
											[t._v('获取当前鼠标位置')],
										),
										e(
											'a-button',
											{
												on: {
													click: function(n) {
														return t.getScreen(1)
													},
												},
											},
											[t._v('获取主屏幕')],
										),
										e(
											'a-button',
											{
												on: {
													click: function(n) {
														return t.getScreen(2)
													},
												},
											},
											[t._v('获取所有屏幕')],
										),
									],
									1,
								),
							],
							1,
						),
						t._m(1),
						e(
							'div',
							{ staticClass: 'one-block-2' },
							[
								e(
									'a-descriptions',
									{ attrs: { title: '' } },
									t._l(t.data, function(n, c) {
										return e('a-descriptions-item', { key: c, attrs: { label: n.title } }, [t._v(' ' + t._s(n.desc) + ' ')])
									}),
									1,
								),
							],
							1,
						),
					])
				},
				i = [
					function() {
						var t = this,
							n = t.$createElement,
							e = t._self._c || n
						return e('div', { staticClass: 'one-block-1' }, [e('span', [t._v(' 1. 屏幕信息 ')])])
					},
					function() {
						var t = this,
							n = t.$createElement,
							e = t._self._c || n
						return e('div', { staticClass: 'one-block-1' }, [e('span', [t._v(' 结果： ')])])
					},
				],
				a = {
					data: function() {
						return { data: [] }
					},
					mounted: function() {
						this.init()
					},
					methods: {
						init: function() {
							var t = this
							t.$ipc.on('example.getScreen', function(n, e) {
								t.data = e
							})
						},
						getScreen: function(t) {
							this.$ipc.send('example.getScreen', t)
						},
					},
				},
				s = a,
				o = (e('1083'), e('2877')),
				r = Object(o['a'])(s, c, i, !1, null, '46883359', null)
			n['default'] = r.exports
		},
		c20f: function(t, n, e) {},
	},
])
//# sourceMappingURL=chunk-5ebbe05a.560b208a.js.map
