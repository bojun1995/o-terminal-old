<template>
	<div class="left-btn" :class="cp_leftBtnClass">
		<div class="left-btn__icon">
			<i :class="icon"></i>
		</div>
		<div class="left-btn__label">
			<span>{{ label }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'LeftBtn',
	props: {
		label: {
			type: String,
			default: '',
		},
		icon: {
			type: String,
			default: 'ri-code-view',
		},
		isSelected: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {}
	},
	computed: {
		cp_leftBtnClass() {
			let ret = {
				'left-btn--selected': this.isSelected,
				'left-btn--hover': !this.isSelected,
			}
			return ret
		},
	},
	watch: {},
	created() {},
	mounted() {},
	methods: {},
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.left-btn {
	height: 30px;
	line-height: 30px;
	border-radius: $leftBtnBorderRadius;
	display: flex;
	flex-direction: row;
	padding: 0px 10px;
	user-select: none;
	cursor: pointer;
}

.left-btn--hover {
	&:hover {
		@include background-color('bg-color__left-btn--hover');
	}
}

.left-btn--selected {
	@include background-color('bg-color__left-btn--selected');
}

.left-btn__icon {
	margin-right: 15px;
}

.left-btn__label {
	font-size: 14px;
}
</style>
