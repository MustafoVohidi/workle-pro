export const paginationModule = {
  state: () => ({
    limit: 10,
    page: 1,
    paginations: [
      { title: "1", isActive: true },
      { title: "...", isActive: false },
      { title: "4", isActive: false },
      { title: "5", isActive: false },
      { title: "6", isActive: false },
      { title: "...", isActive: false },
      { title: "500", isActive: false },
    ],
  }),
  // computed function
  getters: {},
  // меняет состояние
  mutations: {},
  actions: {},
};
