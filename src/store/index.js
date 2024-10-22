import { createStore } from "vuex";
import { computed } from "vue";

const store = createStore({
  state: {
    darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
    isSidebarOpen: false,
    selected: JSON.parse(localStorage.getItem("selected")) || "eCommerce",
    page: JSON.parse(localStorage.getItem("page")) || "Dashboard",
  },
  mutations: {
    TOGGLE_DARK_MODE(state) {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
    },
    TOGGLE_SIDEBAR(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    SET_SELECTED(state, selected) {
      state.selected = selected;
      localStorage.setItem("selected", JSON.stringify(selected));
    },
    SET_PAGE(state, page) {
      state.page = page;
      localStorage.setItem("page", JSON.stringify(page));
    },
  },
  actions: {
    toggleDarkMode({ commit }) {
      commit("TOGGLE_DARK_MODE");
    },
    toggleSidebar({ commit }) {
      console.log("Toggling sidebar");
      commit("TOGGLE_SIDEBAR");
    },
    setSelected({ commit }, selected) {
      commit("SET_SELECTED", selected);
    },
    setPage({ commit }, page) {
      commit("SET_PAGE", page);
    },
  },
  getters: {
    isDarkMode(state) {
      return state.darkMode;
    },
    isSidebarOpen(state) {
      return state.isSidebarOpen;
    },
    selected(state) {
      return state.selected;
    },
    page(state) {
      return state.page;
    },
  },
  modules: {},
});

// Composable Function
export function useSidebarStore() {
  return {
    isSidebarOpen: computed(() => store.getters.isSidebarOpen),
    toggleSidebar: () => store.dispatch("toggleSidebar"),
    selected: computed(() => store.getters.selected),
    setSelected: (item) => store.dispatch("setSelected", item),
    page: computed(() => store.getters.page),
    setPage: (item) => store.dispatch("setPage", item),
    darkMode: computed(() => store.getters.isDarkMode),
    toggleDarkMode: () => store.dispatch("toggleDarkMode"),
  };
}

export default store;
