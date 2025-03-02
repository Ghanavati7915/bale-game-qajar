<template>
  <Html dir="rtl" lang="fa" class="Estedad_FD w-screen h-full m-auto p-0 pb-12 select-none">
  <div>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
  </div>
  </Html>
</template>
<script setup lang="ts">
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>