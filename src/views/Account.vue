<template>
  <div class="account">
    <Account />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Account from "@/components/Account.vue";
@Options({
  components: {
    Account,
  },
})
export default class Common extends Vue {}
</script>
