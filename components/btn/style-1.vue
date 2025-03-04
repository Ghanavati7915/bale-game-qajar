<script setup lang="ts">
//#region props-emit
const props = defineProps({
  title: {type:String , required: true },
  icon: {type:String , required: true },
});
const emit = defineEmits(['onClick'])
//#endregion

//#region functions
const onClick = () => {
  emit('onClick')
}
//#endregion
</script>

<template>
<div class="bg-button Estedad_FD_Bold" @click="onClick">
  <div class="label">
    <img :src="props.icon" alt="icon"/>
    <span> {{props.title}} </span>
  </div>
</div>
</template>

<style scoped>
.bg-button {
  @apply flex flex-col items-center justify-center;
  width: 100px;
  height: 120px;
  background: url("/img/utils/btn-style-1.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;

  .label{
    @apply absolute bottom-0 left-0 flex flex-col items-center justify-center w-full;

    img{
      @apply object-cover w-16 h-16 mb-2;
    }

    span{
      @apply text-xs mb-5;
    }
  }
}
</style>