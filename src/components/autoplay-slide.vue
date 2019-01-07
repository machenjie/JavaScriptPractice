<template>
    <div id="root">
        <ul id="img-area">
            <li v-for="img in imgList" :key="img.key"
                @mouseover="mouseOver(img.key)"
                @mouseout="mouseOut()"
            >
                <img :class="{current: currentKey===img.key}" :src='"img/slideads/"+img.key+".jpg"'
                     v-if="currentKey===img.key || lastKey===img.key"
                     :style="{opacity: currentKey===img.key?currentImgOpacity:lastImgOpacity}">
            </li>
        </ul>
        <ul id="circle-area">
            <li v-for="img in imgList" :key="img.key"
                :style='{backgroundColor: currentKey===img.key?"#ff2c36":"#ff7c57", opacity: currentKey===img.key?1:0.7}'
                @mouseover="mouseOver(img.key)"
                @mouseout="mouseOut()"
            >
                {{img.key}}
            </li>
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
          let lastKey = 5;
          let currentImgOpacity = 1;
          let lastImgOpacity = 0;
          return {
              imgList,
              currentKey,
              lastKey,
              currentImgOpacity,
              lastImgOpacity,
          };
        },
        methods: {
            tweenCurent: function (startValue, endValue) {
                function animate () {
                    if (TWEEN.update()) {
                        requestAnimationFrame(animate)
                    }
                }

                let _this=this;
                new TWEEN.Tween({ num: startValue })
                    .to({num: endValue }, 1000)
                    .easing(TWEEN.Easing.Quadratic.In)
                    .onUpdate(function (object) {
                        _this.currentImgOpacity = object.num;
                    })
                    .start();

                animate();
            },
            tweenLast: function (startValue, endValue) {
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
                        _this.lastImgOpacity = object.num;
                    })
                    .start();

                animate();
            },
            addTimeInterval: function(){
                let _this = this;
                _this.interval = setInterval(function () {
                    _this.lastKey = _this.currentKey;
                    _this.currentKey = _this.currentKey+1;
                    if (_this.currentKey == 6){
                        _this.currentKey = 1;
                    }
                    _this.tweenCurent(0, 1);
                    _this.tweenLast(1, 0);
                }, 2000);
            },
            clearTimeInterval: function(){
                if (typeof(this.interval) !== "undefined") {
                    clearInterval(this.interval);
                }
            },
            mouseOver: function (key) {
                this.clearTimeInterval();
                this.currentKey = key;
            },
            mouseOut: function () {
                this.addTimeInterval();
            }
        },
        mounted() {
            let _this = this;
            this.$nextTick(function () {
                _this.addTimeInterval();
            });
        }
    }
</script>

<style scoped>
    #root{
        display: inline-block;
        position: relative;
        margin: 0px;
        padding: 0px;
        width: 506px;
        height: 186px;
        border: 8px solid #dad7e0;
        border-radius: 8px;
    }
    #img-area{
        display: inline-block;
        margin: 0px;
        padding: 0px;
    }
    #img-area li{
        display: inline-block;
        position: absolute;
        left: 0px;
        top: 0px;
        list-style-type: none;
    }
    #img-area li img{
        opacity: 0;
    }
    #circle-area{
        position: absolute;
        margin: 0px;
        padding: 0px;
        right: 0px;
        bottom: 5px;
    }
    #circle-area li{
        display: inline-block;
        margin: 0px 5px 0px 0px;
        padding: 0px;
        width: 20px;
        height: 20px;
        border-radius: 20px;
        line-height: 20px;
        background-color: #ff7c57;
        font-size: 1rem;
        color: #f7f7f7;
        cursor: pointer;
        list-style-type: none;
    }
</style>