<template>
  <div class="pagination">
    <ul>
      <li
        v-for="paginate in paginations"
        :class="{
          'active': paginate.title==page,
        }"
      >
        <span
          class="cursor-pointer"
          v-if="paginate.title != '...'"
          @click="changePage(paginate.title)"
          >{{ paginate.title }}</span
        >
        <span v-else>{{ paginate.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  methods: {
    ...mapMutations({
      changePage: "changePage",
    }),
    ...mapActions({
      fetchProducts: "fetchProducts",
    }),
  },
  computed: {
    ...mapState({
      paginations: (state) => state.paginations,
      page: (state) => state.page,
    }),
    ...mapGetters({}),
  },
  watch: {
    page() {
      this.fetchProducts();
    },
  },
};
</script>

<style lang="scss">
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
      span {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        text-decoration: none;
        text-align: center;
        color: #fff;
        padding: 0 7px;
        &.cursor-pointer {
          cursor: pointer;
        }
      }
      &.active span {
        font-weight: 700;
        font-size: 16px;
      }
    }
  }
}
</style>
