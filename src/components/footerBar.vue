<template>
  <div class="footer-container">
    <div class="footer-logo">
      <img src="./../assets/images/logo.png" class="footer-logo-img" />
      <div class="footer-logo-box">
        <div class="logo-name">AiMesh</div>
        <div class="right-up-box" @click="goTop" ref="totop">
          <img src="./../assets/images/short_up.png" class="up-icon" />
        </div>
      </div>
    </div>
    <div class="footer-content">
        <div class="footer-content-left">
          <div class="title-name">[ SOCIAL ]</div>
          <div style="line-height: 21.6px;margin-top: 25px; font-size: 18px;font-weight: 300;line-height: 26px;cursor: pointer;">
          <a href="https://twitter.com/AiMesh_" target="_blank">
            <div >Twitter</div>
          </a>
          <!-- <div>Linkedin</div> -->
          <!-- <div>Discord</div> -->
          <!-- <div>Telegram</div> -->
          <div class="footer-version">©2023 ai mesh</div>
          </div>
        </div>
        <div class="footer-content-body">
          <div class="title-name">[ CONTENT ]</div>
          <div style="line-height: 21.6px;margin-top: 25px;font-size: 18px;font-weight: 300;line-height: 26px;cursor: pointer;">
            <a href="https://aimesh.gitbook.io/doc/" target="_blank" style="display: flex; align-items: center;">
              <div>Document</div>
            </a>
          <!-- <div>Whitepaper</div> -->
          <!-- <div>Github</div> -->
          <!-- <div>Blog</div> -->
          </div>
        </div>
        <div class="footer-content-right">
          <div class="title-name">[ GET IN TOUCH ]</div>
          <div style="margin-top: 25px;font-size: 18px;font-weight: 300;line-height: 26px;">
            <div>hello@aimesh.con</div>
            <div class="footer-version1">ALL RIGHTS RESERVED</div>
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
export default defineComponent({
  components: {},
  setup() {
    const { proxy } = getCurrentInstance() as any;
    const router = useRouter();
    const queryRoute = useRoute();
    const data = reactive({});
    const totop = ref();
    onMounted(() => {
      window.onscroll = function () {
        // 获取浏览器卷去的高度
        let high =
          document.documentElement.scrollTop || document.body.scrollTop; //兼容各浏览器
        if (high >= 900) {
          totop.value.style.display = "block";
        } else {
          totop.value.style.display = "none";
        }
      };
    });
    const infoMethods = {
      goTop() {
        window.scrollTo({
          top: 0, //回到顶部
          left: 0,
          behavior: "smooth", //smooth 平滑；auto:瞬间
        });
      },
      Twitter(){
          window.location.href = 'https://twitter.com/AiMesh_'
          window.event.returnValue = false
      },
      goDocument(){
          window.location.href = 'https://aimesh.gitbook.io/doc/'
          window.event.returnValue = false
      }
    };
    return {
      ...toRefs(data),
      router,
      queryRoute,
      ...infoMethods,
      totop,
    };
  },
});
</script>
<style scoped lang='scss'>
  .footer-container {
    width: 100%;
    height: 382px;
    background: #000;
    color: #fff;
  }
  .footer-logo {
    display: flex;
    align-items: center;
  }
  .footer-logo-box {
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 22px;
  }
  .logo-name {
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    margin-left: 23px;
  }
  .footer-logo-img {
    width: 80px;
    height: 80px;
    margin-top: 22px;
  }
  .right-up-box {
    width: 80px;
    height: 100%;
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    position: relative;
  }
  .up-icon {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
  .footer-content{
    width: 800px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    float: right;
    margin-top: 23px;
    margin-right: 80px;
  }
  .title-name{
    font-size: 18px;
    font-weight: 400;
    letter-spacing: -0.054;
  }
  .footer-version{
    margin-top: 120px;
    opacity: 0.4;
    font-size: 14px;
  }
  .footer-version1{
    margin-top: 120px;
    opacity: 0.4;
    font-size: 14px;
  }
</style>