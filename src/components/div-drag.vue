<template>
    <div id="root" :style='{top: offsetTop+"px", left: offsetLeft+"px"}'
         @mousedown="mouseDown"
    >
        <p id="replay" @click="replay" @mousedown.stop="">
            click to replay
        </p>
        <pre id="info" @mousedown.stop="">Drag: {{drag}}

offsetTop: {{offsetTop}}

offsetLeft: {{offsetLeft}}</pre>
    </div>
</template>

<script>
    export default {
        name: "div-drag",
        data: function () {
          let drag = false;
          let offsetTop = 200;
          let offsetLeft = 200;
          let offsetPairList = [];
          return {
              drag,
              offsetTop,
              offsetLeft,
              offsetPairList,
          }
        },
        methods: {
            mouseDown: function () {
                this.drag = true;
                this.lastMouse = {x: event.clientX, y: event.clientY};
                if (typeof(this.timeval) !== "undefined"){
                    clearInterval(this.timeval);
                    delete this.timeval;
                }
            },
            replay: function () {
                this.drag = false;
                if (typeof(this.timeval) === "undefined"){
                    let _this = this;
                    this.timeval = setInterval(function () {
                        let offsetPair = _this.offsetPairList.pop();
                        if (typeof(offsetPair) === "undefined"){
                            clearInterval(_this.timeval);
                            delete _this.timeval;
                        }
                        else {
                            _this.offsetLeft = offsetPair.offsetLeft;
                            _this.offsetTop = offsetPair.offsetTop;
                        }
                    }, 30);
                }
            }
        },
        mounted() {
            let _this = this;
            this.$nextTick(function () {
                document.onmousemove = function () {
                    if (_this.drag) {
                        _this.offsetLeft = _this.offsetLeft + event.clientX - _this.lastMouse.x;
                        _this.offsetTop = _this.offsetTop + event.clientY - _this.lastMouse.y;
                        _this.offsetLeft = _this.offsetLeft<0?0:_this.offsetLeft;
                        _this.offsetTop = _this.offsetTop<0?0:_this.offsetTop;
                        _this.offsetLeft = _this.offsetLeft+300>window.innerWidth?window.innerWidth-300:_this.offsetLeft;
                        _this.offsetTop = _this.offsetTop+150>window.innerHeight?window.innerHeight-150:_this.offsetTop;
                        _this.lastMouse = {x: event.clientX, y: event.clientY};
                        if (typeof(_this.last0ffsetPair)==="undefined"
                            || _this.last0ffsetPair.offsetLeft !== _this.offsetLeft
                            || _this.last0ffsetPair.offsetTop !== _this.offsetTop) {
                            _this.offsetPairList.push({
                                offsetLeft: _this.offsetLeft,
                                offsetTop: _this.offsetTop,
                            });
                            _this.last0ffsetPair = {
                                offsetLeft: _this.offsetLeft,
                                offsetTop: _this.offsetTop,
                            };
                        }
                    }
                };
                document.onmouseup = function () {
                    _this.drag = false;
                }
            });
        }
    }
</script>

<style scoped>
    #root{
        display: inline-block;
        position: absolute;
        margin: 0px;
        padding: 0px;
        width: 300px;
        height: 150px;
        background-color: #6382a2;
        border: 2px solid #3e3e3e;
        text-align: right;
        cursor: move;
        user-select: none;
    }
    #replay{
        display: inline-block;
        margin: 0px;
        padding: 0px 10px 0px 0px;
        color: #ffffff;
        cursor: pointer;
    }
    #replay:hover{
        color: #353334;
    }
    #info{
        display: block;
        margin: 0px;
        padding: 0px 0px 0px 10px;
        text-align: left;
        color: #ffffff;
        background-color: #96c4ef;
        border-top: 2px solid #3e3e3e;
        cursor: default;
    }
</style>