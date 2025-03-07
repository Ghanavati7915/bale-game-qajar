import VueKonva from 'vue-konva';
import {Swiper, SwiperSlide} from 'swiper/vue';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueKonva);
  nuxtApp.vueApp.component('Swiper', Swiper)
  nuxtApp.vueApp.component('swiper-slide', SwiperSlide)
})
