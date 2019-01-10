<template>
    <div id="root">
        <ul id="img-area" ref="box" :style='{top: imageTop+"px"}'>
            <li v-for="img in imgList" :key="img.key"
                @mouseover="clearTimeInterval"
                @mouseout="addTimeInterval">
                <img :src='"img/slideads/"+img.key+".jpg"'>
            </li>
        </ul>
        <ul id="circle-area">
            <li v-for="img in imgList" :key="img.key"
                :style='{backgroundColor: currentKey===img.key?"#ff2c36":"#ff7c57", opacity: currentKey===img.key?1:0.7}'
                @mouseover="mouseOver(img.key)"
                @mouseout="addTimeInterval">
                {{img.key}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "autoplay-slide-updown",
        data: function () {
            let imgList = [
                {key: 1},
                {key: 2},
                {key: 3},
                {key: 4},
                {key: 5},
            ];
            let currentKey = 1;
            let addend=1;
            let imageTop = 0;
            return {
                imgList,
                currentKey,
                imageTop,
                addend,
            };
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
                        _this.imageTop = object.num;
                    })
                    .start();

                animate();
            },
            addTimeInterval: function(){
                let _this = this;
                if (typeof(this.interval) === "undefined") {
                    this.interval = setInterval(function () {
                        let lastKey = _this.currentKey;
                        _this.currentKey = _this.currentKey + _this.addend;
                        if (_this.currentKey == 6) {
                            _this.currentKey = 4;
                            _this.addend = -1;
                        } else if (_this.currentKey == 0) {
                            _this.currentKey = 2;
                            _this.addend = 1;
                        }
                        let height = _this.$refs.box.childNodes[0].clientHeight;
                        _this.tweenTop(-1 * height * (lastKey - 1), -1 * height * (_this.currentKey - 1));
                    }, 2000);
                }
            },
            clearTimeInterval: function(){
                if (typeof(this.interval) !== "undefined") {
                    clearInterval(this.interval);
                    delete this.interval;
                }
            },
            mouseOver: function (key) {
                this.clearTimeInterval();
                let lastKey = this.currentKey;
                this.currentKey = key;
                let height = this.$refs.box.childNodes[0].clientHeight;
                this.tweenTop(-1*height*(lastKey-1), -1*height*(this.currentKey-1));
            },
        },
        mounted() {
            let _this = this;
            this.$nextTick(function () {
                _this.addTimeInterval();
            });
        },
        beforeDestroy() {
            this.clearTimeInterval();
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
        overflow: hidden;
    }
    #img-area{
        display: inline-block;
        position: absolute;
        left: 0px;
        margin: 0px;
        padding: 0px;
    }
    #img-area li{
        display: inline-block;
        list-style-type: none;
    }
    #img-area li img{
        opacity: 1;
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