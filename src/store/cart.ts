export const cartModule = {
  state: () => ({
    sumPrice: 0,
    productsInCart: [],
  }),
  // computed function
  getters: {},
  // меняет состояние
  mutations: {
    setSumPrice(state: any, sumPrice: number) {
      state.sumPrice = sumPrice;
    },
    setProductsInCart(state: any, productsInCart: object) {
      state.productsInCart = productsInCart;
    },
  },
  actions: {},
};
