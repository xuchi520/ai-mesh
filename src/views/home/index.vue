<template>
  <div class="container">
    <HeaderBar></HeaderBar>
    <Banner></Banner>
    <Title></Title>
    <SwiperPage></SwiperPage>
    <FooterBar></FooterBar>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  onMounted,
  getCurrentInstance,
} from "vue";
import { useRouter, useRoute } from "vue-router";
import HeaderBar from "./../../components/headerBar.vue";
import Banner from "./components/banner/index.vue";
import Title from "./components/title/index.vue";
import SwiperPage from "./components/swiper/index.vue";
import FooterBar from './../../components/footerBar.vue'
export default defineComponent({
  components: { Banner, HeaderBar, Title,SwiperPage,FooterBar },
  setup() {
    const { proxy } = getCurrentInstance() as any;
    const router = useRouter();
    const queryRoute = useRoute();
    const data = reactive({});

    onMounted(() => {
     
    });

    const infoMethods = {};
    return {
      ...toRefs(data),
      router,
      queryRoute,
      ...infoMethods,
    };
  },
});
</script>
<style scoped lang='scss'>
</style>