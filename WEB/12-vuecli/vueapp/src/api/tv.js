import request from '@/utils/request'

export function getDetail(id){
   return request({
        url:'/tv/'+id+'',
        methods:'get'
    })/* .then((res)=>{
        console.log(res);
    }) */
}
export function getList(start){
    return request({
         url:"/subject_collection/tv_domestic/items",
         methods:'get',
         params:{
             start,
             count:5
         }
     })/* .then((res)=>{
         console.log(res);
     }) */
 }