<script setup lang="ts">
//#region props-emit
const props = defineProps({
  title: {type:String , required: true },
  image: {type:String , required: true },
});
const emit = defineEmits(['onClick'])
//#endregion

//#region functions
const onClick = () => {
  emit('onClick',props.image)
}
//#endregion
</script>

<template>
  <div class="card" @click="onClick">
    <div class="absolute flex flex-col top-0 left-0 w-full justify-center items-center text-center pt-1">
      <img :src="props.image" alt="building" class="w-14 h-14 object-cover" />
      <span class="text-[0.5rem] Estedad_FD_Light mt-[14px]"> {{props.title}} </span>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply flex flex-col items-center justify-center w-32 h-24 relative;
  background: url("/img/utils/selector-button.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>