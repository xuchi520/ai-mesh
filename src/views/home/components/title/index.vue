<template>
  <div class="title-container">
    <div class="title-box" v-if="testShow1">
      <div class="title-text">There is tremendous computing</div>
      <div class="title-text">power for AI hidden in the existing</div>
      <div class="title-text">graphics cards.</div>
    </div>
    <div class="title-bottom-box" ref="scrollRef">
      <div class="title-bottom-flex" v-if="testShow">
        <div class="title-number-box">
          <NumberTime :num="num1"></NumberTime>
          <div class="number">M</div>
          <div class="introduction1">
            <div>Discrete graphics cards</div>
            <div>are produced in the</div>
            <div>past 10 years</div>
          </div>
        </div>
        <div class="title-number-box">
          <NumberTime :num="num2"></NumberTime>
          <div class="number">M</div>
          <div class="introduction2">
            <div>CUDA-enabled discrete</div>
            <div>graphics cards are</div>
            <div>produced in the last 5 years</div>
          </div>
        </div>
        <div class="title-number-box1">
          <div class="number-text">{{ "<" }}</div>
          <NumberTime1></NumberTime1>
          <div class="number1">M</div>
          <div class="introduction3">are currently working for AI</div>
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
  ref,
} from "vue";
import { useRouter, useRoute } from "vue-router";
import NumberTime from "./../../../../components/numberTime.vue";
import NumberTime1 from "./../../../../components/numberTime1.vue";
export default defineComponent({
  components: { NumberTime, NumberTime1 },
  setup() {
    const { proxy } = getCurrentInstance() as any;
    const router = useRouter();
    const queryRoute = useRoute();
    const scrollRef = ref()
    const data = reactive({
      num1: 400,
      num2: 160,
      testShow:false,
      testShow1:false,
    });
    onMounted(() => {
      window.addEventListener("scroll", infoMethods.handleScroll);
    });
    const infoMethods = {
    handleScroll() {
      let scrollTops = document.documentElement.scrollTop
      let currentScroll = window.pageYOffset + 200; //表示当前滚动的位置
      let viewHeight = window.innerHeight;//视口高度
      if (currentScroll > viewHeight) {
        data.testShow = true;
      } else {
        data.testShow = false;
      }
      if(scrollTops > 150){
        data.testShow1 = true;
      }
      else {
        data.testShow1 = false;
      }
     }
    };
    return {
      ...toRefs(data),
      router,
      queryRoute,
      ...infoMethods,
      scrollRef,
    };
  },
});
</script>
<style scoped lang='scss'>
.title-bottom-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 64px;
}
.title-number-box {
  display: flex;
  align-items: center;
}
.title-number-box1 {
  display: flex;
  align-items: center;
}
@media screen and (min-width: 1280px) {
  .title-container {
    height: 1100px;
    background: #000;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    position: relative;
  }
  .title-box {
    color: #fff;
    font-size: 48px;
    letter-spacing: -0.192px;
    margin: 140px 80px 0 80px;
    font-family: 'RMNEue-Regular';
    animation: backInLeft; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1.5s; /* don't forget to set a duration! */
  }
  .title-bottom-box {
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    margin: 180px 80px 0 80px;
  }
  .introduction1 {
    display: block;
    width: 180px;
    color: #fff;
    font-size: 14px;
    letter-spacing: -0.06px;
    margin-left: 20px;
    font-family: 'RMNEue-Regular';
    margin-top: -5px;
  }
  .introduction2 {
    display: block;
    width: 210px;
    color: #fff;
    font-size: 14px;
    letter-spacing: -0.06px;
    margin-left: 20px;
    font-family: 'RMNEue-Regular';
    margin-top: -5px;
  }
  .introduction3 {
    display: block;
    width: 158px;
    // height: 82px;
    color: #79fbbe;
    font-size: 14px;
    margin-top: -25px;
    letter-spacing: -0.06px;
    margin-left: 20px;
    font-family: 'RMNEue-Regular';
    margin-top: -5px;
  }
  .number {
    font-size: 64px;
    color: #fff;
    margin-left: 13px;
    font-family: 'JetBrainsMono-Regular';
  }
  .number-text{
    font-size: 64px;
    color: #79fbbe;
    margin-top: 0px;
    margin-right: -10px;
  }
  .number1 {
    font-size: 64px;
    color: #79fbbe;
    margin-left: 10px;
    font-family: 'JetBrainsMono-Regular';
  }
}
@media screen and (min-width: 1480px) {
  .title-container {
    height: 1100px;
    background: #000;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    position: relative;
  }
  .title-box {
    color: #fff;
    font-size: 48px;
    letter-spacing: -0.192px;
    margin: 140px 80px 0 80px;
    font-family: 'RMNEue-Regular';
    animation: backInLeft; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1.5s; /* don't forget to set a duration! */
  }
  .title-bottom-box {
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    margin: 180px 80px 0 80px;
  }
  .introduction1 {
    display: block;
    width: 180px;
    color: #fff;
    font-size: 16px;
    letter-spacing: -0.06px;
    margin-left: 24px;
    font-family: 'RMNEue-Regular';
    margin-top: -5px;
  }
  .introduction2 {
    display: block;
    width: 210px;
    color: #fff;
    font-size: 16px;
    letter-spacing: -0.06px;
    margin-left: 24px;
    font-family: 'RMNEue-Regular';
    margin-top: -5px;
  }
  .introduction3 {
    display: block;
    width: 158px;
    // height: 82px;
    color: #79fbbe;
    font-size: 16px;
    margin-top: -25px;
    letter-spacing: -0.06px;
    margin-left: 24px;
    font-family: 'RMNEue-Regular';
    margin-top: -5px;
  }
  .number {
    font-size: 72px;
    color: #fff;
    margin-left: 15px;
    font-family: 'JetBrainsMono-Regular';
  }
  .number-text{
    font-size: 72px;
    color: #79fbbe;
    margin-top: -5px;
    margin-right: -10px;
  }
  .number1 {
    font-size: 72px;
    color: #79fbbe;
    margin-left: 5px;
    font-family: 'JetBrainsMono-Regular';
  }
}
@media screen and (min-width: 1680px) {
  .title-container {
    height: 1400px;
    background: #000;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    position: relative;
  }
  .title-box {
    color: #fff;
    font-size: 64px;
    letter-spacing: -0.192px;
    margin: 150px 80px 0 80px;
    font-family: 'RMNEue-Regular';
    animation: backInLeft; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1.5s; /* don't forget to set a duration! */
  }
  .title-bottom-box {
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    margin: 180px 80px 0 80px;
  }
  .introduction1 {
    display: block;
    width: 220px;
    color: #fff;
    font-size: 20px;
    letter-spacing: -0.06px;
    margin-left: 30px;
    font-family: 'RMNEue-Regular';
    margin-top: -5px;
  }
  .introduction2 {
    display: block;
    width: 260px;
    color: #fff;
    font-size: 20px;
    letter-spacing: -0.06px;
    margin-left: 30px;
    font-family: 'RMNEue-Regular';
    margin-top: -5px;
  }
  .introduction3 {
    display: block;
    width: 132px;
    height: 82px;
    color: #79fbbe;
    font-size: 20px;
    letter-spacing: -0.06px;
    margin-left: 30px;
    margin-top: 0px;
    font-family: 'RMNEue-Regular';
    margin-top: -5px;
  }
  .number {
    font-size: 90px;
    color: #fff;
    margin-left: 20px;
    font-family: 'JetBrainsMono-Regular';
  }
  .number-text{
    font-size: 90px;
    color: #79fbbe;
    margin-top: -10px;
    margin-right: -20px;
  }
  .number1 {
    font-size: 90px;
    color: #79fbbe;
    font-family: 'JetBrainsMono-Regular';
  }
}
</style>