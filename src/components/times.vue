<template>
  <div class="container" v-if="isSize > 1280">
    <div class="content">
      <div class="random">
        <span class="nbr ltr">A</span>
        <span class="nbr ltr">I</span>
        <span>-</span>
        <span class="nbr ltr">S</span>
        <span class="nbr ltr">P</span>
        <span class="space"></span>
        <span>E</span>
        <span class="nbr ltr">C</span>
        <span class="nbr ltr">I</span>
        <span class="nbr ltr">F</span>
        <span class="nbr ltr">I</span>
        <span class="nbr ltr">C</span>
      </div>
    </div>
  </div>
  <div class="container" v-if="isSize <= 1280">
    <div class="content">
      <div class="random">
        <span class="nbr ltr">A</span>
        <span class="nbr ltr">I</span>
        <span>-</span>
      </div>
      <div class="random1">
        <span class="nbr ltr">S</span>
        <span class="nbr ltr">P</span>
        <span class="space"></span>
        <span>E</span>
        <span class="nbr ltr">C</span>
        <span class="nbr ltr">I</span>
        <span class="nbr ltr">F</span>
        <span class="nbr ltr">I</span>
        <span class="nbr ltr">C</span>
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
  computed,
} from "vue";
import { useRouter, useRoute } from "vue-router";
import $ from "jquery";
import { useMain } from './../../store/index';
export default defineComponent({
  components: {},
  setup() {
    const { proxy } = getCurrentInstance() as any;
    const router = useRouter();
    const queryRoute = useRoute();
    const couponStore = useMain();
    const isSize = computed(() => couponStore.handleSize)
    const data = reactive({});
    onMounted(() => {
      $(document).ready(function () {
        var $randomnbr = $(".nbr");
        var $timer = 20;
        var $it = "" as any;
        var $data = 0;
        var index;
        var change;
        var letters = ["A","I","S", "P", "C", "I", "F","I","C"];

        $randomnbr.each(function () {
          change = 20;
          $(this).attr("data-change", change);
        });
        function random() {
          var arr = [
            "A",
            "I",
            "S",
            "P",
            "E",
            "C",
            "I",
            "F",
            "I",
            "C",
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
          $(".nbr:nth-child(" + select() + ")").html("" + random() + "");
          $(".nbr:nth-child(" + select() + ")").attr("data-number", $data);
          $data++;

          $randomnbr.each(function () {
            if (
              parseInt($(this).attr("data-number")) >
              parseInt($(this).attr("data-change"))
            ) {
              index = $(".ltr").index(this);
              $(this).html(letters[index]);
              $(this).removeClass("nbr");
            }
          });
        }
        $it = setInterval(value, $timer);
      });
    });
    const infoMethods = {};
    return {
      ...toRefs(data),
      router,
      queryRoute,
      ...infoMethods,
      isSize,
    };
  },
});
</script>
<style scoped lang='scss'>
@media (max-width:750px){
  .random {
    color: #30e9de;
    font-size: 64px;
    line-height:100%;
    width: calc(100%)!important;
    margin: 0 auto;
    font-family: 'NEOPIXEL-Regular';
    display: flex;
    flex-wrap: wrap;
    margin-top: 72px;
  }
  .random1 {
    color: #30e9de;
    font-size: 64px;
    line-height:100%;
    width: calc(100%)!important;
    margin: 0 auto;
    font-family: 'NEOPIXEL-Regular';
    display: flex;
    flex-wrap: wrap;
  }
  .random span:nth-child(1){
    font-family: 'RMNEue-Regular';
  }
  .random span:nth-child(2){
    font-family: 'RMNEue-Regular';
  }
  .random span:nth-child(3){
    font-family: 'RMNEue-Regular';
  }
  .random1 span:nth-child(1){
    font-family: 'RMNEue-Regular';
    margin-top: 3px;
  }
  .random1 span:nth-child(4){
    font-family: 'RMNEue-Regular';
    margin-top: 3px;
  }
  .random1 span:nth-child(7){
    font-family: 'RMNEue-Regular';
    margin-top: 3px;
  }
  .random1 span:nth-child(9){
    font-family: 'RMNEue-Regular';
    margin-top: 3px;
  }
  .random span:nth-child(10){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(11){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(12){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
}
@media (min-width: 750px) and (max-width:1200px){
  .random {
    color: #30e9de;
    font-size: 64px;
    line-height:100%;
    width: calc(100%)!important;
    margin: 0 auto;
    font-family: 'NEOPIXEL-Regular';
    display: flex;
    flex-wrap: wrap;
    margin-top: 72px;
  }
  .random1 {
    color: #30e9de;
    font-size: 64px;
    line-height:100%;
    width: calc(100%)!important;
    margin: 0 auto;
    font-family: 'NEOPIXEL-Regular';
    display: flex;
    flex-wrap: wrap;
  }
  .random span:nth-child(1){
    font-family: 'RMNEue-Regular';
  }
  .random span:nth-child(2){
    font-family: 'RMNEue-Regular';
  }
  .random span:nth-child(3){
    font-family: 'RMNEue-Regular';
  }
  .random1 span:nth-child(1){
    font-family: 'RMNEue-Regular';
    margin-top: 3px;
  }
  .random1 span:nth-child(4){
    font-family: 'RMNEue-Regular';
    margin-top: 3px;
  }
  .random1 span:nth-child(7){
    font-family: 'RMNEue-Regular';
    margin-top: 3px;
  }
  .random1 span:nth-child(9){
    font-family: 'RMNEue-Regular';
    margin-top: 3px;
  }
  .random span:nth-child(10){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(11){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(12){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
}
@media (min-width: 1201) and (max-width:1480px) {
  .random {
    color: #30e9de;
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
  .random span:nth-child(2){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(3){
    font-family: 'RMNEue-Regular';
  }
  .random span:nth-child(4){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(7){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(9){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(10){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(11){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(12){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
}
@media (min-width: 1480px) and (max-width:1680px) {
  .random {
    color: #30e9de;
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
  .random span:nth-child(2){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(3){
    font-family: 'RMNEue-Regular';
  }
  .random span:nth-child(4){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(7){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(9){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(10){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(11){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(12){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
}
@media (min-width: 1480px) and (max-width:10000px) {
  .random {
    color: #30e9de;
    font-size: 150px;
    line-height: 140px;
    width: 30px;
    display: flex;
    font-family: 'NEOPIXEL-Regular';
  }
  .random span:nth-child(1){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(2){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(3){
    font-family: 'RMNEue-Regular';
  }
  .random span:nth-child(4){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(7){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(9){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(10){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(11){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
  .random span:nth-child(12){
    font-family: 'RMNEue-Regular';
    margin-top: 5px;
  }
}
</style>