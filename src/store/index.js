import Vue from "vue";
import Vuex from "vuex";

import top from "./pages/top";
import list from "./pages/list";
import room from "./pages/room";

new Vuex.Store({
  modules: {
    top: top,
    list: list,
    room: room,
  }
});
