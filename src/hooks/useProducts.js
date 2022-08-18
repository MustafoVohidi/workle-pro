import axios from 'axios';
import {ref, onMounted} from "vue";

export function useProducts(maxPrice, minPrice, limit) {
  const page = ref(1);
  const totalPage = ref(0);
  const ProductList = ref([]);

  const fetch = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos",
        {
          params: {
            _limit: limit,
            _page: page.value,
          },
        }
      );
      totalPage.value = Math.ceil(response.headers["x-total-count"] / limit);
      // commit(
      //   "setTotalPage",
      //   Math.ceil(response.headers["x-total-count"] / this.limit)
      // );
      response.data.map((elem) => {
        elem.price =
          Math.floor(Math.random() * (maxPrice - minPrice)) + minPrice;
      });
      ProductList.value = response.data;
      // commit("setProductList", response.data);
      // console.log(state.productList, 10, state.totalPages);
    } catch (e) {
      alert("error");
    }
  };
  onMounted(fetch)
  return {
    page, totalPage, ProductList
  }
}
