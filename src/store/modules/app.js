
const state = {
  pageCount: 0
}

const mutations = {
  CHANGEPAGECOUNT: (state)=> {
    state.pageCount += 1
  },
  CHANGEDATA: (state)=> {
    state.pageCount -= 1
  },
}
const actions = {
  AYSNCCHANGEECOUNT: ({commit})=> {
    commit('CHANGEPAGECOUNT')
  },
  AYSNCCHANGEDATA: ({commit})=> {
    setTimeout(()=>{
      commit('CHANGEDATA')
    },1000)

  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
