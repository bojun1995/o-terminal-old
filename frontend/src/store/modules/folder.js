const state = {
  folderTree: []
}

const mutations = {
  SET_FOLDER_TREE(state, folderTree) {
    state.folderTree = folderTree
  },
}

const actions = {
  changeFolderTree({ commit }, folderTree) {
    commit('SET_FOLDER_TREE', folderTree)
  },
}

export default {
	state,
	mutations,
	actions,
}
