;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-076bae15'],
	{
		1249: function(a, e, t) {
			'use strict'
			t.r(e)
			var n = function() {
					var a = this,
						e = a.$createElement,
						t = a._self._c || e
					return t('div', { attrs: { id: 'app-demo-db' } }, [
						a._m(0),
						t('div', { staticClass: 'one-block-2' }, [t('a-row', [t('a-col', { attrs: { span: 8 } }, [a._v(' • LowDB本地JSON数据库 ')]), t('a-col', { attrs: { span: 8 } }, [a._v(' • 可使用lodash语法 ')]), t('a-col', { attrs: { span: 8 } }, [a._v(' • 数据文件db.json在日志同级目录 ')])], 1)], 1),
						a._m(1),
						t('div', { staticClass: 'one-block-2' }, [t('a-row', [t('a-col', { attrs: { span: 24 } }, [a._v(' ' + a._s(a.all_list) + ' ')])], 1)], 1),
						a._m(2),
						t(
							'div',
							{ staticClass: 'one-block-2' },
							[
								t(
									'a-row',
									[
										t(
											'a-col',
											{ attrs: { span: 6 } },
											[
												t('a-input', {
													attrs: { value: a.name, 'addon-before': '姓名' },
													model: {
														value: a.name,
														callback: function(e) {
															a.name = e
														},
														expression: 'name',
													},
												}),
											],
											1,
										),
										t('a-col', { attrs: { span: 3 } }),
										t(
											'a-col',
											{ attrs: { span: 6 } },
											[
												t('a-input', {
													attrs: { value: a.age, 'addon-before': '年龄' },
													model: {
														value: a.age,
														callback: function(e) {
															a.age = e
														},
														expression: 'age',
													},
												}),
											],
											1,
										),
										t('a-col', { attrs: { span: 3 } }),
										t(
											'a-col',
											{ attrs: { span: 6 } },
											[
												t(
													'a-button',
													{
														on: {
															click: function(e) {
																return a.dbOperation('add')
															},
														},
													},
													[a._v(' 添加 ')],
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
						a._m(3),
						t(
							'div',
							{ staticClass: 'one-block-2' },
							[
								t(
									'a-row',
									[
										t(
											'a-col',
											{ attrs: { span: 6 } },
											[
												t('a-input', {
													attrs: { value: a.search_age, 'addon-before': '年龄' },
													model: {
														value: a.search_age,
														callback: function(e) {
															a.search_age = e
														},
														expression: 'search_age',
													},
												}),
											],
											1,
										),
										t('a-col', { attrs: { span: 3 } }),
										t('a-col', { attrs: { span: 6 } }),
										t('a-col', { attrs: { span: 3 } }),
										t(
											'a-col',
											{ attrs: { span: 6 } },
											[
												t(
													'a-button',
													{
														on: {
															click: function(e) {
																return a.dbOperation('get')
															},
														},
													},
													[a._v(' 查找 ')],
												),
											],
											1,
										),
									],
									1,
								),
								t('a-row', [t('a-col', { attrs: { span: 24 } }, [a._v(' ' + a._s(a.userList) + ' ')])], 1),
							],
							1,
						),
						a._m(4),
						t(
							'div',
							{ staticClass: 'one-block-2' },
							[
								t(
									'a-row',
									[
										t(
											'a-col',
											{ attrs: { span: 6 } },
											[
												t('a-input', {
													attrs: { value: a.update_name, 'addon-before': '姓名' },
													model: {
														value: a.update_name,
														callback: function(e) {
															a.update_name = e
														},
														expression: 'update_name',
													},
												}),
											],
											1,
										),
										t('a-col', { attrs: { span: 3 } }),
										t(
											'a-col',
											{ attrs: { span: 6 } },
											[
												t('a-input', {
													attrs: { value: a.update_age, 'addon-before': '年龄' },
													model: {
														value: a.update_age,
														callback: function(e) {
															a.update_age = e
														},
														expression: 'update_age',
													},
												}),
											],
											1,
										),
										t('a-col', { attrs: { span: 3 } }),
										t(
											'a-col',
											{ attrs: { span: 6 } },
											[
												t(
													'a-button',
													{
														on: {
															click: function(e) {
																return a.dbOperation('update')
															},
														},
													},
													[a._v(' 更新 ')],
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
						a._m(5),
						t(
							'div',
							{ staticClass: 'one-block-2' },
							[
								t(
									'a-row',
									[
										t(
											'a-col',
											{ attrs: { span: 6 } },
											[
												t('a-input', {
													attrs: { value: a.delete_name, 'addon-before': '姓名' },
													model: {
														value: a.delete_name,
														callback: function(e) {
															a.delete_name = e
														},
														expression: 'delete_name',
													},
												}),
											],
											1,
										),
										t('a-col', { attrs: { span: 3 } }),
										t('a-col', { attrs: { span: 6 } }),
										t('a-col', { attrs: { span: 3 } }),
										t(
											'a-col',
											{ attrs: { span: 6 } },
											[
												t(
													'a-button',
													{
														on: {
															click: function(e) {
																return a.dbOperation('del')
															},
														},
													},
													[a._v(' 删除 ')],
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
				s = [
					function() {
						var a = this,
							e = a.$createElement,
							t = a._self._c || e
						return t('div', { staticClass: 'one-block-1' }, [t('span', [a._v(' 1. 本地数据库 ')])])
					},
					function() {
						var a = this,
							e = a.$createElement,
							t = a._self._c || e
						return t('div', { staticClass: 'one-block-1' }, [t('span', [a._v(' 2. 测试数据 ')])])
					},
					function() {
						var a = this,
							e = a.$createElement,
							t = a._self._c || e
						return t('div', { staticClass: 'one-block-1' }, [t('span', [a._v(' 3. 添加数据 ')])])
					},
					function() {
						var a = this,
							e = a.$createElement,
							t = a._self._c || e
						return t('div', { staticClass: 'one-block-1' }, [t('span', [a._v(' 4. 获取数据 ')])])
					},
					function() {
						var a = this,
							e = a.$createElement,
							t = a._self._c || e
						return t('div', { staticClass: 'one-block-1' }, [t('span', [a._v(' 5. 修改数据 ')])])
					},
					function() {
						var a = this,
							e = a.$createElement,
							t = a._self._c || e
						return t('div', { staticClass: 'one-block-1' }, [t('span', [a._v(' 6. 删除数据 ')])])
					},
				],
				l = (t('b0c0'), t('a358')),
				o = {
					data: function() {
						return { name: '张三', age: 10, userList: ['空'], search_age: 10, update_name: '张三', update_age: 21, delete_name: '张三', all_list: ['空'] }
					},
					mounted: function() {
						this.getAllTestData()
					},
					methods: {
						getAllTestData: function() {
							var a = this,
								e = { action: 'all' }
							Object(l['a'])('dbOperation', e)
								.then(function(e) {
									return 0 === e.code && 0 != e.data.all_list.length && void (a.all_list = e.data.all_list)
								})
								.catch(function(a) {
									console.log('err:', a)
								})
						},
						dbOperation: function(a) {
							var e = this,
								t = { action: a, info: { name: this.name, age: parseInt(this.age) }, search_age: parseInt(this.search_age), update_name: this.update_name, update_age: parseInt(this.update_age), delete_name: this.delete_name }
							'add' == a && 0 == this.name.length && e.$message.error('请填写数据'),
								Object(l['a'])('dbOperation', t)
									.then(function(t) {
										if (0 !== t.code) return !1
										if ('get' == a) {
											if (0 == t.data.result.length) return void e.$message.error('没有数据')
											e.userList = t.data.result
										}
										0 != t.data.all_list.length && ((e.all_list = t.data.all_list), e.$message.success('success'))
									})
									.catch(function(a) {
										console.log('err:', a)
									})
						},
					},
				},
				c = o,
				r = (t('2e65'), t('2877')),
				i = Object(r['a'])(c, n, s, !1, null, 'a5be7ac0', null)
			e['default'] = i.exports
		},
		'2e65': function(a, e, t) {
			'use strict'
			t('eeff')
		},
		a358: function(a, e, t) {
			'use strict'
			t.d(e, 'a', function() {
				return l
			})
			var n = t('b775'),
				s = {
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
			function l(a, e) {
				return Object(n['b'])({ url: s[a], method: 'post', data: e })
			}
		},
		eeff: function(a, e, t) {},
	},
])
//# sourceMappingURL=chunk-076bae15.3f7e16cd.js.map
