<template>
  <div class='headerBar-container'>
    <div class="headerBar-box">
      <div class="header-flex">
        <img src="./../assets/images/logo.png" class="logo">
        <div class="title">AiMesh</div>
      </div>
      <div class="nav-logo-box">
        <img src="./../assets/images/navbar-img.png" class="nav-logo">
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, onMounted, getCurrentInstance } from 'vue'
import {useRouter,useRoute} from 'vue-router'
export default defineComponent({
  components: {},
  setup() {
    const { proxy } = getCurrentInstance() as any
    const router = useRouter()
    const queryRoute = useRoute()
    const data = reactive({})
    onMounted(() => {

    })
    const infoMethods = {

    }
    return {
      ...toRefs(data),
      router,
      queryRoute,
      ...infoMethods,
    }
  },
})

</script>
<style scoped lang='scss'>
.headerBar-container{
  background: #000;
}
.headerBar-box{
  width: 100%;
  height: 80px;
  border-bottom: 1px solid rgba(255,255,255,.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-flex{
  display: flex;
  align-items: center;
}
.logo{
  width: 80px;
  height: 80px;
}
.title{
  color: #fff;
  font-weight: bold;
  margin-left: 23px;
}
.nav-logo-box{
  width: 80px;
  height: 80px;
  border-left: 1px solid rgba(255,255,255,.3);
  position: relative;
}
.nav-logo{
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>