;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-21264600'],
	{
		'46a8': function(t, e, n) {
			'use strict'
			n.r(e)
			var c = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e
					return n('div', { attrs: { id: 'app-demo-window' } }, [
						t._m(0),
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
													click: function(e) {
														return t.createWindow(0)
													},
												},
											},
											[t._v('打开哔哩哔哩')],
										),
									],
									1,
								),
							],
							1,
						),
						t._m(1),
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
													click: function(e) {
														return t.createWindow(1)
													},
												},
											},
											[t._v('打开html页面')],
										),
									],
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
							e = t.$createElement,
							n = t._self._c || e
						return n('div', { staticClass: 'one-block-1' }, [n('span', [t._v(' 1. 新窗口中加载web内容 ')])])
					},
					function() {
						var t = this,
							e = t.$createElement,
							n = t._self._c || e
						return n('div', { staticClass: 'one-block-1' }, [n('span', [t._v(' 2. 新窗口中加载html内容 ')])])
					},
				],
				a = {
					data: function() {
						return {
							views: [
								{ type: 'web', content: 'https://www.bilibili.com/' },
								{ type: 'html', content: '/asset/view_example.html' },
							],
						}
					},
					methods: {
						createWindow: function(t) {
							var e = this
							e.$ipcCallMain('example.createWindow', this.views[t]).then(function(t) {
								console.log(t)
							})
						},
					},
				},
				o = a,
				s = (n('4bff'), n('2877')),
				l = Object(s['a'])(o, c, i, !1, null, '141ac89c', null)
			e['default'] = l.exports
		},
		'4af7': function(t, e, n) {},
		'4bff': function(t, e, n) {
			'use strict'
			n('4af7')
		},
	},
])
//# sourceMappingURL=chunk-21264600.12d6c454.js.map
