import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    sumPriceCart: 0,
    productsInCart: [] as Array<any>,
    productList: [] as Array<any>,
    totalPages: 0,
    limit: 10,
    page: 1,
    minPrice: 1000,
    maxPrice: 60000,
    paginations: [
      { title: 1 },
      { title: 2 },
      { title: 3 },
      { title: 4 },
      { title: 5 },
      { title: 6 },
      { title: "..." },
    ] as Array<any>,
  },
  // computed function
  getters: {},
  // меняет состояние
  mutations: {
    addProduct(state, product) {
      let existProduct: boolean = false;
      let index = 0;
      for (let i = 0; i < state.productsInCart.length; i++) {
        if (state.productsInCart[i].id == product.id) {
          existProduct = true;
          index = i;
        }
      }
      if (existProduct) {
        state.productsInCart[index].price += product.price;
      } else {
        state.productsInCart.push(product);
      }
      let price = 0;
      for (let i = 0; i < state.productsInCart.length; i++) {
        price += state.productsInCart[i].price;
      }
      state.sumPriceCart = price;
    },
    removeProduct(state, product) {
      let index = state.productsInCart.indexOf(product);
      if (index !== -1) {
        state.productsInCart.splice(index, 1);
      }
      let price = 0;
      for (let i = 0; i < state.productsInCart.length; i++) {
        price += state.productsInCart[i].price;
      }
      state.sumPriceCart = price;
      console.log(state.productsInCart, product);
    },

    changePage(state, pageNumber) {
      if (pageNumber < 3 || pageNumber >= state.totalPages - 1) {
        state.paginations = [
          { title: 1, isActive: false },
          { title: 2, isActive: false },
          { title: 3, isActive: false },
          { title: "...", isActive: false },
          { title: state.totalPages - 2, isActive: false },
          { title: state.totalPages - 1, isActive: false },
          { title: state.totalPages, isActive: false },
        ];
      } else {
        state.paginations = [
          { title: 1, isActive: false },
          { title: "...", isActive: false },
          { title: pageNumber - 1, isActive: false },
          { title: pageNumber, isActive: false },
          { title: pageNumber + 1, isActive: false },
          { title: "...", isActive: false },
          { title: state.totalPages, isActive: false },
        ];
      }

      state.page = pageNumber;
    },

    setSumPriceCart(state: any, sumPriceCart: number) {
      state.sumPriceCart = sumPriceCart;
    },

    setProductList(state, productList) {
      state.productList = productList;
    },
    setTotalPage(state, totalPages) {
      state.totalPages = totalPages;
    },
    setPage(state, page) {
      state.page = page;
    },
    setPaginations(state, paginations) {
      state.paginations = paginations;
    },
  },
  actions: {
    async fetchProducts({ state, commit }) {
      try {
        const response: any = await axios.get(
          "https://jsonplaceholder.typicode.com/photos",
          {
            params: {
              _limit: state.limit,
              _page: state.page,
            },
          }
        );
        commit(
          "setTotalPage",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
        response.data.map((elem: any) => {
          elem.price =
            Math.floor(Math.random() * (state.maxPrice - state.minPrice)) +
            state.minPrice;
        });
        commit("setProductList", response.data);
        console.log(state.productList, 10, state.totalPages);
      } catch (e) {
        alert("error");
      }
    },
  },
  modules: {},
});
