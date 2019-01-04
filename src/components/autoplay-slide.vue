<template>
    <div id="root">
        <ul id="img-area">
            <li v-for="img in imgList" :key="img.key">
                <img :class="{current: currentKey===img.key}" :src='"img/slideads/"+img.key+".jpg"'>
            </li>
        </ul>
        <ul id="circle-area">

        </ul>
    </div>
</template>

<script>
    export default {
        name: "autoplay-slide",
        data: function () {
          let imgList = [
              {key: 1},
              {key: 2},
              {key: 3},
              {key: 4},
              {key: 5},
          ];
          let currentKey = 1;
          return {
              imgList,
              currentKey,
          };
        },
    }
</script>

<style scoped>
    #root{
        display: inline-block;
        margin: 0px;
        padding: 0px;
    }
    #img-area{
        display: inline-block;
        position: relative;
        margin: 0px;
        padding: 0px;
    }
    #img-area li{
        position: absolute;
        top: 0px;
        left: 0px;
        list-style-type: none;
    }
    #img-area li img{
        opacity: 0;
    }
    #img-area li .current{
        opacity: 1;
    }
</style>