<template>
    <div id="root">
        <img id="background" :src="currentStatImgList[lock?0:1]">
        <div id="btn" v-if="lock" @mousedown="beginDrag" :style='{left: imgLeft+"px", background: "url(img/iphone/btn.jpg) no-repeat"}'></div>
    </div>
</template>

<script>
    export default {
        name: "iphone-unlock",
        data: function () {
            let currentStatImgList=[
                "img/iphone/1.jpg",
                "img/iphone/2.jpg",
            ];
            let lock = true;
            let inDrag = false;
            let lastCoordinateX = 0;
            let imgLeft = 30;
            return {
                currentStatImgList,
                lock,
                inDrag,
                lastCoordinateX,
                imgLeft,
            };
        },
        methods: {
            tween: function (startValue, endValue, update, start = null, end = null, duration = 1000, mode = TWEEN.Easing.Quadratic.Out) {
                function animate () {
                    if (TWEEN.update()) {
                        requestAnimationFrame(animate)
                    }
                }
                new TWEEN.Tween(startValue)
                    .to(endValue, duration)
                    .easing(mode)
                    .onStart(start)
                    .onUpdate(update)
                    .onComplete(end)
                    .start();
                animate();
            },
            beginDrag: function (event) {
                event = event || window.event;
                this.inDrag = true;
                this.lastCoordinateX = event.clientX;
            }
        },
        mounted() {
            let _this = this;
            this.$nextTick(function () {
                document.onmousemove = function (event) {
                    if (_this.inDrag) {
                        event = event || window.event;
                        _this.imgLeft = event.clientX - _this.lastCoordinateX + _this.imgLeft;
                        _this.imgLeft = _this.imgLeft<30?30:_this.imgLeft;
                        _this.imgLeft = _this.imgLeft>303?303:_this.imgLeft;
                        _this.lastCoordinateX = event.clientX;
                    }
                };
                
                document.onmouseup = function (event) {
                    if (_this.inDrag) {
                        _this.inDrag = false;
                        event = event || window.event;
                        _this.imgLeft = event.clientX - _this.lastCoordinateX + _this.imgLeft;
                        _this.imgLeft = _this.imgLeft<30?30:_this.imgLeft;
                        _this.imgLeft = _this.imgLeft>303?303:_this.imgLeft;
                        if (_this.imgLeft > 171){
                            _this.tween({x: _this.imgLeft}, {x: 303}, function (object) {
                                _this.imgLeft = object.x;
                            }, null, ()=>{_this.lock=false;}, 300)
                        }
                        else{
                            _this.tween({x:_this.imgLeft}, {x:30}, function (object) {
                                _this.imgLeft = object.x;
                            }, null, null, 300)
                        }
                    }
                }
            })
        }
    }
</script>

<style scoped>
    #root{
        display: inline-block;
        position: relative;
        margin: 0;
        padding: 0;
        user-select: none;
    }
    #background{
        display: block;
        margin: 0;
        padding: 0;
    }
    #btn{
        display: inline-block;
        position: absolute;
        bottom: 33px;
        border-radius: 10px;
        width: 93px;
        height: 62px;
    }
</style>