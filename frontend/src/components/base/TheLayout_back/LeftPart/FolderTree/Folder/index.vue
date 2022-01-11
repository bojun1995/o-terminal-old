<template>
	<div>
		<div v-for="(item, idx) in option"  :style="getFolderChildStyle(item)">
			<div v-if="'folder' == item.type">
				<div class="row-item folder">
					<i class="row-item__icon ri-folder-line"></i>
					<div class="row-item__label">
						<span>folder: {{ item.label }}</span>
					</div>
				</div>
				<template v-if="item.child && item.child.length > 0">
					<folder class="folder-child" :level="item.level" :option="item.child"></folder>
				</template>
			</div>
			<div v-if="'file' == item.type">
				<div class="row-item file">
					<i class="row-item__icon ri-file-line"></i>
					<span class="row-item__label">
						<span>file: {{ item.label }}</span>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Folder',
	props: {
		level: {
			type: Number,
			default: 0,
		},
		option: {
			type: Array,
			default: () => {
				return []
			},
		},
	},
	data() {
		return {}
	},
	computed: {
		cp_folderChild() {
		},
	},
	watch: {},
	created() {},
	mounted() {},
	methods: {
    getFolderChildStyle(item) {
			let ret = {
				paddingLeft: item.level * 10 + 'px',
			}
      console.log(`${item.label} : ${item.level}`)
			return ret
    },
  },
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.row-item {
	height: 20px;
	padding: 5px 10px;
	display: flex;
	flex-direction: row;
	user-select: none;
	cursor: pointer;
	&:hover {
		@include background-color('bg-color__left-btn--hover');
	}
}
.row-item__icon {
	font-size: 20px;
}
.row-item__label {
	font-size: 14px;
	margin-left: 5px;
	line-height: 22px;
}
.folder {
}
.file {
}
</style>
