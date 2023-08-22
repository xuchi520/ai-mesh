<template>
  <div class="container">
    <div class="chartNum">
      <div class="box-item">
        <li
          :class="{ 'number-item': !isNaN(item), 'mark-item': isNaN(item) }"
          v-for="(item, index) in orderNum"
          :key="index"
        >
          <span v-if="!isNaN(item)">
            <i ref="numberItem">0123456789</i>
          </span>
          <span class="comma" v-else>{{ item }}</span>
        </li>
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
  setup(props) {
    const { proxy } = getCurrentInstance() as any;
    const router = useRouter();
    const queryRoute = useRoute();
    const numberItem = ref(null);
    const data = reactive({
      orderNum: ["0"],
    });
    onMounted(() => {
      setTimeout(() => {
        infoMethods.toOrderNum(1); // 这里输入数字即可调用
      }, 500);
    });
    const infoMethods = {
      // 设置文字滚动
      setNumberTransform() {
        const numberItems = numberItem.value;
        const numberArr = data.orderNum.filter((item) => !isNaN(item));
        // 结合CSS 对数字字符进行滚动,显示订单数量
        for (let index = 0; index < numberItems.length; index++) {
          const elem = numberItems[index];
          elem.style.transform = `translate(-50%, -${numberArr[index] * 10}%)`;
        }
      },
      toOrderNum(num:any){
        num = num.toString();
        if (num.length < 1) {
          num = "0" + num; 
          infoMethods.toOrderNum(num);
        } else if (num.length === 1) {
          // 订单数中加入逗号
          // num = num.slice(0, 2) + ',' + num.slice(2, 5) + ',' + num.slice(5, 8)
          data.orderNum = num.split(""); // 将其便变成数据，渲染至滚动数组
        }
        infoMethods.setNumberTransform();
      }
    }
    return {
      ...toRefs(data),
      router,
      queryRoute,
      ...infoMethods,
      numberItem,
    };
  },
});
</script>
<style scoped lang='scss'>
@media (min-width: 750px) and (max-width:1280px){
  .box-item {
    position: relative;
    font-size: 64px;
    text-align: center;
    list-style: none;
    color: #79FBBE;
    writing-mode: vertical-lr;
    text-orientation: upright;
    /*文字禁止编辑*/
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
    /* overflow: hidden; */
  }
  /*滚动数字设置*/
  .number-item {
    width: 30px;
    height: 86px;
    list-style: none;
    margin-right: 5px;
    border-radius:4px;
    & > span {
      position: relative;
      display: inline-block;
      width: 100%;
      height: 100%;
      writing-mode: vertical-rl;
      text-orientation: upright;
      overflow: hidden;
      & > i {
        font-style: normal;
        position: absolute;
        top: 11px;
        left: 50%;
        transform: translate(-50%,0);
        // transition: transform 1s ease-in-out;
        transition: all 1s ease-in-out;
        letter-spacing: 10px;
      }
    }
  }
}
@media screen and (min-width: 1280px) {
  .box-item {
    position: relative;
    font-size: 64px;
    text-align: center;
    list-style: none;
    color: #79FBBE;
    writing-mode: vertical-lr;
    text-orientation: upright;
    /*文字禁止编辑*/
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
    /* overflow: hidden; */
  }
  /*滚动数字设置*/
  .number-item {
    width: 30px;
    height: 86px;
    list-style: none;
    margin-right: 5px;
    border-radius:4px;
    & > span {
      position: relative;
      display: inline-block;
      width: 100%;
      height: 100%;
      writing-mode: vertical-rl;
      text-orientation: upright;
      overflow: hidden;
      & > i {
        font-style: normal;
        position: absolute;
        top: 11px;
        left: 50%;
        transform: translate(-50%,0);
        // transition: transform 1s ease-in-out;
        transition: all 1s ease-in-out;
        letter-spacing: 10px;
      }
    }
  }
}
@media screen and (min-width: 1480px) {
   /*订单总量滚动数字设置*/
   .box-item {
    position: relative;
    font-size: 72px;
    text-align: center;
    list-style: none;
    color: #79FBBE;
    writing-mode: vertical-lr;
    text-orientation: upright;
    /*文字禁止编辑*/
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
    /* overflow: hidden; */
  }
  /*滚动数字设置*/
  .number-item {
    width: 40px;
    height: 95px;
    list-style: none;
    margin-right: 5px;
    border-radius:4px;
    & > span {
      position: relative;
      display: inline-block;
      width: 100%;
      height: 100%;
      writing-mode: vertical-rl;
      text-orientation: upright;
      overflow: hidden;
      & > i {
        font-style: normal;
        position: absolute;
        top: 11px;
        left: 50%;
        transform: translate(-50%,0);
        // transition: transform 1s ease-in-out;
        transition: all 1s ease-in-out;
        letter-spacing: 10px;
      }
    }
  }
}
@media screen and (min-width: 1680px) {
   /*订单总量滚动数字设置*/
   .box-item {
    position: relative;
    height: 115px;
    font-size: 90px;
    text-align: center;
    list-style: none;
    color: #79FBBE;
    writing-mode: vertical-lr;
    text-orientation: upright;
    /*文字禁止编辑*/
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
    /* overflow: hidden; */
  }
  /*滚动数字设置*/
  .number-item {
    width: 50px;
    height: 100px;
    list-style: none;
    margin-right: 5px;
    border-radius:4px;
    & > span {
      position: relative;
      display: inline-block;
      width: 100%;
      height: 100%;
      writing-mode: vertical-rl;
      text-orientation: upright;
      overflow: hidden;
      & > i {
        font-style: normal;
        position: absolute;
        top: 11px;
        left: 50%;
        transform: translate(-50%,0);
        // transition: transform 1s ease-in-out;
        transition: all 1s ease-in-out;
        letter-spacing: 10px;
      }
    }
  }
}
  .number-item:last-child {
    margin-right: 0;
  }
</style>