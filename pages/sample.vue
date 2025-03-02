<script setup lang="ts">
import Konva from "konva";

const stage = ref<any>(false)
const hexagon = ref<any>(false)
const image1 = ref<any>('')

const configKonva = ref<any>({
  width: window.innerWidth,
  height: window.innerHeight,
  draggable: true,
})
const isDragging = ref<any>(false)
const configCircle = ref<any>({
  x: 100,
  y: 100,
  radius: 70,
  fill: "red",
  stroke: "black",
  strokeWidth: 4
})

const handleDragStart = () => {
  isDragging.value = true;
}
const handleDragEnd = () => {
  isDragging.value = false;
}
const changeSize = (e:any) => {
  // to() is a method of `Konva.Node` instances
  e.target.to({
    scaleX: Math.random() + 0.8,
    scaleY: Math.random() + 0.8,
    duration: 0.2
  });
}
const loadImage = () => {
  const image = new window.Image();
  image.src = "https://konvajs.org/assets/yoda.jpg";
  image.onload = () => {
    // set image only when it is loaded
    image1.value = image;
  };
}
const animateHexagon = () => {
  const amplitude = 100;
  const period = 5000;
  // in ms
  const centerX = stage.value.getNode().getWidth() / 2;

  const _hexagon = hexagon.value.getNode();

  // example of Konva.Animation
  const anim = new Konva.Animation((frame:any) => {
    _hexagon.setX(
        amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX
    );
  }, _hexagon.getLayer());

  anim.start();
}

onMounted(async () => {
  animateHexagon();
  loadImage();
});
</script>

<template>
<div class="bg-rose-200">
  <v-stage ref="stage" :config="configKonva">
    <v-layer ref="layer">
      <v-circle :config="configCircle"></v-circle>
      <v-text
          @dragstart="handleDragStart"
          @dragend="handleDragEnd"
          :config="{
            fontSize: 30,
            fontFamily: 'Estedad-FD-Bold',
            text: 'سلام روز بخیر',
            x: 250,
            y: 100,
            draggable: true,
            fill: isDragging ? 'green' : 'black'
          }"
      />
      <v-rect
          ref="rect"
          @dragstart="changeSize"
          @dragend="changeSize"
          :config="{
            width: 50,
            height: 50,
            fill: 'green',
            draggable: true
          }"
      />
      <v-regular-polygon
          ref="hexagon"
          :config="{
          x: 200,
          y: 200,
          sides: 6,
          radius: 20,
          fill: 'red',
          stroke: 'black',
          strokeWidth: 4
        }"
      />
<!--      <v-image :config="{image: image1}"/>-->
    </v-layer>
  </v-stage>


</div>
</template>

<style scoped>
</style>