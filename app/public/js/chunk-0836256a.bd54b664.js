;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-0836256a'],
	{
		'6f98': function(t, n, i) {},
		ded8: function(t, n, i) {
			'use strict'
			i('6f98')
		},
		f35a: function(t, n, i) {
			'use strict'
			i.r(n)
			var e = function() {
					var t = this,
						n = t.$createElement,
						i = t._self._c || n
					return i('div', { attrs: { id: 'app-demo-notification' } }, [
						t._m(0),
						i(
							'div',
							{ staticClass: 'one-block-2' },
							[
								i(
									'a-space',
									[
										i(
											'a-button',
											{
												on: {
													click: function(n) {
														return t.sendNotification(0)
													},
												},
											},
											[t._v('默认')],
										),
										i(
											'a-button',
											{
												on: {
													click: function(n) {
														return t.sendNotification(1)
													},
												},
											},
											[t._v('发出提示音')],
										),
										i(
											'a-button',
											{
												on: {
													click: function(n) {
														return t.sendNotification(2)
													},
												},
											},
											[t._v('点击通知触发事件')],
										),
										i(
											'a-button',
											{
												on: {
													click: function(n) {
														return t.sendNotification(3)
													},
												},
											},
											[t._v('关闭通知触发事件')],
										),
									],
									1,
								),
							],
							1,
						),
					])
				},
				o = [
					function() {
						var t = this,
							n = t.$createElement,
							i = t._self._c || n
						return i('div', { staticClass: 'one-block-1' }, [i('span', [t._v(' 1. 弹出桌面通知 ')])])
					},
				],
				c =
					(i('d3b7'),
					{
						data: function() {
							return {
								views: [
									{ type: 'main', title: '通知标题', subtitle: '副标题', body: '这是通知内容-默认', silent: !0, icon: '/asset/images/tray_logo.png' },
									{ type: 'main', title: '提示音', subtitle: '副标题-提示音', body: '这是通知内容-提示音', silent: !1 },
									{ type: 'main', title: '点击通知事件', subtitle: '副标题-点击通知事件', body: '这是通知内容-点击通知事件', clickEvent: !0 },
									{ type: 'main', title: '关闭通知事件', subtitle: '副标题-关闭通知事件', body: '这是通知内容-点击通知事件', closeEvent: !0 },
								],
							}
						},
						mounted: function() {
							this.init()
						},
						methods: {
							init: function() {
								var t = this
								t.$ipc.on('example.sendNotification', function(n, i) {
									'[object Object]' == Object.prototype.toString.call(i) && t.$message.info(i.msg)
								})
							},
							sendNotification: function(t) {
								this.$ipc.send('example.sendNotification', this.views[t])
							},
						},
					}),
				s = c,
				a = (i('ded8'), i('2877')),
				u = Object(a['a'])(s, e, o, !1, null, '7aef99b8', null)
			n['default'] = u.exports
		},
	},
])
//# sourceMappingURL=chunk-0836256a.bd54b664.js.map
