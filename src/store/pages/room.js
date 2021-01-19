import Vue from "vue";

const state = {
  canvas: {
    data: {
      // 0: {
      //   0: '#000000',
      //   1: '#000000',
      //   2: '#FFFFFF',
      // },
      // 1: {
      //   0: '#000000',
      //   1: '#000000',
      //   2: '#000000',
      // },
      // 2: {
      //   0: '#000000',
      //   1: '#000000',
      //   2: '#000000',
      // },
    },
    prop: {
      pixelRows: 3,
      pixelColumns: 3,
      pixelPerGrid: 128
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
  /**
   * 指定したキャンバス上の座標に指定した色を設定します。
   * @param {Array} payload
   *   x: {Integer} 設定対象となるx座標
   *   y: {Integer} 設定対象となるy座標
   *   color: {String} 設定する色のカラーコード(16進数)
   */
  updateColor(state, payload) {
    const x = payload.x;
    const y = payload.y;
    const color = payload.color;
    state.canvas.data[x][y] = color;
  },
  setCanvasData(state, canvasData) {
    state.canvas.data = canvasData;
  }

}
const getters = {}
const actions = {
  /**
   * キャンバスを指定したサイズで初期化します。
   * 
   * @param {object} context コンテキスト
   * @param {object} payload
   *   - {int} x: キャンバスのX軸方向ドット数
   *   - {int} y: キャンバスのY軸方向ドット数
   */
  initCanvas(context, payload) {
    console.log(payload);
    const cntX = payload.x;
    const cntY = payload.y;

    const newCanvasData = {};
    for (let y = 0; y < cntY; y++) {
      const gridRow = {};
      for (let x = 0; x < cntX; x++) {
        gridRow[x] = '#FFFFFF';
      }
      newCanvasData[y] = gridRow;
    }
    console.log(newCanvasData);
    context.commit("setCanvasData", newCanvasData);
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};
