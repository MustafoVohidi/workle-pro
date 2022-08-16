<template>
  <div class="product-Item">
    <div class="author">
      <div class="img-author">
        <img alt="" src="@/assets/images/Person.png" />
      </div>
      <div class="info-author">
        <h3>Jason Mowry</h3>
        <p>@json_mowry_photo</p>
      </div>
    </div>
    <div class="image">
      <img src="@/assets/images/Photo.jpg" alt="" />
    </div>
    <div class="price">
      <div class="quantity">
        <button>
          <img src="@/assets/images/plus.png" alt="" />
        </button>
        <button>
          <img src="@/assets/images/minus.png" alt="" />
        </button>
        <input type="text" value="0" />
      </div>
      <div class="currency">51 200 руб.</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.col-6-item {
  width: 50%;
  padding: 0 0.75rem;
  box-sizing: border-box;
}
.product-Item {
  width: 100%;
  display: block;
  margin-bottom: 10px;
  .author {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    .img-author {
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }
    .info-author {
      h3 {
        margin: 0;
        padding: 0;
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        color: #333333;
        margin-bottom: 3px;
        text-align: left;
      }
      p {
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        margin: 0;
        padding: 0;
        color: #8d8d8d;
      }
    }
  }
  .image {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 10px 10px 5px;
    .quantity {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      button {
        background: transparent;
        border: 0;
        padding: 0;
        cursor: pointer;
      }
      input {
        font-weight: 700;
        font-size: 10px;
        line-height: 14px;
        color: #333333;
        width: 24px;
        border: 0;
        margin-left: 10px;
      }
    }
    .currency {
      color: #333333;
      text-align: right;
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
    }
  }
}
</style>
