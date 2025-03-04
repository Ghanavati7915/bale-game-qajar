<script setup lang="ts">
//#region props-emit
const props = defineProps({
  food: {type:Number , required: true , default:0 },
  wood: {type:Number , required: true , default:0 },
  stone: {type:Number , required: true , default:0 },
  money: {type:Number , required: true , default:0 },
  pepole: {type:Number , required: true , default:0 },
});
//#endregion
</script>

<template>
<div class="header Estedad_FD_Bold">

  <div class="flex flex-col justify-center items-center text-xs mx-4">
    <img src="/img/utils/nav-food.png" alt="food" class="w-14 h-14"/>
    <span class="Estedad_FD_Light">غذا : 130 واحد</span>
  </div>

  <div class="flex flex-col justify-center items-center text-xs mx-4">
    <img src="/img/utils/nav-people.png" alt="people" class="w-14 h-14"/>
    <span class="Estedad_FD_Light">کارگر : 12 نفر</span>
  </div>

</div>
</template>

<style scoped>
.header {
  @apply flex flex-row items-start justify-center fixed top-0 left-0 pt-2 w-screen h-[15vh] bg-red-500;
  background: url("/img/utils/header.png");
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>