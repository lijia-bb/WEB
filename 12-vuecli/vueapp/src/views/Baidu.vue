<template>
    <div>
        <h1>百度地图</h1>
        <baidu-map class="bm-view" ak="7VioLfXiVFLiQQ0MkW1GqYzYnwlo6bui" center="广西">
            <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
             </baidu-map>
    </div>
</template>
<script>
// import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
export default {
    // components:{
    //     BaiduMap
    // }
}
</script>
<style  scoped>
.bm-view{
    width: 100vw;
    height: 100vh;
}
</style>