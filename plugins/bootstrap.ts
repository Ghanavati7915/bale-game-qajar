import VueKonva from 'vue-konva';

export default defineNuxtPlugin(nuxtApp => {
  // nuxtApp.vueApp.component('screen', Screen)
  nuxtApp.vueApp.use(VueKonva);
})
