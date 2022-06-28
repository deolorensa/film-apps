import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newsList: [],
    info: '',
    dark: false
  },
  getters: {
    dark: (state) => state.dark
  },
  mutations: {
    setNewsList(state, playload) {
      state.newsList = playload;
    },
    setInfo(state, playload) {
      state.info = playload;
    },
    SET_DARK: (state, bool) => {
      state.dark = bool;
    }
  },
  actions: {
    fetchNews(store, {keyword}){
      axios
          .get(`http://api.tvmaze.com/search/shows?q=${keyword}`)
          .then((response) => {store.commit('setNewsList', response.data);
        })
          .catch((error) => { store.commit("setInfo", error)
        })
    },
  },
  modules: {
  }
})
