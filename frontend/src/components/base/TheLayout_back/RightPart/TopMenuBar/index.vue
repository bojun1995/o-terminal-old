<template>
	<div class="top-menu-bar">
		<div class="drag-area"></div>
		<div class="btn-group">
			<div class="btn--bg btn--normal btn--minimize" @click="onMinClk">
				<i class="ri-subtract-line"></i>
			</div>
			<div class="btn--bg btn--normal" @click="onMaxClk" v-show="!isMaximized">
				<i class="ri-checkbox-blank-line"></i>
			</div>
			<div class="btn--bg btn--normal" @click="onUnMaxClk" v-show="isMaximized">
				<i class="ri-checkbox-multiple-blank-line"></i>
			</div>
			<div class="btn--bg btn--close" @click="onCloseClk">
				<i class="ri-close-line"></i>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TopMenuBar',
	data() {
		return {
			isMaximized: false,
		}
	},
	computed: {},
	watch: {},
	created() {},
	mounted() {},
	methods: {
		onMinClk() {
			let window = this.$electron.remote.getCurrentWindow()
			window.minimize()
		},
		onMaxClk() {
			let window = this.$electron.remote.getCurrentWindow()
			window.maximize()
			this.isMaximized = true
		},
		onUnMaxClk() {
			let window = this.$electron.remote.getCurrentWindow()
			window.unmaximize()
			this.isMaximized = false
		},
		onCloseClk() {
			let window = this.$electron.remote.getCurrentWindow()
			window.close()
		},
	},
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.top-menu-bar {
	height: 30px;
	display: flex;
	flex-direction: row;
	@include background-color('bg-color-main');
	@include font-color('theme-color-main');
}

.drag-area {
	display: flex;
	flex-grow: 1;
	-webkit-app-region: drag;
}

.btn-group {
	display: flex;
	flex-direction: row;
}

.btn--bg {
	width: 40px;
	height: 30px;
	line-height: 30px;
	user-select: none;
	text-align: center;
	cursor: pointer;
}

.btn--normal {
	&:hover {
		@include background-color('theme-color-main');
		@include font-color('bg-color-main');
	}
}

.btn--minimize {
  font-size: 20px;
}

.btn--close {
  font-size: 22px;
	&:hover {
		background-color: #b31224;
		color: #ffffff;
	}
}
</style>
