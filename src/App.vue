<template>
  <div id="app">
    <router-view v-if="isRouterAlive" >
    </router-view>
  </div>
</template>

<script lang='ts'>
import { defineComponent,reactive,toRefs,provide,nextTick,onMounted} from 'vue'
import useHook from './../common/useHook'
// import Vconsole from "vconsole";
// const vconsole = new Vconsole()
export default defineComponent({
  name: '',
  setup() {
    const { handleScroll } = useHook()
    const data = reactive({
      isRouterAlive: true
    })
    // 局部组件刷新
    const reload = () => {
      data.isRouterAlive = false;
      nextTick(() => {
        data.isRouterAlive = true;
      });
    };
    provide("reload", reload);
    onMounted(() => {
      handleScroll()
    })
    return {
      ...toRefs(data),
      reload,
    }
  },
})

</script>
<style lang='scss'>
#app{
  min-height: 100vh;
  -webkit-overflow-scrolling: touch;
  background-color: #e6e6e6;
}
* {
  margin: 0;
  padding: 0;
}
a{
  color: #fff;
  font-size: 18px;
  text-decoration: none;
}
</style>