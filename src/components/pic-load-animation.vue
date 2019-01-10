<template>
    <div id="root">
        <div id="left-shadow">
            <div id="left-arrow">
                &#60;
            </div>
        </div>
        <div id="right-shadow">
            <div id="right-arrow">
                &#62;
            </div>
        </div>
        <div id="tittle">{{onLoading?"":newsList[currentNewsIndex].title}}</div>
        <img :src="newsList[currentNewsIndex].imgSrc" @load="loadData" :style="{opacity: onLoading?0:1}">
    </div>
</template>

<script>
    export default {
        name: "pic-load-animation",
        data: function () {
            let newsList = [
                {"imgSrc" : "http://img1.gtimg.com/news/pics/hv1/106/238/825/53706421.jpg", "title" : "7月26日，吊车将事故现场的车头残片吊至大型运输车辆上。"},
                {"imgSrc" : "http://img1.gtimg.com/news/pics/hv1/105/238/825/53706420.jpg", "title" : "7月26日，一辆大卡车准备驶离事故现场。"},
                {"imgSrc" : "http://img1.gtimg.com/news/pics/hv1/101/238/825/53706416.jpg", "title" : "7月26日，工人在给最后一节车厢盖上彩条布，准备运离现场。"},
                {"imgSrc" : "http://img1.gtimg.com/news/pics/hv1/99/238/825/53706414.jpg", "title" : "7月26日，一名工人在事故现场最后一节车厢上作业。"},
                {"imgSrc" : "http://img1.gtimg.com/news/pics/hv1/100/238/825/53706415.jpg", "title" : "7月26日，工人在给最后一节车厢盖上彩条布，准备运离现场。"}
            ];
            let currentNewsIndex = 0;
            let onLoading = true;
            return {
                newsList,
                currentNewsIndex,
                onLoading,
            }
        },
        methods: {
            loadData: function () {
                this.onLoading = false;
            }
        }
    }
</script>

<style scoped>
    #root{
        position: relative;
        display: inline-block;
        height: 400px;
        width: 800px;
        margin: 0px;
        padding: 0px;
    }
</style>