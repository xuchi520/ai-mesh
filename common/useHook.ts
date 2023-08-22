import { useRouter } from 'vue-router'
import { watch, ref, computed } from 'vue'
import { useMain } from './../store/index';

export default function () {
  const router = useRouter()
  const couponStore = useMain();
  const handleScroll = () => {
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    //得到html的Dom元素
    let htmlDom = document.getElementsByTagName('html')[0];
    //控制最大尺寸
    let finalSize = (htmlWidth / 7.5) > 37.5 ? 37.5 : (htmlWidth / 7.5);
    //设置根元素字体大小
    const windowWidth = ref(
      document.documentElement.clientWidth || document.body.clientWidth
    );
    const handleResize = () => {
      windowWidth.value = window.innerWidth;
      htmlDom.style.fontSize = finalSize + 'px';
    };

    if (
      navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
    ) {
      window.removeEventListener('resize', handleResize)
    } else {
      window.addEventListener('resize', handleResize);
    }
    couponStore.SET_HANDLESIZE(windowWidth)
    watch(windowWidth, (newVal) => {
      couponStore.SET_HANDLESIZE(newVal)
    }
    );
  }
  return {
    handleScroll
  }
}