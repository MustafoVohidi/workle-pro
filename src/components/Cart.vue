<template>
  <div class="cart">
    <button class="cart-button">
      <span>{{sumPriceCart}} руб.</span>
      <img src="@/assets/images/Cart.png" />
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      sumPriceCart: (state) => state.sumPriceCart,
    }),
  },
};
</script>

<style lang="scss">
.cart {
  .cart-button {
    background: transparent;
    border: none;
    padding: 0;
    text-align: right;
    display: flex;
    color: #fff;
    align-items: center;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    cursor: pointer;
    span {
      margin-right: 6px;
    }
  }
}
</style>
