import Vue from "vue";

const state = {
  canvas: {
    data: {
      '0': {
        '0': '#000000',
        '1': '#000000',
        '2': '#FFFFFF',
      },
      '1': {
        '0': '#000000',
        '1': '#000000',
        '2': '#000000',
      },
      '2': {
        '0': '#000000',
        '1': '#000000',
        '2': '#000000',
      },
    },
    prop: {
      width: 333,
      height: 600,
    },
  },
  pallet: {
    color: '#FF00FF',
  }
}

const mutations = {
  updatePallet(state, payload) {
    // Vue.set(state, 'pallet.color', payload)
    state.pallet.color = payload;
  },
}
const getters = {}
const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};
