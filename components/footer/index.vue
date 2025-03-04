<script setup lang="ts">
//#region props-emit
const emit = defineEmits(['onClick'])
//#endregion
const buildings = ref<any[]>([
  {id:1,title:'نانوایی',image:'/img/sample/building-1.png'},
  {id:1,title:'نانوایی',image:'/img/sample/building-2.png'},
  {id:1,title:'نانوایی',image:'/img/sample/building-3.png'},
  {id:1,title:'نانوایی',image:'/img/sample/building-4.png'},
  {id:1,title:'نانوایی',image:'/img/sample/building-5.png'},
  {id:1,title:'نانوایی',image:'/img/sample/building-6.png'},
  {id:1,title:'نانوایی',image:'/img/sample/building-7.png'},
  {id:1,title:'نانوایی',image:'/img/sample/building-8.png'},
])
//#region swiper
import {Pagination, Autoplay , Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const modules = [Pagination, Autoplay , Navigation ];
//#endregion

//#region functions
const onClick = (data:string) => {
  console.log('2.data',data)
  emit('onClick',data)
}
//#endregion

</script>

<template>
<div class="footer Estedad_FD_Bold">
  <div class="w-full h-[70%] mt-8 dir-rtl">
    <swiper
        :grabCursor="true"
        dir="right"
        :slidesPerView="4.5"
        :spaceBetween="5"
        :modules="modules"
        class="mySwiper"
    >
      <swiper-slide v-for="(item,i) in buildings" :key="`carousel_${i}`">
        <btnBuilding :title="item.title" :image="item.image" @onClick="onClick"/>
      </swiper-slide>

    </swiper>
  </div>
</div>
</template>

<style scoped>
.footer {
  @apply flex flex-col items-center justify-center fixed bottom-0 left-0 w-screen h-[16vh] bg-red-500;
  background: url("/img/utils/footer.png");
  background-position: center bottom;
  background-size: contain;
  background-repeat: repeat-x;
}
</style>