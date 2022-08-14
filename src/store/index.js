import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    houseList: [],
    deleteModal: {
      isActive: false,
      itemToDelete: ''
    },
    isActiveSpenner: false
  },
  getters: {
    recommendedHouseList: (state) => (id) => {
      const recommended = state.houseList.filter(el => !el.madeByMe && el.id !== id).slice(0, 4)
      return recommended
    }
  },
  mutations: {
    setHouseList (state, payload) {
      state.houseList = payload
    },
    setDeleteModal (state, payload) {
      state.deleteModal = payload
    },
    setSpinnerState (state, payload) {
      state.isActiveSpenner = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
