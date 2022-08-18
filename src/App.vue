<template>
  <div class="app">
    <div>
      <span
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        :class="{
          'active-page': pageNumber === page,
        }"
        @click="changePage(pageNumber)"
        >{{ pageNumber }}</span
      >
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
// import {useProducts} from "@/hooks/useProducts.js"
export default {
  // setup(props) {
  //   const { page, totalPage, ProductList } = useProducts(60000, 1000, 10);
  // },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
}
.active-page {
  display: block;
  color: red;
}
</style>
