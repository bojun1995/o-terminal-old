<template>
	<div class="the-top-bar">
		<div class="drag-area"></div>
		<div class="btn-group">
			<div class="btn btn--normal" @click="onMinClk">
				<i class="ri-subtract-line"></i>
			</div>
			<div class="btn btn--normal" @click="onMaxClk" v-show="!isMaximized">
				<i class="ri-checkbox-blank-line"></i>
			</div>
			<div class="btn btn--normal" @click="onUnMaxClk" v-show="isMaximized">
				<i class="ri-checkbox-multiple-blank-line"></i>
			</div>
			<div class="btn btn--close" @click="onCloseClk">
				<i class="ri-close-line"></i>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TheTopBar',
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
      this.$ipc.send('theTopBar.minimize')
    },
		onMaxClk() {
      this.$ipc.send('theTopBar.maximize')
      this.isMaximized = true
    },
		onUnMaxClk() {
      this.$ipc.send('theTopBar.unmaximize')
      this.isMaximized = false
    },
		onCloseClk() {
      this.$ipc.send('theTopBar.close')
    },
	},
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.the-top-bar {
	height: 30px;
	width: 100%;

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
.btn {
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
.btn--close {
	font-size: 22px;
	&:hover {
		background-color: #b31224;
		color: #ffffff;
	}
}
</style>
