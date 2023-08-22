<template>
  <div class='container' v-if="isSize > 1280">
    <div class="content">
      <div class="random">
        <span class="nbr1 ltr1">L</span>
        <span class="nbr1 ltr1">A</span>
        <span class="nbr1 ltr1">Y</span>
        <span class="nbr1 ltr1">E</span>
        <span class="nbr1 ltr1">R</span>
        <span class="space"></span>
        <span class="nbr1 ltr1" style="margin-left: 40px;">2</span>
        <span style="margin-left: 40px;">_</span> 
      </div>
    </div>
  </div>
  <div class='container' v-if="isSize <= 1280">
    <div class="content">
      <div class="random">
        <span class="nbr1 ltr1">L</span>
        <span class="nbr1 ltr1">A</span>
        <span class="nbr1 ltr1">Y</span>
        <span class="nbr1 ltr1">E</span>
        <span class="nbr1 ltr1">R</span>
        <span class="space"></span>
        <span class="nbr1 ltr1" style="margin-left: 10px;">2</span>
        <span style="margin-left: 10px;"></span> 
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, onMounted, getCurrentInstance,computed } from 'vue'
import {useRouter,useRoute} from 'vue-router'
import $ from "jquery";
import { useMain } from './../../store/index';
export default defineComponent({
  components: {},
  setup() {
    const { proxy } = getCurrentInstance() as any
    const router = useRouter()
    const queryRoute = useRoute()
    const couponStore = useMain();
    const isSize = computed(() => couponStore.handleSize)
    const data = reactive({})
    onMounted(() => {

    })
    $(document).ready(function () {
        var $randomnbr = $(".nbr1");
        var $timer = 18;
        var $it = "" as any;
        var $data = 0;
        var index;
        var change;
        var letters = ["L", "A", "Y", "E", "R","2"];

        $randomnbr.each(function () {
          change = 30
          $(this).attr("data-change", change);
        });
        function random() {
          var arr = [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
          ];
          var idvalue = "";
          var n = 1;
          for (var i = 0; i < n; i++) {
            idvalue += arr[Math.floor(Math.random() * 10)];
          }
          return idvalue;
        }

        function select() {
          return Math.round(Math.random() * $randomnbr.length + 1);
        }

        function value() {
          $(".nbr1:nth-child(" + select() + ")").html("" + random() + "");
          $(".nbr1:nth-child(" + select() + ")").attr("data-number", $data);
          $data++;

          $randomnbr.each(function () {
            if (
              parseInt($(this).attr("data-number")) >
              parseInt($(this).attr("data-change"))
            ) {
              index = $(".ltr1").index(this);
              $(this).html(letters[index]);
              $(this).removeClass("nbr1");
            }
          });
        }
        $it = setInterval(value, $timer);
      });
    const infoMethods = {

    }
    return {
      ...toRefs(data),
      router,
      queryRoute,
      ...infoMethods,
      isSize,
    }
  },
})

</script>
<style scoped lang='scss'>
@media(max-width:750px){
  .random {
    color: #fff;
    font-size: 64px;
    line-height:80px;
    width: calc(100%)!important;
    margin: 0 auto;
    display: flex;
    font-family: 'NEOPIXEL-Regular';
  }
  .random span:nth-child(1){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(3){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(5){
    font-family: 'RMNEue-Regular';
    margin-top: 3px;
  }
  .random span:nth-child(7){
    font-family: 'RMNEue-Regular';
  }
  .random span:nth-child(8){
    background: #fff;
    display: block!important;
    width: 60px;
    height: 8px;
    margin-top: 40px;
  }
}
@media (min-width: 750px) and (max-width:1280px){
  .random {
    color: #fff;
    font-size: 64px;
    line-height:80px;
    width: calc(100%)!important;
    margin: 0 auto;
    display: flex;
    font-family: 'NEOPIXEL-Regular';
  }
  .random span:nth-child(1){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(3){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(5){
    font-family: 'RMNEue-Regular';
    margin-top: 3px;
  }
  .random span:nth-child(7){
    font-family: 'RMNEue-Regular';
  }
  .random span:nth-child(8){
    font-family: 'RMNEue-Regular';
    background: #fff;
    display: block!important;
    width: 60px;
    height: 8px;
    margin-top: 40px;
  }
}
@media (min-width: 1281px) and (max-width:1480px) {
  .random {
    color: #fff;
    font-size: 110px;
    line-height: 140px;
    width: 30px;
    display: flex;
    font-family: 'NEOPIXEL-Regular';
  }
  .random span:nth-child(1){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(3){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(5){
    font-family: 'RMNEue-Regular';
    margin-top: 3px;
  }
  .random span:nth-child(7){
    font-family: 'RMNEue-Regular';
  }
  .random span:nth-child(8){
    font-family: 'RMNEue-Regular';
  }
}
@media (min-width: 1480px) and (max-width:1680px) {
  .random {
    color: #fff;
    font-size: 120px;
    line-height: 140px;
    width: 30px;
    display: flex;
    font-family: 'NEOPIXEL-Regular';
  }
  .random span:nth-child(1){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(3){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(5){
    font-family: 'RMNEue-Regular';
    margin-top: 3px;
  }
  .random span:nth-child(7){
    font-family: 'RMNEue-Regular';
  }
  .random span:nth-child(8){
    font-family: 'RMNEue-Regular';
  }
}
@media (min-width: 1480px) and (max-width:10000px) {
  .random {
    color: #fff;
    font-size: 150px;
    line-height: 140px;
    width: 30px;
    display: flex;
    font-family: 'NEOPIXEL-Regular';
    letter-spacing: 5px;
  }
  .random span:nth-child(1){
    font-family: 'RMNEue-Regular';
    font-size: 145px;
    margin-top: 5px;
  }
  .random span:nth-child(3){
    font-family: 'RMNEue-Regular';
    font-size: 145px;
    margin-top: 5px;
  }
  .random span:nth-child(5){
    font-family: 'RMNEue-Regular';
    font-size: 145px;
    margin-top: 3px;
  }
  .random span:nth-child(7){
    font-family: 'RMNEue-Regular';
    font-size: 145px;
  }
  .random span:nth-child(8){
    font-family: 'RMNEue-Regular';
    font-size: 140px;
  }
}
</style>