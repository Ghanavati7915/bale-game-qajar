<script setup lang="ts">
//#region props-emit
const props = defineProps({
  title: {type:String , required: true },
  message: {type:String , required: true },
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
  <div class="modalBox">
    <div class="modal">
      <div class="absolute top-0 left-0 w-full text-center pt-4">
        <span class=""> {{props.title}} </span>
      </div>
      <div class="flex flex-col items-center justify-center pt-5">
        <span class=""> {{props.message}} </span>
        <button class="bg-blue-500 hover:bg-blue-700 text-white mt-5 py-2 px-4 rounded" @click="onClick">
          بستن
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modalBox{
  @apply w-screen h-screen bg-black/40 fixed top-0 left-0 flex flex-col items-center justify-center z-50;

  .modal {
    @apply flex flex-col items-center justify-center w-[80vw] h-[25vh] relative;
    background: url("/img/utils/modal.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  }
}

</style>