<template>
	<div class="folder-tree">
		<div class="tree--container _scroll">
			<folder label="root" :level="0" :option="rootFolderChild"></folder>
		</div>
	</div>
</template>

<script>
// comp
import Folder from './Folder/index.vue'

export default {
	name: 'FolderTree',
	components: { Folder },
	data() {
		return {
      rootFolderChild: []
    }
	},
	computed: {},
	watch: {},
	created() {
    
  },
	mounted() {
    this.initFolderChild()
  },
	methods: {
    initFolderChild() {
      this.rootFolderChild = this.$store.state.folder.folderTree
    },
  },
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.folder-tree {
	display: flex;
	flex-grow: 1;
	flex-direction: column;
  padding: 10px;
}
.tree--container {
	height: 100%;
	width: 100%;
  display: flex;
  flex-direction: column;
}
._scroll {
	overflow-y: auto;
	overflow-x: hidden;
	margin-top: 5px;
	&::-webkit-scrollbar {
		width: 6px;
		height: 1px;
	}
	&::-webkit-scrollbar-track {
		opacity: 1;
	}
	&:hover {
		&::-webkit-scrollbar-thumb {
			border-radius: 3px;
			@include background-color('theme-color-main');
		}
		&::-webkit-scrollbar-track {
			opacity: 0.2;
		}
	}
}
.tree {
	width: 100%;
}
</style>
