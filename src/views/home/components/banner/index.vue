<template>
  <div class="banner-container" v-if="isSize > 1280">
    <div class="banner">
      <div class="banner-box">
        <div class="title-text-box">
          <Times1></Times1>
          <Times2 class="left-img1"></Times2>
          <div class="left-text">
            The Decentralized <span class="text-class">Power Grid</span> For AI
          </div>
        </div>
        <div class="mp-4">
          <vue3videoPlay v-bind="options"/>
          <!-- <div ref="canvas"></div> -->
        </div>
      </div>
    </div>
  </div>
  <div class="banner-container" v-if="isSize <= 1280">
    <div class="banner">
      <div class="banner-box">
        <div class="title-text-box">
          <Times1></Times1>
          <Times2 class="left-img1"></Times2>
          <div class="left-text">
            <div>The Decentralized</div>
            <div><span class="text-class">Power Grid</span> For AI</div>
          </div>
        </div>
        <div class="mp-4">
          <vue3videoPlay v-bind="options"/>
          <!-- <div ref="canvas"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  onMounted,
  getCurrentInstance,
  // ref,
  computed,
} from "vue";
import { useRouter, useRoute } from "vue-router";
// import p5 from "p5js/p5.js/p5.js";
import Times1 from "./../../../../components/times.vue";
import Times2 from "./../../../../components/times1.vue";
import vue3videoPlay from "vue3-video-play"; // 引入组
import "vue3-video-play/dist/style.css"; // 引入css
import { useMain } from './../../../../../store/index';
export default defineComponent({
  components: { Times1, Times2, vue3videoPlay },
  setup() {
    const { proxy } = getCurrentInstance() as any;
    const router = useRouter();
    const queryRoute = useRoute();
    const couponStore = useMain();
    const isSize = computed(() => couponStore.handleSize)
    const data = reactive({
      options: {
        src: "https://aimesh.com/files/banner.mp4", //视频源
        muted: false, //静音
        webFullScreen: false,
        autoPlay: true, //自动播放
        loop: true, //循环播放
        mirror: false, //镜像画面
        ligthOff: false, //关灯模式
        volume: 0, //默认音量大小
        speed: false,
        control: false, //是否显示控制器
        playsinline: false,
        fullscreenToggle: false, //全屏按钮
      },
    });
    // const canvas = ref(null);
    onMounted(async () => {
      // new p5(sth, canvas.value);
    });
    // const sth = (sketch: any) => {
    //   sketch.setup = function () {
    //     sketch.createCanvas(450, 450, sketch.WEBGL);
    //   };
    //   sketch.draw = function () {

    // }
    const infoMethods = {};
    return {
      ...toRefs(data),
      router,
      queryRoute,
      ...infoMethods,
      // canvas,
      isSize,
    };
  },
});
</script>
<style scoped lang='scss'>
@media(max-width: 750px){
  .banner-container {
    background: #000;
  }
  .banner {
    width: 100%;
    height: 100vh;
    background: url("./../../../../assets/images/banner-bg.png") no-repeat top
      center;
    background-size: 1920px;
    position: relative;
    display: flex;
  }
  .banner-box {
    width: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0,0);
    flex-direction: column;
    justify-content: center;
    margin: 0 auto!important;
  }
  .left-img1 {
    margin-top: 0;
  }
  .left-text {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    margin-top: 40px;
    animation: zoomIn; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1s; /* don't forget to set a duration! */
  }
  .text-class {
    text-decoration: underline;
    cursor: pointer;
  }
  :deep(.d-player-wrap) {
    width: 269px !important;
    height: 269px !important;
    pointer-events: none;
    border-radius: 50%;
    margin-top: 50px;
  }
}
@media (min-width: 750px) and (max-width:1280px){
  .banner-container {
    background: #000;
  }
  .banner {
    width: 100%;
    height: 100vh;
    background: url("./../../../../assets/images/banner-bg.png") no-repeat top
      center;
    background-size: 1920px;
    position: relative;
    display: flex;
  }
  .banner-box {
    width: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0,0);
    flex-direction: column;
    justify-content: center;
    margin: 0 auto!important;
  }
  .left-img1 {
    margin-top: 0;
  }
  .left-text {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    margin-top: 40px;
    animation: zoomIn; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1s; /* don't forget to set a duration! */
  }
  .text-class {
    text-decoration: underline;
    cursor: pointer;
  }
  :deep(.d-player-wrap) {
    width: 269px !important;
    height: 269px !important;
    pointer-events: none;
    border-radius: 50%;
    margin-top: 50px;
  }
}
@media (min-width: 1281px) and (max-width:1480px) {
  .banner-container {
    background: #000;
  }
  .banner {
    width: 100%;
    height: 100vh;
    background: url("./../../../../assets/images/banner-bg.png") no-repeat top
      center;
    background-size: 1920px;
    position: relative;
  }
  .banner-box {
    width: 1200px;
    display: flex;
    align-items: center;
    position: absolute;
    justify-content: space-between;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: blue;
  }
  .left-img1 {
    margin-top: 0;
  }
  .left-text {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    margin-top: 88px;
    animation: zoomIn; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1s; /* don't forget to set a duration! */
  }
  .text-class {
    text-decoration: underline;
    cursor: pointer;
  }
  :deep(.d-player-wrap) {
    width: 421px !important;
    height: 100% !important;
    pointer-events: none;
    border-radius: 50%;
  }
}
@media (min-width: 1480px){
  .banner-container {
    background: #000;
  }
  .banner {
    width: 100%;
    height: 100vh;
    background: url("./../../../../assets/images/banner-bg.png") no-repeat top
      center;
    background-size: 1920px;
    position: relative;
  }
  .banner-box {
    width: 1300px;
    display: flex;
    align-items: center;
    position: absolute;
    justify-content: space-between;
    top: 50%;
    left: 50%;
    transform: translate(-50, -50%);
  }
  .left-img1 {
    margin-top: 0;
  }
  .left-text {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    margin-top: 88px;
    animation: zoomIn; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1s; /* don't forget to set a duration! */
  }
  .text-class {
    text-decoration: underline;
    cursor: pointer;
  }
  :deep(.d-player-wrap) {
    width: 491px !important;
    height: 100% !important;
    pointer-events: none;
    border-radius: 50%;
  }
}
@media (min-width: 1680px){
  .banner-container {
    background: #000;
  }
  .banner {
    width: 100%;
    height: 100vh;
    background: url("./../../../../assets/images/banner-bg.png") no-repeat top
      center;
    background-size: 1920px;
    position: relative;
  }
  .banner-box {
    width: 1600px;
    display: flex;
    align-items: center;
    position: absolute;
    justify-content: space-between;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .left-img1 {
    margin-top: 20px;
  }
  .left-text {
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    margin-top: 88px;
    font-family: "JetBrainsMono-Regular";
    animation: zoomIn; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1s; /* don't forget to set a duration! */
  }
  .text-class {
    text-decoration: underline;
    cursor: pointer;
  }
  :deep(.d-player-wrap) {
    width: 561px !important;
    height: 100% !important;
    pointer-events: none;
    border-radius: 50%;
  }
}
</style>