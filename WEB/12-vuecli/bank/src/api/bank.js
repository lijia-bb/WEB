import requst from '@/utils/requst'


//银行列表
export function bankList(){
    return requst({
        url:'/showAddresses',
        method:'get',
    })
}

//根据地址筛选信息

export function addressList(data){
    return requst({
        url:"/searchaddressid",
        method:"post",
        data
    })
}

//获取信息列表

export function messageList(){
    return requst({
        url:"/showMessage",
        method:'get'
    })
}

