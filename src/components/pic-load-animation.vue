<template>
    <div id="root" :style='{background: onLoading?"url(img/news/loading.gif) 50% 50% no-repeat":""}'>
        <div id="left-shadow" @mouseover="leftOpacity=1" @mouseout="leftOpacity=0" @click="changeNews(true)">
            <div id="left-arrow" :style="{opacity: leftOpacity}">
                &#60;
            </div>
        </div>
        <div id="right-shadow" @mouseover="rightOpacity=1" @mouseout="rightOpacity=0" @click="changeNews(false)">
            <div id="right-arrow" :style="{opacity: rightOpacity}">
                &#62;
            </div>
        </div>
        <div id="tittle" :style='{top: titleTop+"px"}'>{{onLoading?"":newsList[currentNewsIndex].title}}</div>
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
            let leftOpacity = 0;
            let rightOpacity = 0;
            let titleTop = -50;
            return {
                newsList,
                currentNewsIndex,
                onLoading,
                leftOpacity,
                rightOpacity,
                titleTop,
            }
        },
        methods: {
            tweenTop: function (startValue, endValue) {
                function animate () {
                    if (TWEEN.update()) {
                        requestAnimationFrame(animate)
                    }
                }

                let _this=this;
                new TWEEN.Tween({ num: startValue })
                    .to({num: endValue }, 1000)
                    .easing(TWEEN.Easing.Quadratic.Out)
                    .onUpdate(function (object) {
                        _this.titleTop = object.num;
                    })
                    .start();

                animate();
            },
            loadData: function () {
                this.onLoading = false;
                this.tweenTop(this.titleTop, 0);
            },
            changeNews: function(leftArrow){
                if (leftArrow){
                    this.currentNewsIndex=((--this.currentNewsIndex)===-1)?this.newsList.length-1:this.currentNewsIndex
                }else{
                    this.currentNewsIndex=((++this.currentNewsIndex)===this.newsList.length)?0:this.currentNewsIndex
                }
                this.onLoading = true;
                this.titleTop = -50;
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
        overflow: hidden;
    }
    #left-shadow{
        display: inline-block;
        position: absolute;
        top: 0px;
        left: 0px;
        height: 400px;
        width: 400px;
        margin: 0px;
        padding: 0px;
        cursor: pointer;
    }
    #left-arrow{
        display: inline-block;
        position: absolute;
        margin: 0px;
        padding: 0px;
        top: 140px;
        left: 20px;
        font-size: 80px;
        color: #ffffff;
        background-color: RGBA(0, 0, 0, 0.6);
        border-radius: 5px;
        text-align: center;
    }
    #right-shadow{
        display: inline-block;
        position: absolute;
        top: 0px;
        left: 400px;
        height: 400px;
        width: 400px;
        margin: 0px;
        padding: 0px;
        cursor: pointer;
    }
    #right-arrow{
        display: inline-block;
        position: absolute;
        margin: 0px;
        padding: 0px;
        top: 140px;
        right: 20px;
        font-size: 80px;
        color: #ffffff;
        background-color: RGBA(0, 0, 0, 0.6);
        border-radius: 5px;
        text-align: center;
    }
    #tittle{
        display: inline-block;
        position: absolute;
        left: 0px;
        height: 50px;
        width: 800px;
        margin: 0px;
        padding: 0px;
        background-color: RGBA(0, 0, 0, 0.5);
        text-align: center;
        line-height: 50px;
        color: #ffffff;
        font-size: 20px;
    }
    img{
        display: inline-block;
        position: absolute;
        top: 0px;
        left: 0px;
        height: 400px;
        width: 800px;
        margin: 0px;
        padding: 0px;
        z-index: -1;
    }
</style>