<template>
  <div class="swiper-container">
    <div>
      <div :class="isShow == true?'title-box1':'title-box'">
      <div class="title">The AI-specific layer2 designed for</div>
      <div class="title">incentivizing decentral-idle GPUs worldwide</div>
      <div class="title">to supply computing power to AI.</div>
    </div>
    <div :class="isShow == true?'title-content1':'title-content'">
      <div class="title-content-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat
        imperdiet luctus. Quisque bibendum quam eu lacus bibendum cursus.
        Maecenas a ligula quam. Morbi cursus, quam et pulvinar blandit, ligula
        odio sodales est, et bibendum est lectus aliquet nulla. Maecenas
      </div>
      <div class="title-content-right">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat
        imperdiet luctus. Quisque bibendum quam eu lacus bibendum cursus.
        Maecenas a ligula quam. Morbi cursus, quam et pulvinar blandit, ligula
        odio sodales est, et bibendum est lectus aliquet nulla. Maecenas
      </div>
    </div>
    </div>
    <swiper class="my-swiper" 
    :breakpoints="breakpoints"
    :spaceBetween="20" 
    :loop="true"
    :observer="true"
    :observeParents="true"
    :modules="modules"
    navigation
    >
      <swiper-slide class="swiper-item">
        <div class="item-swiper">
          <div class="top-content">
            <div class="item-number">[02]</div>
            <div class="content-box">
              <div>Optimistic</div>
              <div>Machine Learning</div>
            </div>
            <div class="footer-box">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat imperdiet luctus. Quisque bibendum quam eu lacus bibendum cursus. Maecenas a ligula quam. Morbi cursus, quam et pulvinar blandit, ligula odio sodales est, et bibendum est lectus aliquet nulla.</div>
          </div>
          <div class="swiper-img2"></div>
          <div class="item-swiper-class"></div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="item-swiper">
          <div class="top-content">
            <div class="item-number">[03]</div>
            <div class="content-box">
              <div>Private</div>
              <div>Preserving</div>
            </div>
            <div class="footer-box">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat imperdiet luctus. Quisque bibendum quam eu lacus bibendum cursus. Maecenas a ligula quam. Morbi cursus, quam et pulvinar blandit, ligula odio sodales est, et bibendum est lectus aliquet nulla.</div>
          </div>
          <div class="swiper-img3"></div>
          <div class="item-swiper-class"></div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="item-swiper">
          <div class="top-content">
            <div class="item-number">[01]</div>
            <div class="content-box">
              <div>Decentralized Inference</div>
              <div>for Large Models</div>
            </div>
            <div class="footer-box">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat imperdiet luctus. Quisque bibendum quam eu lacus bibendum cursus. Maecenas a ligula quam. Morbi cursus, quam et pulvinar blandit, ligula odio sodales est, et bibendum est lectus aliquet nulla.</div>
          </div>
          <div class="swiper-img1"></div>
          <div class="item-swiper-class"></div>
        </div>
      </swiper-slide>
    </swiper>
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
  nextTick
} from "vue";
import { useRouter, useRoute } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue"; // swiper所需组件
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Scrollbar, Autoplay } from "swiper";
export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const modules: any = ref([Navigation, Scrollbar, Autoplay]);
    const { proxy } = getCurrentInstance() as any;
    const router = useRouter();
    const queryRoute = useRoute();
    const isScroll = ref(0)
    const data = reactive({
      breakpoints: {
        1024: {
          //当屏幕宽度大于等于320
          slidesPerView: 1.7,
        },
        1280: {
          //当屏幕宽度大于等于776
          slidesPerView: 1.7,
        },
        1480: {
          //当屏幕宽度大于等于1000
          slidesPerView: 1.97,
        },
        1680: {
          //当屏幕宽度大于等于1000
          slidesPerView: 1.84,
        },
        1920: {
          //当屏幕宽度大于等于1200
          slidesPerView: 1.84,
        },
      } as any,
      isShow:false,
    });
    onMounted(() => {
      window.addEventListener("scroll", infoMethods.handleScroll);
    });
    const infoMethods = {
      handleScroll() {
      let currentScroll = window.pageYOffset; //表示当前滚动的位置
      if(window.innerWidth - 0 > 1200){
        let viewHeight = window.innerHeight + 1370;//视口高度
        if (currentScroll > viewHeight) {
        data.isShow = true;
      } else {
        data.isShow = false;
      }
      }
      if(window.innerWidth - 0 > 1600) {
        let viewHeight = window.innerHeight + 1700;//视口高度
        if (currentScroll > viewHeight) {
        data.isShow = true;
      } else {
        data.isShow = false;
      }
      }
     }
    };
    return {
      ...toRefs(data),
      router,
      queryRoute,
      ...infoMethods,
      modules,
      isScroll,
    };
  },
});
</script>
<style scoped lang='scss'>
@media screen and (min-width: 750px) {

}
@media screen and (min-width: 1280px) {
  .swiper-container {
    width: 100%;
    height: 1200px;
    background: #101010;
    position: relative;
  }
  .title-box {
    width: 980px;
    margin-left: 80px;
    padding-top: 140px;
    box-sizing: border-box;
    color: #fff;
    font-size: 48px;
    letter-spacing: -0.192px;
    line-height: 52.8px;
    font-weight: 400;
    font-family: 'RMNEue-Regular';
  }
  .title-box1 {
    width: 980px;
    margin-left: 80px;
    padding-top: 140px;
    box-sizing: border-box;
    color: #fff;
    font-size: 48px;
    letter-spacing: -0.192px;
    line-height: 52.8px;
    font-weight: 400;
    font-family: 'RMNEue-Regular';
    opacity: .2;
  }
  .title-content {
    font-size: 16px;
    color: #fff;
    line-height: 19.2px;
    font-weight: 300;
    margin-top: 72px;
    margin-left: 80px;
    display: flex;
    align-items: center;
  }
  .title-content1 {
    font-size: 16px;
    color: #fff;
    line-height: 19.2px;
    font-weight: 300;
    margin-top: 72px;
    margin-left: 80px;
    display: flex;
    align-items: center;
    opacity: .7;
  }
  .title-content-left {
    width: 425px;
  }
  .title-content-right {
    margin-left: 20px;
    width: 425px;
  }
  .my-swiper {
    width: 100%;
    position: relative;
    padding-top: 190px;
    box-sizing: border-box;
  }
  .item-swiper {
    width: 738px;
    height: 387px;
    border-radius: 32px;
    border: 1px dashed rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 80px;
  }
  .top-content {
    margin-left: 40px;
    display: flex;
    flex-direction: column;
  }
  .content-box {
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    margin-top: 24px;
  }
  .footer-box {
    width: 340px;
    height: 116px;
    color: #fff;
    font-size: 16px;
    font-weight: 300;
    line-height: 19.2px;
    margin-top: 24px;
  }
  .swiper-img1 {
    width: 206px;
    height: 247px;
    object-fit: cover;
    margin-right: 73px;
    background: url('./../../../../assets/images/swiper-img2.png') no-repeat;
    background-size: 100%,100%;
    object-fit: cover;
  }
  .swiper-img2 {
    width: 242px;
    height: 242px;
    object-fit: cover;
    margin-right: 73px;
    background: url('./../../../../assets/images/swiper-img1.png') no-repeat;
    background-size: 100%,100%;
    object-fit: cover;
  }
  .swiper-img3 {
    width: 242px;
    height: 242px;
    object-fit: cover;
    margin-right: 73px;
    background: url('./../../../../assets/images/swiper-img3.png') no-repeat;
    background-size: 100%,100%;
    object-fit: cover;
  }
  .swiper {
    --swiper-navigation-size: 0; /* 设置按钮大小 */
    :deep(.swiper-button-prev, .swiper-rtl .swiper-button-next) {
      font-size: 0 !important;
    }
    :deep(.swiper-button-prev) {
      width: 64px;
      height: 64px;
      background: url("./../../../../assets/images/swiper-left-icon.png")
        no-repeat;
      background-size: 100%, 100%;
      top: 20px;
      left: 89%;
      transform: translate(-50%, 50%);
    }
    :deep(.swiper-button-next) {
      width: 64px;
      height: 64px;
      background: url("./../../../../assets/images/swiper-right-icon.png")
        no-repeat;
      background-size: 100%, 100%;
      top: 20px;
      left: 95%;
      transform: translate(-50%, 50%);
    }
  }
}
@media screen and (min-width: 1480px) {
  .swiper-container {
    width: 100%;
    height: 1200px;
    background: #101010;
    position: relative;
  }
  .title-box {
    width: 980px;
    margin-left: 80px;
    padding-top: 140px;
    box-sizing: border-box;
    color: #fff;
    font-size: 48px;
    letter-spacing: -0.192px;
    line-height: 52.8px;
    font-weight: 400;
    font-family: 'RMNEue-Regular';
  }
  .title-box1 {
    width: 980px;
    margin-left: 80px;
    padding-top: 140px;
    box-sizing: border-box;
    color: #fff;
    font-size: 48px;
    letter-spacing: -0.192px;
    line-height: 52.8px;
    font-weight: 400;
    font-family: 'RMNEue-Regular';
    opacity: .2;
  }
  .title-content {
    font-size: 16px;
    color: #fff;
    line-height: 19.2px;
    font-weight: 300;
    margin-top: 72px;
    margin-left: 80px;
    display: flex;
    align-items: center;
  }
  .title-content1 {
    font-size: 16px;
    color: #fff;
    line-height: 19.2px;
    font-weight: 300;
    margin-top: 72px;
    margin-left: 80px;
    display: flex;
    align-items: center;
    opacity: .7;
  }
  .title-content-left {
    width: 425px;
  }
  .title-content-right {
    margin-left: 20px;
    width: 425px;
  }
  .my-swiper {
    width: 100%;
    position: relative;
    padding-top: 190px;
    box-sizing: border-box;
  }
  .item-swiper {
    width: 738px;
    height: 387px;
    border-radius: 32px;
    border: 1px dashed rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 80px;
    position: relative;
    overflow: hidden;
  }
  .top-content {
    margin-left: 40px;
    display: flex;
    flex-direction: column;
  }
  .content-box {
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    margin-top: 24px;
  }
  .item-number{
    color: #fff;
    opacity: 0.6;
    font-size: 14px;
    font-weight: 500;
  }
  .item-swiper-class{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50px;
    height: 50px;
    opacity: .5;
    border-radius: 50%;
  }
  .item-swiper:hover .item-swiper-class{
    transform: scale(25);
    background: linear-gradient(135deg, #30E9DE 0%, #79FBBE 100%);
    transition: all .5s ease-in-out;
    z-index: -1;
    overflow: hidden;
    opacity: 0.8;
  }
  .item-swiper:hover .content-box{
    color: #000;
    font-size: 24px;
    font-weight: 500;
    margin-top: 24px;
  }
  .footer-box {
    width: 340px;
    height: 116px;
    color: #fff;
    font-size: 16px;
    font-weight: 300;
    line-height: 19.2px;
    margin-top: 24px;
  }
  .item-swiper:hover .footer-box{
    width: 340px;
    height: 116px;
    color: #000;
    font-size: 16px;
    font-weight: 300;
    line-height: 19.2px;
    margin-top: 24px;
  }
  .item-swiper:hover .item-number{
    color: #000;
    opacity: 0.6;
    font-size: 14px;
    font-weight: 500;
  }
  .swiper-img1 {
    width: 206px;
    height: 247px;
    object-fit: cover;
    margin-right: 73px;
    background: url('./../../../../assets/images/swiper-img2.png') no-repeat;
    background-size: 100%,100%;
    object-fit: cover;
  }
  .swiper-img2 {
    width: 242px;
    height: 242px;
    object-fit: cover;
    margin-right: 73px;
    background: url('./../../../../assets/images/swiper-img1.png') no-repeat;
    background-size: 100%,100%;
    object-fit: cover;
  }
  .swiper-img3 {
    width: 242px;
    height: 242px;
    object-fit: cover;
    margin-right: 73px;
    background: url('./../../../../assets/images/swiper-img3.png') no-repeat;
    background-size: 100%,100%;
    object-fit: cover;
  }
  .item-swiper:hover .swiper-img1 {
    width: 206px;
    height: 247px;
    object-fit: cover;
    margin-right: 73px;
    background: url('./../../../../assets/images/swiper-img22.png') no-repeat;
    background-size: 100%,100%;
    object-fit: cover;
  }
  .item-swiper:hover .swiper-img2 {
    width: 242px;
    height: 242px;
    object-fit: cover;
    margin-right: 73px;
    background: url('./../../../../assets/images/swiper-img11.png') no-repeat;
    background-size: 100%,100%;
    object-fit: cover;
  }
  .item-swiper:hover .swiper-img3 {
    width: 242px;
    height: 242px;
    object-fit: cover;
    margin-right: 73px;
    background: url('./../../../../assets/images/swiper-img33.png') no-repeat;
    background-size: 100%,100%;
    object-fit: cover;
  }
  .swiper {
    --swiper-navigation-size: 0; /* 设置按钮大小 */
    :deep(.swiper-button-prev, .swiper-rtl .swiper-button-next) {
      font-size: 0 !important;
    }
    :deep(.swiper-button-prev) {
      width: 64px;
      height: 64px;
      background: url("./../../../../assets/images/swiper-left-icon.png")
        no-repeat;
      background-size: 100%, 100%;
      top: 20px;
      left: 89%;
      transform: translate(-50%, 50%);
    }
    :deep(.swiper-button-next) {
      width: 64px;
      height: 64px;
      background: url("./../../../../assets/images/swiper-right-icon.png")
        no-repeat;
      background-size: 100%, 100%;
      top: 20px;
      left: 95%;
      transform: translate(-50%, 50%);
    }
  }
}
@media screen and (min-width: 1680px) {
  .swiper-container {
    width: 1920px;
    height: 1434px;
    background: #101010;
  }
  .title-box {
    width: 1240px;
    margin-left: 80px;
    padding-top: 150px;
    box-sizing: border-box;
    color: #fff;
    font-size: 60px;
    letter-spacing: -0.192px;
    line-height: 70.4px;
    font-weight: 400;
    font-family: 'RMNEue-Regular';
  }
  .title-box1 {
    width: 1240px;
    margin-left: 80px;
    padding-top: 150px;
    box-sizing: border-box;
    color: #fff;
    font-size: 60px;
    letter-spacing: -0.192px;
    line-height: 70.4px;
    font-weight: 400;
    font-family: 'RMNEue-Regular';
    opacity: .2;
  }
  .title-content {
    font-size: 20px;
    color: #fff;
    line-height: 24px;
    font-weight: 300;
    margin-top: 90px;
    margin-left: 80px;
    display: flex;
    align-items: center;
  }
  .title-content1 {
    font-size: 20px;
    color: #fff;
    line-height: 24px;
    font-weight: 300;
    margin-top: 90px;
    margin-left: 80px;
    display: flex;
    align-items: center;
    opacity: .7;
  }
  .title-content-left {
    width: 425px;
  }
  .title-content-right {
    margin-left: 20px;
    width: 425px;
  }
  .my-swiper {
    width: 100%;
    position: relative;
    padding-top: 190px;
    box-sizing: border-box;
  }
  .swiper-item{
    position: relative;
    width: 1018px;
    height: 508px;
  }
  .item-swiper {
    width: 1018px;
    height: 508px;
    border-radius: 32px;
    border: 1px dashed rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 88px;
    position: relative;
    overflow: hidden;
  }
  .item-swiper-class{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50px;
    height: 50px;
    opacity: .5;
    border-radius: 50%;
  }
  .item-swiper:hover .item-swiper-class{
    transform: scale(25);
    background: linear-gradient(135deg, #30E9DE 0%, #79FBBE 100%);
    transition: all .5s ease-in-out;
    z-index: -1;
    overflow: hidden;
    opacity: 0.8;
  }
  .item-swiper:hover .content-box{
    color: #000;
    font-size: 32px;
    font-weight: 500;
    margin-top: 80px;
  }
  .item-swiper:hover .footer-box{
    color: #000;
    width: 442px;
    height: 134px;
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;
    margin-top: 70px;
  }
  .item-swiper:hover .item-number{
    color: #000;
    opacity: 0.6;
    font-size: 14px;
    font-weight: 500;
  }
  .item-swiper:hover .swiper-img1 {
    width: 275px;
    height: 328px;
    object-fit: cover;
    margin-right: 95px;
    background: url('./../../../../assets/images/swiper-img22.png') no-repeat;
    background-size: 100%,100%;
    object-fit: cover;
  }
  .item-swiper:hover .swiper-img2 {
    width: 322px;
    height: 322px;
    object-fit: cover;
    margin-right: 95px;
    background: url('./../../../../assets/images/swiper-img11.png') no-repeat;
    background-size: 100%,100%;
    object-fit: cover;
  }
  .item-swiper:hover .swiper-img3 {
    width: 322px;
    height: 322px;
    object-fit: cover;
    margin-right: 95px;
    background: url('./../../../../assets/images/swiper-img33.png') no-repeat;
    background-size: 100%,100%;
    object-fit: cover;
  }
  .item-number{
    color: #fff;
    opacity: 0.6;
    font-size: 14px;
    font-weight: 500;
  }
  .top-content {
    margin-left: 45px;
    display: flex;
    flex-direction: column;
  }
  .content-box {
    color: #fff;
    font-size: 32px;
    font-weight: 500;
    margin-top: 80px;
  }
  .footer-box {
    width: 442px;
    height: 134px;
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;
    margin-top: 70px;
  }
  .swiper-img1 {
    width: 275px;
    height: 328px;
    object-fit: cover;
    margin-right: 95px;
    background: url('./../../../../assets/images/swiper-img2.png') no-repeat;
    background-size: 100%,100%;
    object-fit: cover;
  }
  .swiper-img2 {
    width: 322px;
    height: 322px;
    object-fit: cover;
    margin-right: 95px;
    background: url('./../../../../assets/images/swiper-img1.png') no-repeat;
    background-size: 100%,100%;
    object-fit: cover;
  }
  .swiper-img3 {
    width: 322px;
    height: 322px;
    object-fit: cover;
    margin-right: 95px;
    background: url('./../../../../assets/images/swiper-img3.png') no-repeat;
    background-size: 100%,100%;
    object-fit: cover;
  }
  .swiper {
    --swiper-navigation-size: 0; /* 设置按钮大小 */
    :deep(.swiper-button-prev, .swiper-rtl .swiper-button-next) {
      font-size: 0 !important;
    }
    :deep(.swiper-button-prev) {
      width: 80px;
      height: 80px;
      background: url("./../../../../assets/images/swiper-left-icon.png")
        no-repeat;
      background-size: 100%, 100%;
      top: 20px;
      left: 89%;
      transform: translate(-50%, 50%);
    }
    :deep(.swiper-button-next) {
      width: 80px;
      height: 80px;
      background: url("./../../../../assets/images/swiper-right-icon.png")
        no-repeat;
      background-size: 100%, 100%;
      top: 20px;
      left: 95%;
      transform: translate(-50%, 50%);
    }
  }
}
</style>