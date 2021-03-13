<template>
    <div >
            <h1>页面四</h1>
            <h1>普通调用store:{{$store.state.count}}</h1><!--  -->
            <h1>当前页面:{{count}}</h1>
            <h1>mapstate:{{countA}}</h1>
            <h1>mapstate:{{countB}}</h1>
            <h1>原computed变量:{{sumi}}</h1>
            <h1>action:{{$store.state.count2}}</h1>
            <h1>getterS:{{sum}}</h1>
            <h1>moduleA模块化：{{$store.state.good.me}}</h1>
            <button @click="addM(3)">addM</button>
            <button @click="action(2)">action</button>
             <button @click="add2">模块化2</button>
            
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
//    data(){},
   methods:{
       add(){
          
           this.$store.commit("add",1)
       },
    //  ...mapMutations(['add']),
    ...mapMutations({addM:'add'}),/* 重名处理方法 */
     ...mapActions(['action']),
     ...mapMutations(['add2'])
     
   },
    // computed:{
    //     //    count(){
    //     //        return this.$store.state.count
    //     //    }
        
    //   },
    //  computed:mapState({
    //        count(){
    //            return this.$store.state.count
    //        },
    //     countA:state =>state.count,
    //     countB:state =>{
    //         return state.count
    //     }
    //    })
    // computed:mapState(['count','countA','countB'])/*  与原名一致*/
    computed:{
        ...mapState(['count','countA','countB']),
        ...mapGetters(['sum']),
        sumi(){
            return 10
        }
    }
}
</script>