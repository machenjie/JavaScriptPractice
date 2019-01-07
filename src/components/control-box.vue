<template>
    <div id="root">
        <pre id="action-dec">红色方块为键盘操作区域，您可以进行如下操作：

上：↑ 下：↓ 左：← 右：→

Ctrl + 1 : 背景变为绿色
Ctrl + 2 : 背景变为黄色
Ctrl + 3 : 背景变为蓝色
Ctrl + ↑ : 放大
Ctrl + ↓ : 缩小</pre>
        <div id="box"
             :style='{top: boxStyle.top+"px",
             left: boxStyle.left+"px",
             width: boxStyle.size+"px",
             height: boxStyle.size+"px",
             backgroundColor: boxStyle.backgroundColor}'>
        </div>
    </div>
</template>

<script>
    export default {
        name: "control-box",
        data: function () {
            let boxStyle={
                top: 400,
                left: 100,
                size: 32,
                backgroundColor: "#ff9119",
            };
            let arrowUp = false;
            let arrowDown = false;
            let arrowLeft = false;
            let arrowRight = false;
            return {
                boxStyle,
                arrowUp,
                arrowDown,
                arrowLeft,
                arrowRight,
            }
        },
        mounted() {
            let _this = this;
            this.$nextTick(function () {
                document.onkeydown = function(event){
                    let eventTmp = event || window.event;
                    let capture = false;
                    if (eventTmp.ctrlKey) {
                        capture = true;
                        switch (eventTmp.code) {
                            case "Digit1":
                                _this.boxStyle.backgroundColor = "green";
                                break;
                            case "Digit2":
                                _this.boxStyle.backgroundColor = "yellow";
                                break;
                            case "Digit3":
                                _this.boxStyle.backgroundColor = "blue";
                                break;
                            case "ArrowUp":
                                _this.boxStyle.size = _this.boxStyle.size*2;
                                let max_height = _this.boxStyle.top+_this.boxStyle.size>window.innerHeight?_this.boxStyle.size/2:_this.boxStyle.size;
                                let max_width = _this.boxStyle.left+_this.boxStyle.size>window.innerWidth?_this.boxStyle.size/2:_this.boxStyle.size;
                                _this.boxStyle.size = Math.min(max_height, max_width);
                                break;
                            case "ArrowDown":
                                _this.boxStyle.size = _this.boxStyle.size/2;
                                _this.boxStyle.size = _this.boxStyle.size<1?1:_this.boxStyle.size;
                                break;
                            default:
                                capture = false;
                        }
                    }
                    else{
                        capture = true;
                        switch (eventTmp.code) {
                            case "ArrowUp":
                                _this.arrowUp = true;
                                break;
                            case "ArrowDown":
                                _this.arrowDown = true;
                                break;
                            case "ArrowLeft":
                                _this.arrowLeft = true;
                                break;
                            case "ArrowRight":
                                _this.arrowRight = true;
                                break;
                            default:
                                capture = false;
                        }
                        if (capture && typeof(_this.timeval)==="undefined") {
                            _this.timeval = setInterval(function () {
                                if ( _this.arrowUp) {
                                    _this.boxStyle.top = _this.boxStyle.top - 10;
                                    _this.boxStyle.top = _this.boxStyle.top<=0?0:_this.boxStyle.top;
                                }
                                else if (_this.arrowDown){
                                    _this.boxStyle.top = _this.boxStyle.top + 10;
                                    _this.boxStyle.top = _this.boxStyle.top+_this.boxStyle.size>=window.innerHeight?window.innerHeight-_this.boxStyle.size:_this.boxStyle.top;
                                }
                                if (_this.arrowLeft){
                                    _this.boxStyle.left = _this.boxStyle.left - 10;
                                    _this.boxStyle.left = _this.boxStyle.left<=0?0:_this.boxStyle.left;
                                }
                                else if (_this.arrowRight){
                                    _this.boxStyle.left = _this.boxStyle.left + 10;
                                    _this.boxStyle.left = _this.boxStyle.left+_this.boxStyle.size>=window.innerWidth?window.innerWidth-_this.boxStyle.size:_this.boxStyle.left;
                                }
                            }, 40);
                        }
                    }
                    return !capture;
                };
                document.onkeyup = function (event) {
                    let eventTmp = event || window.event;
                    switch (eventTmp.code) {
                        case "ArrowUp":
                            _this.arrowUp = false;
                            break;
                        case "ArrowDown":
                            _this.arrowDown = false;
                            break;
                        case "ArrowLeft":
                            _this.arrowLeft = false;
                            break;
                        case "ArrowRight":
                            _this.arrowRight = false;
                            break;
                    }
                    if (!_this.arrowUp && !_this.arrowDown && !_this.arrowLeft && !_this.arrowRight && typeof(_this.timeval)!=="undefined"){
                        clearInterval(_this.timeval);
                        delete _this.timeval;
                    }
                }
            })
        }
    }
</script>

<style scoped>
    #root{
        display: block;
        margin: 0px;
        padding: 0px;
    }
    #action-dec{
        display: block;
        margin: 0px;
        padding: 0px;
        background-color: #ececec;
        color: #008e82;
        font-size: 1rem;
        text-align: left;
        border: 1px dashed #000000;
    }
    #box{
        position: absolute;
    }
</style>