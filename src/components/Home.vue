<template>
  <div class="home">
    <main>
      <div class="container">
        <ProductList />
      </div>
    </main>
    <footer>
      <div class="container">
        <div class="row-item">
          <div class="col-3-item"></div>
          <div class="col-6-item">
            <div class="pagination">
              <ul>
                <li><a href="/">1</a></li>
                <li>...</li>
                <li><a href="/">4</a></li>
                <li class="active"><a href="/">5</a></li>
                <li><a href="/">6</a></li>
                <li>...</li>
                <li><a href="/">59</a></li>
              </ul>
            </div>
          </div>
          <div class="col-3-item">
            <div class="cart">
              <button class="cart-button">
                <span>102 400 руб.</span>
                <img src="@/assets/images/Cart.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ProductList from "@/components/ProductList";
@Options({
  components: {
    ProductList,
  },
})
export default class Home extends Vue {
  msg!: string;
}
</script>
<style lang="scss">
.container {
  max-width: 90%;
  width: 660px;
  box-sizing: border-box;
  margin: auto;
}
footer {
  position: fixed;
  background: #000000;
  opacity: 0.9;
  padding: 10px;
  bottom: 0;
  left: 0;
  width: 100%;
}
.col-3-item {
  width: 25%;
  padding: 0 0.75rem;
  box-sizing: border-box;
}
.col-6-item {
  width: 50%;
  padding: 0 0.75rem;
  box-sizing: border-box;
}

.pagination {
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    height: 100%;
    li {
      color: #fff;
      a {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        text-decoration: none;
        text-align: center;
        color: #fff;
        padding: 0 7px;
      }
      &.active a {
        font-weight: 700;
        font-size: 16px;
      }
    }
  }
}

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
