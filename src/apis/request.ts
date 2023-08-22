import axios from 'axios'
const service = axios.create({
  baseURL: '',//import.meta.env.VITE_RES_URL,
})
// 接口开始请求
service.interceptors.request.use(config => {
  var contentData = {
    "Content-Type": "application/json;charset=utf-8",
  }
  var contentType = config.header
  contentData = Object.assign(contentData, contentType)
  config.params;
  config.headers = contentData
  return config
}, error => {
  Promise.reject(error)
})
// 接口调用结束
service.interceptors.response.use(
  (response) => {
 
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(response => {

  return response
}, error => {

})
export default service