<script setup lang="ts">
import { ref, onMounted } from 'vue'

const stageRef = ref(null)
const lastDist = ref(null)
const objects = ref<any[]>([]) // ذخیره‌ی آبجکت‌های اضافه‌شده

const configKonva = ref({
  width: window.innerWidth,
  height: window.innerHeight,
  draggable: true,
})

const backgroundImageConfig = ref({
  x: 0,
  y: 0,
  width: 1872,
  height: 1062,
  image: null,
})

const init = () => {
  const img = new window.Image()
  img.src = '/img/bg.jpg'
  img.onload = () => {
    backgroundImageConfig.value.image = img
  }
}

// اضافه کردن تصویر جدید به Konva در موقعیت تصادفی نزدیک به مرکز
const addObjectToKonva = (imgSrc: string) => {
  const img = new window.Image()
  img.src = imgSrc
  img.onload = () => {
    // محاسبه موقعیت تصادفی نزدیک به مرکز
    const stage = stageRef.value.getNode()
    const centerX = stage.width() / 2
    const centerY = stage.height() / 2
    const randomX = centerX + (Math.random() * 100 - 50)
    const randomY = centerY + (Math.random() * 100 - 50)

    objects.value.push({
      x: randomX,
      y: randomY,
      width: 100,
      height: 100,
      image: img,
      draggable: true,
    })
  }
}

// تنظیمات زوم و درگ
const setupZoomAndDrag = () => {
  if (!stageRef.value) return
  const stage = stageRef.value.getNode()

  stage.on('wheel', (e: any) => {
    e.evt.preventDefault()
    zoomStage(stage, e.evt.deltaY > 0 ? -1 : 1, stage.getPointerPosition())
  })

  stage.on('touchmove', (e: any) => {
    const touch1 = e.evt.touches[0]
    const touch2 = e.evt.touches[1]

    if (touch1 && touch2) {
      const dist = Math.sqrt(
          Math.pow(touch2.clientX - touch1.clientX, 2) +
          Math.pow(touch2.clientY - touch1.clientY, 2)
      )

      if (lastDist.value) {
        zoomStage(stage, dist > lastDist.value ? 1 : -1, {
          x: (touch1.clientX + touch2.clientX) / 2,
          y: (touch1.clientY + touch2.clientY) / 2,
        })
      }

      lastDist.value = dist
    }
  })

  stage.on('touchend', () => {
    lastDist.value = null
  })
}

// تابع عمومی برای زوم
const zoomStage = (stage: any, direction: any, point: any) => {
  const scaleBy = 1.05
  const oldScale = stage.scaleX()
  let newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy

  newScale = Math.min(5, Math.max(1, newScale))

  const mousePointTo = {
    x: (point.x - stage.x()) / oldScale,
    y: (point.y - stage.y()) / oldScale,
  }

  const newPos = {
    x: point.x - mousePointTo.x * newScale,
    y: point.y - mousePointTo.y * newScale,
  }

  stage.scale({ x: newScale, y: newScale })
  stage.position(newPos)
  stage.batchDraw()
}

onMounted(() => {
  init()
  setupZoomAndDrag()
})
</script>

<template>
  <div>
    <v-stage ref="stageRef" :config="configKonva">
      <v-layer>
        <v-image :config="backgroundImageConfig" />
        <!-- اضافه کردن آبجکت‌های جدید -->
        <v-image
            v-for="(obj, index) in objects"
            :key="index"
            :config="obj"
        />
      </v-layer>
    </v-stage>

    <div class="navbar">
      <div class="item" @click="addObjectToKonva('/img/sample/building-1.png')">
        <img src="/img/sample/building-1.png" alt="building-1" />
      </div>
      <div class="item" @click="addObjectToKonva('/img/sample/building-2.png')">
        <img src="/img/sample/building-2.png" alt="building-2" />
      </div>
      <div class="item" @click="addObjectToKonva('/img/sample/building-3.png')">
        <img src="/img/sample/building-3.png" alt="building-3" />
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: #4a7b39;
}
.navbar {
  @apply w-screen h-28 z-50 fixed bottom-0 left-0 bg-rose-500/50 flex justify-center items-center;
}

.item {
  @apply w-32 h-32 flex -mt-10 mx-5 transition-all duration-150 ease-in-out hover:-mt-16 cursor-pointer;
}

.item img {
  @apply w-full h-full object-contain;
}
</style>
