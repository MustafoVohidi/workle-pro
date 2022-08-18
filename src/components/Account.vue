<template>
  <div class="account">
    <button @click="$router.push('/')" class="to-home">
      На главную страницу
    </button>
    <div class="content">jason Mowry</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.to-home {
  cursor: pointer;
}
</style>
