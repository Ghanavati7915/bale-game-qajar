<script setup lang="ts">
</script>

<template>
<div class="flex flex-col justify-center items-center p-10">
  <div class="mb-5 text-lg"> روزی روزگاری ایران - قاجار </div>
  <nuxt-link to="/game-1" type="button" class="button-link">نمونه اول</nuxt-link>
  <nuxt-link to="/game-2" type="button" class="button-link">نمونه دوم</nuxt-link>
  <nuxt-link to="/sample" type="button" class="button-link">کارگاه</nuxt-link>
</div>
</template>

<style scoped>
.button-link{
  @apply focus:outline-none my-3 text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full me-2 mb-2 dark:focus:ring-yellow-900;
}
</style>
