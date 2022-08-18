<template>
  <footer>
    <div class="container">
      <div class="row-item">
        <div class="col-3-item"></div>
        <div class="col-6-item">
          <Pagination />
        </div>
        <div class="col-3-item">
          <Cart />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Cart from "@/components/Cart";
import Pagination from "@/components/Pagination";
export default {
  components: {
    Pagination,
    Cart,
  },
};
</script>

<style lang="scss">
footer {
  position: fixed;
  background: #000000;
  opacity: 0.9;
  padding: 10px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
</style>
