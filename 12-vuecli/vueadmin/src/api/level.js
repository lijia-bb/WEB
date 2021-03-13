import request from '@/utils/request'
//展示信息
export function levelList(){
    return request({
        url:"/showlevel",
        method:'get'
    })
}
//增加信息
export function levelAdd(data) {
    return request({
      url: '/insertOneLevel',
      method: 'post',
      data
    })
  }
  //删除信息
  export function levelRemove(params) {
    return request({
      url: '/delOnelevel',
      method: 'get',
      params
    })
  }
//地址展示
  export function adsList() {
    return request({
      url: '/showAddresses',
      method: 'get',
    })
  }
  //删除地址
  export function delAds(params) {
    return request({
      url: '/delOneAddress',
      method: 'get',
      params
    })
  }
//增加地址
  export function addAds(data) {
    return request({
      url: '/insertOneAddress',
      method: 'post',
      data
    })
  }


  //信息管理展示

  export function showMessage(){
    return request({
      url:"/showMessage",
      method:'get'
    })
   
  }
  //信息管理删除

  export function delMessage(params){
    return request({
      url:"/delOneMessage",
      method:"get",
      params
    })
  }

  //信息管理添加

  export function addMessage(data){
    return request({
      url:"/insertAllMessage",
      method:"post",
      data
    })
  }

  //地址筛选信息
  export function searchAddress(data){
    return request({
      url:"/searchaddressid",
      method:"post",
      data
    })
  }

  //根据id搜索信息

  export function searchMessage(params){
    return request({
      url:"/showOneMessage",
      method:"get",
      params
    })
  }

  //信息修改
  export function resetMessage(data){
    return request({
      url:"/updateMessage",
      method:"post",
      data
    })
  }